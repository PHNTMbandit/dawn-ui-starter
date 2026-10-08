import { redirect } from '@tanstack/react-router'
import { createMiddleware } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'

import { auth } from '@/lib/auth.ts'

// Resolve the current session and block protected server functions without a user.
export const authMiddleware = createMiddleware().server(async ({ next }) => {
  const headers = getRequestHeaders(),
    session = await auth.api.getSession({ headers })

  if (!session) {
    throw redirect({ to: '/sign-in' })
  }

  return await next({
    context: { session: session.session, user: session.user },
  })
})
