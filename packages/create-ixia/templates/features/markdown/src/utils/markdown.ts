import type { Element, Root } from 'hast'
import { toString } from 'hast-util-to-string'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

interface MarkdownHeading {
  id: string
  text: string
  level: number
}

interface MarkdownResult {
  markup: string
  headings: MarkdownHeading[]
}

async function renderMarkdown(content: string): Promise<MarkdownResult> {
  const headings: MarkdownHeading[] = [],
    result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSlug)
      .use(() => (tree: Root) => {
        visit(tree, 'element', (node: Element) => {
          if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
            headings.push({
              id: node.properties.id ?? '',
              level: Number(node.tagName.slice(1)),
              text: toString(node),
            })
          }
        })
      })
      .use(rehypeStringify)
      .process(content)

  return {
    headings,
    markup: String(result),
  }
}

export { renderMarkdown, type MarkdownHeading, type MarkdownResult }
