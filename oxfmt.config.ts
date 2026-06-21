import { defineConfig } from 'oxfmt'

export default defineConfig({
  $schema: './node_modules/oxfmt/configuration_schema.json',
  sortTailwindcss: {
    stylesheet: './src/styles/input.css',
    functions: ['clsx', 'cn'],
  },
  sortImports: {
    newlinesBetween: false,
    groups: [
      ['value-builtin', 'value-external'],
      ['value-internal', 'value-parent', 'value-sibling', 'value-index'],
      { newlinesBetween: true },
      'type-import',
      'unknown',
    ],
  },
  semi: false,
  singleQuote: true,
  sortPackageJson: {
    sortScripts: true,
  },
  ignorePatterns: [],
})
