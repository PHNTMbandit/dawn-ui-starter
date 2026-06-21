import { formOptions } from '@tanstack/react-form-start'
import { z } from 'zod'

export const signInSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signInFormOpts = formOptions({
  defaultValues: {
    username: '',
    password: '',
  },
  validators: {
    onSubmit: signInSchema,
  },
})
