import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'
import { authMiddleware } from '#/middleware/auth-middleware.ts'

export const getUser = createServerFn()
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return context.user
  })

export const userQueryOptions = queryOptions({
  queryKey: ['user'],
  queryFn: getUser,
  staleTime: 1000 * 60 * 60, // 1 hour
})
