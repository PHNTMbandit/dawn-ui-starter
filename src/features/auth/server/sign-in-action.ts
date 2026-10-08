import { createServerFn } from '@tanstack/react-start'
import { setResponseStatus } from '@tanstack/react-start/server'
import { isAPIError } from 'better-auth/api'

import { auth } from '@/lib/auth'

// Authenticate submitted credentials on the server and return safe form errors.
export const handleSignInForm = createServerFn({ method: 'POST' })
  .validator((data: { username: string; password: string }) => data)
  .handler(async (ctx) => {
    try {
      await auth.api.signInUsername({
        body: {
          password: ctx.data.password,
          username: ctx.data.username,
        },
      })

      return { success: true } as const
    } catch (error) {
      if (isAPIError(error)) {
        return { error: error.message, success: false } as const
      }

      setResponseStatus(500)
      return { error: 'There was an internal error', success: false } as const
    }
  })
