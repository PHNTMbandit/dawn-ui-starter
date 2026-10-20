import type { Element, Root } from 'hast'
import { toString } from 'hast-util-to-string'
import type { BundledLanguage } from 'shiki/bundle/web'
import { visit } from 'unist-util-visit'

import { highlighter, highlightCodeToHast } from '@/lib/shiki'

function rehypeShiki() {
  const supportedLanguages = highlighter.getLoadedLanguages()

  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || index === undefined || !parent) {
        return
      }

      const code = node.children.find(
          (child): child is Element => child.type === 'element' && child.tagName === 'code',
        ),
        languageClass = code?.properties.className?.find(
          (className): className is string =>
            typeof className === 'string' && className.startsWith('language-'),
        ),
        lang = supportedLanguages.find(
          (language): language is BundledLanguage =>
            language === languageClass?.slice('language-'.length),
        )

      if (code && lang) {
        const [pre] = highlightCodeToHast(toString(code), lang).children

        if (pre?.type === 'element') {
          parent.children[index] = pre
        }
      }
    })
  }
}

export { rehypeShiki }
