import { createHighlighter } from 'shiki/bundle/web'

export const highlighter = await createHighlighter({
  langs: ['css', 'javascript', 'typescript', 'tsx', 'jsx', 'scss'],
  themes: ['github-light', 'github-dark'],
})
