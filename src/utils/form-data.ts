import { getFormData } from '@tanstack/react-form-start'
import { createServerFn } from '@tanstack/react-start'

// Read the incoming form payload on the server for TanStack Form's initial state.
export const getFormDataFromServer = createServerFn({ method: 'GET' }).handler(async () =>
  getFormData(),
)
