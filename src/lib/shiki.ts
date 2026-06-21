import { createHighlighter } from 'shiki/bundle/web'

export const highlighter = await createHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: ['css', 'javascript', 'typescript', 'tsx', 'jsx', 'scss'],
})
