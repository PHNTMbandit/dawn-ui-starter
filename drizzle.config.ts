import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env.local', '.env'] })

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to configure Drizzle.')
}

// Update schema and output paths here when you change the application's database layout.
export default defineConfig({
  dbCredentials: {
    url: databaseUrl,
  },
  dialect: 'postgresql',
  out: './src/db',
  schema: './src/db/schema.ts',
})
