import { createServerValidate, ServerValidateError } from '@tanstack/react-form-start'
import { redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { setResponseStatus } from '@tanstack/react-start/server'
import { APIError } from 'better-auth/api'
import { auth } from '#/lib/auth.ts'
import { signInFormOpts, signInSchema } from '../schema/sign-in-schema'

const serverValidate = createServerValidate({
  ...signInFormOpts,
  onServerValidate: async ({ value }) => {
    const { data, error, success } = await signInSchema.safeParseAsync(value)
    if (!success) {
      return error.message
    }

    try {
      await auth.api.signInUsername({
        body: {
          username: data.username,
          password: data.password,
        },
      })
    } catch (error) {
      if (error instanceof APIError) {
        return error.message
      }
    }
  },
})

export const handleSignInForm = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) {
      throw new Error('Invalid form data')
    }
    return data
  })
  .handler(async (ctx) => {
    try {
      await serverValidate(ctx.data)
      return redirect({ to: '/explore' })
    } catch (error) {
      if (error instanceof ServerValidateError) {
        return error.response
      }

      setResponseStatus(500)
      return 'There was an internal error'
    }
  })
