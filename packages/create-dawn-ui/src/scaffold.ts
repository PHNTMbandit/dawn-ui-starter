import { existsSync } from 'node:fs'
import { cp, mkdir, readFile, readdir, rename, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { FEATURE_BY_ID } from './features.js'
import type { Feature, FeatureId } from './features.js'

export interface ScaffoldOptions {
  projectName: string
  targetDir: string
  templatesDir: string
  features: FeatureId[]
}

/**
 * Copy the base template plus every selected feature's files into the target
 * directory, then generate package.json and .env-template from the registry.
 */
export async function scaffold(options: ScaffoldOptions): Promise<void> {
  const { targetDir, templatesDir, features } = options

  await mkdir(targetDir, { recursive: true })
  await copyTemplate(path.join(templatesDir, 'base'), targetDir)

  for (const id of features) {
    const feature = FEATURE_BY_ID[id]
    if (!feature.templateDir) {
      continue
    }
    const from = path.join(templatesDir, 'features', feature.templateDir)
    if (existsSync(from)) {
      await copyTemplate(from, targetDir)
    }
  }

  await writePackageJson(options)
  await writeEnvTemplate(options)
  await applyConditionals(targetDir, new Set(features))
  await restoreDotfiles(targetDir)
}

const CONDITIONAL_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mts', '.cts'])

/**
 * Walk the generated project and resolve `#if` / `#else` / `#endif` directives
 * so base shell files only keep code for the features that were selected.
 */
async function applyConditionals(dir: string, features: Set<FeatureId>): Promise<void> {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await applyConditionals(full, features)
    } else if (CONDITIONAL_EXTENSIONS.has(path.extname(entry.name))) {
      const content = await readFile(full, 'utf8')
      if (content.includes('#if')) {
        await writeFile(full, processConditionals(content, features), 'utf8')
      }
    }
  }
}

/**
 * Directives live in line comments or JSX block comments. A condition lists
 * one or more feature ids; the block is kept if ANY of them match.
 */
function processConditionals(content: string, features: Set<FeatureId>): string {
  const evalCond = (raw: string): boolean => {
    const tokens = raw
      .replace(/\*\/\}?/g, '')
      .replace(/\*\//g, '')
      .trim()
      .split(/[\s,|]+/)
      .filter(Boolean)
    return tokens.some((token) => features.has(token as FeatureId))
  }

  const stack: { branchActive: boolean; matched: boolean; parentEmitting: boolean }[] = []
  const emitting = () => stack.every((frame) => frame.branchActive)
  const out: string[] = []
  const eol = content.includes('\r\n') ? '\r\n' : '\n'

  for (const line of content.split(/\r?\n/)) {
    const directive = line.match(/^\s*(?:\/\/|\{\/\*)\s*#(if|else|endif)\b(.*)$/)
    if (directive) {
      const kind = directive[1]
      if (kind === 'if') {
        const parentEmitting = emitting()
        const matched = parentEmitting && evalCond(directive[2] ?? '')
        stack.push({ branchActive: matched, matched, parentEmitting })
      } else if (kind === 'else') {
        const frame = stack[stack.length - 1]
        if (frame) {
          frame.branchActive = frame.parentEmitting && !frame.matched
        }
      } else {
        stack.pop()
      }
      continue
    }
    if (emitting()) {
      out.push(line)
    }
  }

  return out.join(eol)
}

/**
 * Npm strips files named `.gitignore` from published packages, so templates
 * store them as `_gitignore`. Rename them back in the generated project.
 */
async function restoreDotfiles(dir: string): Promise<void> {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await restoreDotfiles(full)
    } else if (entry.name === '_gitignore') {
      await rename(full, path.join(dir, '.gitignore'))
    }
  }
}

async function copyTemplate(from: string, to: string): Promise<void> {
  await cp(from, to, { force: true, recursive: true })
}

async function writePackageJson(options: ScaffoldOptions): Promise<void> {
  const { projectName, targetDir, templatesDir, features } = options,
    basePkgPath = path.join(templatesDir, 'base', 'package.json'),
    base = JSON.parse(await readFile(basePkgPath, 'utf8')) as PackageJson,
    pkg: PackageJson = {
      ...base,
      dependencies: { ...base.dependencies },
      devDependencies: { ...base.devDependencies },
      name: projectName,
      scripts: { ...base.scripts },
    }

  for (const id of features) {
    const feature = FEATURE_BY_ID[id]
    Object.assign(pkg.dependencies!, feature.dependencies ?? {})
    Object.assign(pkg.devDependencies!, feature.devDependencies ?? {})
    Object.assign(pkg.scripts!, feature.scripts ?? {})
  }

  pkg.dependencies = sortRecord(pkg.dependencies!)
  pkg.devDependencies = sortRecord(pkg.devDependencies!)
  pkg.scripts = sortRecord(pkg.scripts!)

  await writeFile(path.join(targetDir, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`, 'utf8')
}

async function writeEnvTemplate(options: ScaffoldOptions): Promise<void> {
  const { targetDir, features } = options,
    lines: string[] = []

  for (const id of features) {
    const feature = FEATURE_BY_ID[id]
    if (!feature.env?.length) {
      continue
    }
    lines.push(`# ${feature.label}`)
    for (const entry of feature.env) {
      if (entry.comment) {
        lines.push(`# ${entry.comment}`)
      }
      lines.push(`${entry.key}=${entry.value ?? ''}`)
    }
    lines.push('')
  }

  if (lines.length === 0) {
    return
  }

  await writeFile(path.join(targetDir, '.env-template'), `${lines.join('\n')}\n`, 'utf8')
}

export function collectPostInstallNotes(
  features: FeatureId[],
): { feature: Feature; notes: string[] }[] {
  return features
    .map((id) => FEATURE_BY_ID[id])
    .filter((feature): feature is Feature => Boolean(feature.postInstallNotes?.length))
    .map((feature) => ({ feature, notes: feature.postInstallNotes! }))
}

function sortRecord(record: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(record).sort(([a], [b]) => a.localeCompare(b)))
}

interface PackageJson {
  name?: string
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  scripts?: Record<string, string>
  [key: string]: unknown
}
