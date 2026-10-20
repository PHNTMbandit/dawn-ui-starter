import type { Element } from 'hast'
import type { BundledLanguage } from 'shiki/bundle/web'
import { createHighlighterCoreSync } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import bash from 'shiki/langs/bash.mjs'
import css from 'shiki/langs/css.mjs'
import javascript from 'shiki/langs/javascript.mjs'
import jsx from 'shiki/langs/jsx.mjs'
import scss from 'shiki/langs/scss.mjs'
import tsx from 'shiki/langs/tsx.mjs'
import typescript from 'shiki/langs/typescript.mjs'
import oneDarkPro from 'shiki/themes/one-dark-pro.mjs'
import oneLight from 'shiki/themes/one-light.mjs'

const highlighter = createHighlighterCoreSync({
    engine: createJavaScriptRegexEngine(),
    langs: [bash, css, javascript, typescript, tsx, jsx, scss],
    themes: [oneLight, oneDarkPro],
  }),
  themes = {
    dark: 'one-dark-pro',
    light: 'one-light',
  },
  transformers = [
    {
      pre: (node: Element) => {
        node.properties.style = ''
        return node
      },
    },
  ],
  highlightCodeToHtml = (code: string, lang: BundledLanguage) =>
    highlighter.codeToHtml(code, { defaultColor: false, lang, themes, transformers }),
  highlightCodeToHast = (code: string, lang: BundledLanguage) =>
    highlighter.codeToHast(code, { defaultColor: false, lang, themes, transformers })

export { highlighter, highlightCodeToHast, highlightCodeToHtml }
