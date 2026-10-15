import { queryOptions } from '@tanstack/react-query'
import { format } from 'prettier'
import type { BuiltInParserName } from 'prettier'
import babelPlugin from 'prettier/plugins/babel'
import prettierPluginEstree from 'prettier/plugins/estree'
import prettierPluginHtml from 'prettier/plugins/html'
import prettierPluginMarkdown from 'prettier/plugins/markdown'
import prettierPluginPostcss from 'prettier/plugins/postcss'
import prettierPluginTypescript from 'prettier/plugins/typescript'
import type { BundledLanguage } from 'shiki/bundle/web'

import { highlighter } from '@/lib/shiki.ts'

// Map Shiki language names to Prettier parsers to format before rendering.
const prettierParserByLanguage: Partial<Record<BundledLanguage, BuiltInParserName>> = {
    css: 'css',
    html: 'html',
    javascript: 'babel',
    js: 'babel',
    json: 'json',
    markdown: 'markdown',
    md: 'markdown',
    scss: 'scss',
    ts: 'typescript',
    tsx: 'typescript',
    typescript: 'typescript',
  },
  formatCode = (code: string, lang: BuiltInParserName) =>
    format(code, {
      parser: lang,
      plugins: [
        babelPlugin,
        prettierPluginEstree,
        prettierPluginHtml,
        prettierPluginMarkdown,
        prettierPluginPostcss,
        prettierPluginTypescript,
      ],
    }),
  codeToHtml = async (code: string, lang: BundledLanguage) => {
    const parser = prettierParserByLanguage[lang]
    let formattedCode = code
    if (parser) {
      formattedCode = await formatCode(code, parser)
    }
    return highlighter.codeToHtml(formattedCode, {
      lang,
      themes: {
        dark: 'github-dark',
        light: 'github-light',
      },
      transformers: [
        {
          pre: (node) => {
            node.properties.style = ''
            return node
          },
        },
      ],
    })
  },
  formatCodeQueryOptions = (code: string, lang: BuiltInParserName) =>
    queryOptions({
      queryFn: () => formatCode(code, lang),
      queryKey: ['formatCode', code, lang],
    }),
  codeToHtmlQueryOptions = (code: string, lang: BundledLanguage) =>
    queryOptions({
      queryFn: () => codeToHtml(code, lang),
      queryKey: ['codeToHtml', code, lang],
    })

export { codeToHtmlQueryOptions, formatCodeQueryOptions }
