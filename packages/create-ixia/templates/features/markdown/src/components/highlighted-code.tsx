import type { BundledLanguage } from 'shiki/bundle/web'

import { highlightCodeToHtml } from '../lib/shiki'

interface HighlightedCodeProps {
  code: string
  language: BundledLanguage
}

export function HighlightedCode({ code, language }: HighlightedCodeProps) {
  const highlightedCode = highlightCodeToHtml(code, language)

  return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
}
