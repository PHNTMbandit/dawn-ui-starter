import { neon } from '@neondatabase/serverless'

// Lazily create an optional Neon SQL client; set DATABASE_URL to enable raw queries.
let client: ReturnType<typeof neon> | undefined = undefined

export async function getClient() {
  if (!process.env.DATABASE_URL) {
    return undefined
  }
  if (!client) {
    client = neon(process.env.DATABASE_URL)
  }
  return client
}
