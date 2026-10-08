import { neon } from '@neondatabase/serverless'

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
