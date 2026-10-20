// oxlint-disable-next-line import/no-nodejs-modules -- MDX imports resolve from the source directory at build time.
import { resolve } from 'node:path'

import { defineCollection, defineConfig } from '@content-collections/core'
import type { AnyContent, Configuration } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import { z } from 'zod'

import { rehypeShiki } from './src/lib/rehype-shiki.ts'

function extractFrontMatter(content: string) {
  const { data, content: body, excerpt } = matter(content, { excerpt: true })
  return { body, data, excerpt: excerpt || '' }
}

const components = defineCollection({
    directory: './src/features/docs/components',
    include: '*.mdx',
    name: 'components',
    schema: z.object({
      content: z.string(),
      description: z.string(),
      title: z.string(),
    }),
    transform: async (document, context) => {
      const mdx = await compileMDX(context, document, {
          cwd: resolve('src/features/docs/components'),
          rehypePlugins: [rehypeShiki],
          remarkPlugins: [remarkGfm],
        }),
        frontMatter = extractFrontMatter(document.content),
        headerImageMatch = /!\[(?<alt>[^\]]*)\]\((?<url>[^)]+)\)/.exec(document.content),
        headerImage = headerImageMatch?.groups?.url

      return {
        ...document,
        mdx,
        ...frontMatter.data,
        content: frontMatter.body,
        excerpt: frontMatter.excerpt,
        headerImage,
        // oxlint-disable-next-line no-underscore-dangle
        slug: document._meta.path,
      }
    },
  }),
  config: Configuration<AnyContent[]> = defineConfig({
    content: [components],
  })

export default config
