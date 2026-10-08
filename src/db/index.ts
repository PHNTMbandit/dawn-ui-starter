import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'

config({ path: ['.env.local', '.env'] })

const databaseUrl = (() => {
    const url = process.env.DATABASE_URL
    if (!url) {
      throw new Error('DATABASE_URL is required to initialize the database.')
    }
    return url
  })(),
  sql = neon(databaseUrl),
  db = drizzle({ client: sql })

export { db }
