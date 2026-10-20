# Markdown (MDX)

The `components` content collection loads and compiles MDX files from
`src/features/docs/components/`. It supports GitHub Flavored Markdown, Shiki
code highlighting, and the shared components registered in
`src/components/mdx.tsx`.

Edit `content-collections.ts` to change the collection directory or its
front-matter schema.

## Add a document

Create an `.mdx` file in `src/features/docs/components/`. Each document needs a
title and description in its front matter:

````mdx
---
title: Getting started
description: A short introduction to the project.
---

# Getting started

Markdown content goes here. GitHub Flavored Markdown tables and task lists are
supported.

```tsx
export const greeting = 'Hello from MDX'
```
````

The collection is exported as `allComponents` by `content-collections`. Render
the compiled document using the shared `Mdx` component:

```tsx
import { allComponents } from 'content-collections'
import { Mdx } from '@/components/mdx'

const document = allComponents.find((item) => item._meta.path === 'getting-started')

export function GettingStarted() {
	if (!document) return null

	return <Mdx code={document.mdx} />
}
```

The collection is rebuilt by the Vite plugin during development and builds.
Only add trusted, authored Markdown to `renderMarkdown`; it preserves raw HTML.
