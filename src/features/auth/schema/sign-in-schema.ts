import { formOptions } from '@tanstack/react-form-start'
import { z } from 'zod'

import { m } from '@/paraglide/messages'

// Adjust these constraints to match the account rules for your application.
const signInSchema = z.object({
    password: z.string().min(6, { error: () => m['auth.signIn.validation.passwordMin']() }),
    username: z.string().min(3, { error: () => m['auth.signIn.validation.usernameMin']() }),
  }),
  signInFormOpts = formOptions({
    defaultValues: {
      password: '',
      username: '',
    },
    validators: {
      onSubmit: signInSchema,
    },
  })

export { signInSchema, signInFormOpts }
