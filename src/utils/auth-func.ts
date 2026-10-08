import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

import { authMiddleware } from '@/middleware/auth-middleware.ts'

const getUser = createServerFn()
    .middleware([authMiddleware])
    .handler(async ({ context }) => context.user),
  userQueryOptions = queryOptions({
    queryFn: getUser,
    queryKey: ['user'],
    staleTime: 1000 * 60 * 60, // 1 hour
  })

export { getUser, userQueryOptions }
