import { QueryClient } from '@tanstack/react-query'

// Create the QueryClient for the router context; configure shared cache defaults here.
export function getContext() {
  const queryClient = new QueryClient()

  return {
    queryClient,
  }
}
export default function TanstackQueryProvider() {}
