import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'

config({ path: ['.env.local', '.env'] })

const sql = neon(process.env.DATABASE_URL as string)
export const db = drizzle({ client: sql })
