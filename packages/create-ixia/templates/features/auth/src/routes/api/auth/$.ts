import { createFileRoute } from '@tanstack/react-router'

import { auth } from '@/lib/auth'

// Forward Better Auth API requests through this catch-all route.
export const Route = createFileRoute('/api/auth/$')({
  server: {
    handlers: {
      GET: ({ request }) => auth.handler(request),
      POST: ({ request }) => auth.handler(request),
    },
  },
})
