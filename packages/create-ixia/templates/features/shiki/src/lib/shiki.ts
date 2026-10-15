import { createHighlighter } from 'shiki/bundle/web'

// Add supported code languages and light/dark themes to this shared highlighter.
export const highlighter = await createHighlighter({
  langs: ['css', 'javascript', 'typescript', 'tsx', 'jsx', 'scss'],
  themes: ['github-light', 'github-dark'],
})
