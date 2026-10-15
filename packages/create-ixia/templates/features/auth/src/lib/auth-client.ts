import { createAuthClient } from 'better-auth/react'

// Browser-side Better Auth client; update baseURL when deploying to another origin.
export const { useSession, signIn, signOut, getSession } = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [],
})
