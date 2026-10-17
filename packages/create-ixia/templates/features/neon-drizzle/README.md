# neon-drizzle

Contributes the database layer. Expected files (copied into the project root):

- `src/db/index.ts` — Drizzle client built from `DATABASE_URL`
- `src/db.ts` — optional raw Neon SQL client
- `drizzle.config.ts`

Dependencies, scripts and the `DATABASE_URL` env entry are declared in
`src/features.ts`, not here.
