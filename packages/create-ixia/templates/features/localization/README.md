# localization

Contributes Paraglide i18n. Expected files:

- `project.inlang/settings.json`
- `messages/en.json`, `messages/ja.json`
- `src/paraglide/*` (generated output committed for first run)
- `src/components/language-select.tsx`, `src/utils/languages.ts`

The `paraglideVitePlugin` must be added to `vite.config.ts` in the base template.
