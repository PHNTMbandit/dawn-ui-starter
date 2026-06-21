import { getFormData } from '@tanstack/react-form-start'
import { createServerFn } from '@tanstack/react-start'

export const getFormDataFromServer = createServerFn({ method: 'GET' }).handler(async () => {
  return getFormData()
})
