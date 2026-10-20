# create-ixia templates

The CLI assembles a project from these folders. Every generated app starts from
`base/`, then the files for each selected feature are copied on top.

```
templates/
├── base/              # Always copied. The core TanStack Start app using Ixia UI.
│   └── package.json   # Core deps only; feature deps are merged in by the CLI.
└── features/          # One folder per feature id (see src/features.ts).
    ├── neon-drizzle/  # src/db/*, drizzle.config.ts
    ├── auth/          # src/lib/auth.ts, src/middleware, _secure routes, sign-in
    ├── dark-mode/     # src/hooks/use-theme.tsx, theme-select, themes util
    ├── localization/  # project.inlang/, messages/, src/paraglide, language-select
    ├── shiki/
    ├── storybook/
    ├── testing/
    ├── commit-tooling/
    └── github-actions/
```

## How copying works

- Files are copied recursively; a feature folder mirrors the target project
  layout (e.g. `features/auth/src/lib/auth.ts` → `<project>/src/lib/auth.ts`).
- The generated `README.md` is assembled from `base/README.md`, followed by
  the README content for each selected feature.
- `package.json` is **not** copied from feature folders. Dependencies, dev
  dependencies and scripts are declared in `src/features.ts` and merged into the
  generated `package.json`. Keep that registry in sync when adding files here.
- `.env-template` is generated from the `env` entries in `src/features.ts`.

## Adding a new feature

1. Add an entry to `FEATURES` in `src/features.ts` (id, label, deps, env, etc.).
2. Create `templates/features/<templateDir>/` with the files it contributes.
3. Rebuild (`pnpm --filter create-ixia build`) and test with `node dist/index.js`.
