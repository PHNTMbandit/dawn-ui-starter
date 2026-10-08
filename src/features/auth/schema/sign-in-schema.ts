import { formOptions } from '@tanstack/react-form-start'
import { z } from 'zod'

const signInSchema = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
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
