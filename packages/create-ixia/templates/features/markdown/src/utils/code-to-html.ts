import type { BuiltInParserName } from 'prettier'
import babelPlugin from 'prettier/plugins/babel'
import prettierPluginEstree from 'prettier/plugins/estree'
import prettierPluginHtml from 'prettier/plugins/html'
import prettierPluginMarkdown from 'prettier/plugins/markdown'
import prettierPluginPostcss from 'prettier/plugins/postcss'
import prettierPluginTypescript from 'prettier/plugins/typescript'
import { format } from 'prettier/standalone'
import type { BundledLanguage } from 'shiki/bundle/web'

const prettierParserByLanguage: Partial<Record<BundledLanguage, BuiltInParserName>> = {
    css: 'css',
    html: 'html',
    javascript: 'babel',
    js: 'babel',
    json: 'json',
    jsx: 'babel',
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
    })

export { formatCode, prettierParserByLanguage }
