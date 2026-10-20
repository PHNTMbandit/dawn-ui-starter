// oxlint-disable id-length
import { MDXContent } from '@content-collections/mdx/react'
import { CodeBlock } from 'ixia-ui-react'

import { HighlightedCode } from './highlighted-code'

const mdxComponents = {
  CodeBlock,
  HighlightedCode,
  blockquote: ({ children, ...props }: React.ComponentProps<'blockquote'>) => (
    <blockquote {...props} className="my-lg border-l-2 pl-md">
      {children}
    </blockquote>
  ),
  h1: ({ children, ...props }: React.ComponentProps<'h1'>) => (
    <h1 {...props} className="mt-2xl mb-lg style-text-strong-3">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.ComponentProps<'h2'>) => (
    <h2 {...props} className="mt-xl mb-md style-text-strong-2">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentProps<'h3'>) => (
    <h3 {...props} className="mt-lg mb-sm style-text-strong-1">
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.ComponentProps<'h4'>) => (
    <h4 {...props} className="mt-lg mb-xs style-text-strong-0">
      {children}
    </h4>
  ),
  hr: (props: React.ComponentProps<'hr'>) => <hr {...props} className="my-xl" />,
  li: ({ children, ...props }: React.ComponentProps<'li'>) => (
    <li {...props} className="mb-xs">
      {children}
    </li>
  ),
  ol: ({ children, ...props }: React.ComponentProps<'ol'>) => (
    <ol {...props} className="mb-md list-decimal pl-xl">
      {children}
    </ol>
  ),
  p: ({ children, ...props }: React.ComponentProps<'p'>) => (
    <p {...props} className="mb-md style-text-prose-0">
      {children}
    </p>
  ),
  pre: ({ children, className, ...props }: React.ComponentProps<'pre'>) => (
    <pre
      {...props}
      className={['my-lg overflow-x-auto rounded-md p-md', className].filter(Boolean).join(' ')}
    >
      {children}
    </pre>
  ),
  ul: ({ children, ...props }: React.ComponentProps<'ul'>) => (
    <ul {...props} className="mb-md list-disc pl-xl">
      {children}
    </ul>
  ),
}

interface MdxProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
}

export function Mdx({ code, className }: MdxProps) {
  return (
    <div className={className}>
      <MDXContent code={code} components={mdxComponents} />
    </div>
  )
}
