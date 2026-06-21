import { queryOptions } from '@tanstack/react-query'
import prettier, { type BuiltInParserName } from 'prettier'
import * as prettierPluginBabel from 'prettier/plugins/babel'
import * as prettierPluginEstree from 'prettier/plugins/estree'
import * as prettierPluginHtml from 'prettier/plugins/html'
import * as prettierPluginMarkdown from 'prettier/plugins/markdown'
import * as prettierPluginPostcss from 'prettier/plugins/postcss'
import * as prettierPluginTypescript from 'prettier/plugins/typescript'
import { highlighter } from '#/lib/shiki.ts'

import type { BundledLanguage } from 'shiki/bundle/web'

const formatCode = async (code: string, lang: BuiltInParserName) => {
  return await prettier.format(code, {
    parser: lang,
    plugins: [
      prettierPluginBabel,
      prettierPluginEstree,
      prettierPluginHtml,
      prettierPluginMarkdown,
      prettierPluginPostcss,
      prettierPluginTypescript,
    ],
  })
}

const codeToHtml = async (code: string, lang: BundledLanguage) => {
  const formattedCode = await formatCode(code, lang as BuiltInParserName)
  return highlighter.codeToHtml(formattedCode, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
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
}

export const formatCodeQueryOptions = (code: string, lang: BuiltInParserName) =>
  queryOptions({
    queryKey: ['formatCode', code, lang],
    queryFn: () => formatCode(code, lang),
  })

export const codeToHtmlQueryOptions = (code: string, lang: BundledLanguage) =>
  queryOptions({
    queryKey: ['codeToHtml', code, lang],
    queryFn: () => codeToHtml(code, lang),
  })
