/**
 * The feature registry is the single source of truth for everything the CLI can
 * add to a generated project. Each feature declares the npm dependencies it
 * needs, the env vars it relies on, the template directory its files live in,
 * any post-scaffold setup commands, and the other features it requires.
 *
 * To add a new feature: append an entry here and drop its files in
 * `templates/features/<id>/`. The prompt list and scaffolding read from this
 * registry automatically.
 */

export type FeatureId =
  | 'auth'
  | 'commit-tooling'
  | 'dark-mode'
  | 'github-actions'
  | 'localization'
  | 'markdown'
  | 'neon-drizzle'
  | 'storybook'
  | 'testing'

export interface Feature {
  id: FeatureId
  /** Short label shown in the multiselect prompt. */
  label: string
  /** One-line explanation shown as prompt hint. */
  hint: string
  /** Pre-selected in the prompt when true. */
  recommended?: boolean
  /** Other features that must be enabled for this one to work. */
  requires?: FeatureId[]
  /** Runtime deps added to the generated package.json. */
  dependencies?: Record<string, string>
  /** Dev deps added to the generated package.json. */
  devDependencies?: Record<string, string>
  /** Scripts merged into the generated package.json. */
  scripts?: Record<string, string>
  /** Env keys appended to the generated .env-template. */
  env?: { key: string; comment?: string; value?: string }[]
  /** Template folder under templates/features/<templateDir>. */
  templateDir?: string
  /** Human-readable follow-up steps printed after scaffolding. */
  postInstallNotes?: string[]
}

export const FEATURES: Feature[] = [
  {
    dependencies: {
      '@better-auth/drizzle-adapter': '^1.7.7',
      'better-auth': '^1.7.7',
    },
    env: [
      {
        comment: 'Base URL of your app (used for callbacks)',
        key: 'BETTER_AUTH_URL',
        value: 'http://localhost:3000',
      },
      {
        comment: 'Random secret — generate with: openssl rand -base64 32',
        key: 'BETTER_AUTH_SECRET',
        value: '',
      },
    ],
    hint: 'Email/password + sessions, protected routes',
    id: 'auth',
    label: 'Authentication (Better Auth)',
    postInstallNotes: [
      'Set BETTER_AUTH_URL and BETTER_AUTH_SECRET in `.env` (generate the secret with `openssl rand -base64 32`).',
      'Generate auth tables: `vp dlx auth@latest generate`, then `vp run db:push`.',
    ],
    recommended: true,
    requires: ['neon-drizzle', 'localization', 'dark-mode'],
    templateDir: 'auth',
  },
  {
    devDependencies: {
      '@commitlint/cli': '^21.2.3',
      '@commitlint/config-conventional': '^21.2.3',
      commitizen: '^4.3.2',
      'cz-conventional-changelog': '^3.3.0',
    },
    hint: 'Commitizen, commitlint, and conventional commits',
    id: 'commit-tooling',
    label: 'Commit tooling',
    scripts: {
      commit: 'git add . && git commit',
      cz: 'cz',
    },
    templateDir: 'commit-tooling',
  },
  {
    hint: 'SSR-safe light/dark/system theme with persistence',
    id: 'dark-mode',
    label: 'Dark mode / theming',
    recommended: true,
    templateDir: 'dark-mode',
  },
  {
    hint: 'PR workflow: format, lint, test, build',
    id: 'github-actions',
    label: 'GitHub Actions CI',
    templateDir: 'github-actions',
  },
  {
    dependencies: {
      '@inlang/paraglide-js-react': '^1.0.3',
    },
    devDependencies: {
      '@inlang/paraglide-js': '^2.27.0',
    },
    hint: 'Compiled, type-safe i18n (English + Japanese to start)',
    id: 'localization',
    label: 'Localization (Paraglide)',
    postInstallNotes: [
      'Edit translations in `messages/<locale>.json`; add locales in project.inlang/settings.json.',
    ],
    recommended: true,
    templateDir: 'localization',
  },
  {
    dependencies: {
      "@content-collections/mdx": "^0.2.2",
      "gray-matter": "^4.0.3",
      "hast-util-to-string": "^3.0.1",
      "html-react-parser": "^6.1.8",
      "prettier": "^3.9.10",
      "rehype-raw": "^7.0.0",
      "rehype-slug": "^6.0.0",
      "rehype-stringify": "^10.0.1",
      "remark-gfm": "^4.0.1",
      "remark-parse": "^11.0.0",
      "remark-rehype": "^11.1.2",
      "shiki": "^4.5.0",
      "unified": "^11.0.5",
      "unist-util-visit": "^5.1.0"
    },
    devDependencies: {
      "@content-collections/core": "^0.15.3",
      "@content-collections/vite": "^0.3.1",
      "@types/hast": "^3.0.5"
    },
    hint: 'Author MDX with front matter, reusable components, GitHub Flavored Markdown, and highlighted code',
    id: 'markdown',
    label: 'Markdown (MDX)',
    postInstallNotes: [
      'Add `.mdx` files under `src/features/docs/components/` with `title` and `description` front matter; the `components` collection is generated automatically.',
      'Import `allComponents` from `content-collections` and render a document with the `Mdx` component from `@/components/mdx` (see the Markdown section in README).',
    ],
    templateDir: 'markdown',
  },
  {
    dependencies: {
      '@neondatabase/serverless': '^1.2.0',
      'drizzle-orm': '^0.45.4',
      pg: '^8.23.1',
    },
    devDependencies: {
      '@types/pg': '^8.23.1',
      dotenv: '^18.0.7',
      'drizzle-kit': '0.31.11',
    },
    env: [
      {
        comment: 'Neon Postgres connection string — https://neon.tech',
        key: 'DATABASE_URL',
        value: 'postgresql://user:password@your-neon-host.neon.tech/dbname?sslmode=require',
      },
    ],
    hint: 'Serverless Postgres with type-safe queries and migrations',
    id: 'neon-drizzle',
    label: 'Neon DB + Drizzle ORM',
    postInstallNotes: [
      'Create `.env` from `.env-template` (`cp .env-template .env`) and set DATABASE_URL to your Neon connection string.',
      'Run `vp run db:generate` then `vp run db:push` to create your schema.',
    ],
    recommended: true,
    scripts: {
      'db:generate': 'drizzle-kit generate',
      'db:migrate': 'drizzle-kit migrate',
      'db:pull': 'drizzle-kit pull',
      'db:push': 'drizzle-kit push',
      'db:studio': 'drizzle-kit studio',
    },
    templateDir: 'neon-drizzle',
  },
  {
    devDependencies: {
      '@storybook/addon-a11y': '^10.6.2',
      '@storybook/addon-docs': '^10.6.2',
      '@storybook/addon-themes': '^10.6.2',
      '@storybook/addon-vitest': '^10.6.2',
      '@storybook/react-vite': '^10.6.2',
      '@vitest/browser-playwright': 'catalog:',
      playwright: '^1.64.0',
      storybook: '^10.6.2',
    },
    hint: 'Component development and visual testing',
    id: 'storybook',
    label: 'Storybook',
    scripts: {
      'build-storybook': 'storybook build',
      storybook: 'storybook dev -p 6006',
    },
    templateDir: 'storybook',
  },
  {
    devDependencies: {
      '@testing-library/dom': '^10.4.2',
      '@testing-library/jest-dom': '^7.0.1',
      '@testing-library/react': '^16.3.3',
      jsdom: '^30.1.2',
      playwright: '^1.64.0',
    },
    hint: 'Unit and browser tests with Testing Library',
    id: 'testing',
    label: 'Testing (Vitest + Playwright)',
    recommended: true,
    scripts: {
      test: 'vp test',
    },
    templateDir: 'testing',
  },
]

export const FEATURE_BY_ID: Record<FeatureId, Feature> = Object.fromEntries(
  FEATURES.map((feature) => [feature.id, feature]),
) as Record<FeatureId, Feature>

/**
 * Expand a user's selection to include any required dependencies (e.g. auth
 * pulls in neon-drizzle). Returns the full, de-duplicated set.
 */
export function resolveSelection(selected: FeatureId[]): FeatureId[] {
  const resolved = new Set<FeatureId>(),
    visit = (id: FeatureId) => {
      if (resolved.has(id)) {
        return
      }
      resolved.add(id)
      for (const required of FEATURE_BY_ID[id].requires ?? []) {
        visit(required)
      }
    }

  for (const id of selected) {
    visit(id)
  }

  return FEATURES.filter((feature) => resolved.has(feature.id)).map((feature) => feature.id)
}
