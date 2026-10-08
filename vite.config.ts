import path from 'node:path'
import { URL } from 'node:url'

import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig, lazyPlugins } from 'vite-plus'
import { playwright } from 'vite-plus/test/browser-playwright'

export default defineConfig({
  fmt: {
    ignorePatterns: [
      'dist/**',
      'storybook-static/**',
      'coverage/**',
      'src/styles/output.css',
      'src/routeTree.gen.ts',
      'CHANGELOG.md',
      'pnpm-lock.yaml',
    ],
    semi: false,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: {
      sortScripts: true,
    },
    sortTailwindcss: {
      functions: ['clsx', 'cn'],
      stylesheet: './src/styles/input.css',
    },
  },
  lint: {
    categories: {
      correctness: 'error',
      nursery: 'off',
      pedantic: 'off',
      perf: 'warn',
      restriction: 'off',
      style: 'warn',
      suspicious: 'error',
    },
    env: {
      builtin: true,
    },
    globals: {},
    ignorePatterns: [
      '**/*.stories.tsx',
      '.storybook/**',
      'src/routeTree.gen.ts',
      'commitlint.config.js',
      '.releaserc.cjs',
    ],
    jsPlugins: [
      { name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' },
      { name: 'tailwindcss', specifier: 'oxlint-tailwindcss' },
      { name: '@tanstack/query', specifier: '@tanstack/eslint-plugin-query' },
      { name: '@tanstack/router', specifier: '@tanstack/eslint-plugin-router' },
    ],
    options: { typeAware: true, typeCheck: true },
    overrides: [
      {
        files: [
          '*.config.{js,ts,mts,cts}',
          '.storybook/**',
          '**/*.stories.tsx',
          '**/*.test.{ts,tsx}',
          '**/*.spec.{ts,tsx}',
        ],
        rules: {
          'import/no-nodejs-modules': 'off',
          'react/no-array-index-key': 'off',
          'typescript/no-explicit-any': 'off',
        },
      },
      {
        files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', 'src/tests/setup.ts'],
        plugins: ['vitest'],
      },
    ],
    plugins: [
      'eslint',
      'import',
      'jsdoc',
      'jsx-a11y',
      'oxc',
      'react',
      'react-perf',
      'typescript',
      'unicorn',
    ],
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
      '@tanstack/query/infinite-query-property-order': 'error',
      '@tanstack/query/mutation-property-order': 'error',
      '@tanstack/query/prefer-query-options': 'error',
      '@tanstack/query/stable-query-client': 'error',
      '@tanstack/router/create-route-property-order': 'warn',
      '@tanstack/router/route-param-names': 'error',
      'eslint/no-unused-vars': 'error',
      'eslint/sort-imports': 'off',
      'func-style': 'off',
      'import/exports-last': 'off',
      'import/namespace': 'off',
      'import/no-cycle': 'warn',
      'import/no-duplicates': 'error',
      'import/no-named-export': 'off',
      'import/no-unassigned-import': 'off',
      'import/prefer-default-export': 'off',
      'no-duplicate-imports': 'off',
      'no-magic-numbers': 'off',
      'no-unused-vars': 'error',
      'react-in-jsx-scope': 'off',
      'react-perf/jsx-no-jsx-as-prop': 'off',
      'react-perf/jsx-no-new-function-as-prop': 'off',
      'react-perf/jsx-no-new-object-as-prop': 'off',
      'react/button-has-type': 'warn',
      'react/exhaustive-deps': 'warn',
      'react/jsx-key': 'error',
      'react/jsx-max-depth': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'warn',
      'react/no-children-prop': 'error',
      'react/no-unstable-nested-components': 'off',
      'react/rules-of-hooks': 'error',
      'react/self-closing-comp': 'warn',
      'tailwindcss/enforce-canonical': 'warn',
      'tailwindcss/enforce-consistent-important-position': 'warn',
      'tailwindcss/enforce-consistent-line-wrapping': 'off',
      'tailwindcss/enforce-consistent-variable-syntax': 'warn',
      'tailwindcss/enforce-logical': 'off',
      'tailwindcss/enforce-negative-arbitrary-values': 'warn',
      'tailwindcss/enforce-physical': 'off',
      'tailwindcss/enforce-shorthand': 'warn',
      'tailwindcss/enforce-sort-order': 'warn',
      'tailwindcss/max-class-count': 'off',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-conflicting-classes': 'error',
      'tailwindcss/no-contradicting-variants': 'warn',
      'tailwindcss/no-dark-without-light': 'warn',
      'tailwindcss/no-deprecated-classes': 'error',
      'tailwindcss/no-duplicate-classes': 'error',
      'tailwindcss/no-hardcoded-colors': 'warn',
      'tailwindcss/no-restricted-classes': 'off',
      'tailwindcss/no-unknown-classes': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
      'tailwindcss/no-unnecessary-whitespace': 'error',
      'typescript/consistent-type-imports': 'warn',
      'typescript/no-explicit-any': 'warn',
      'unicorn/prefer-node-protocol': 'error',
      'vite-plus/prefer-vite-plus-imports': 'error',
    },
    settings: {
      jsdoc: {
        augmentsExtendsReplacesDocs: false,
        exemptDestructuredRootsFromChecks: false,
        ignoreInternal: false,
        ignorePrivate: false,
        ignoreReplacesDocs: true,
        implementsReplacesDocs: false,
        overrideReplacesDocs: true,
        tagNamePreference: {},
      },
      'jsx-a11y': {
        attributes: {},
        components: {},
        polymorphicPropName: undefined,
      },
      next: {
        rootDir: [],
      },
      react: {
        componentWrapperFunctions: [],
        formComponents: [],
        linkComponents: [],
        version: undefined,
      },
      tailwindcss: {
        entryPoint: './src/styles/input.css',
      },
      vitest: {
        typecheck: false,
      },
    },
  },
  optimizeDeps: {
    include: ['@phosphor-icons/react', '@tanstack/react-form', '@tanstack/react-form-start'],
  },
  plugins: lazyPlugins(() => [
    // Register application framework, styling, localization, and React integrations here.
    devtools(),
    paraglideVitePlugin({
      outdir: './src/paraglide',
      project: './project.inlang',
    }),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact({ compiler: true }),
  ]),
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
  // TODO: delete once dawn-ui-react is updated to rc.7 (CSS import moved out of JS bundle)
  ssr: {
    noExternal: ['dawn-ui-react', '@daypicker/react'],
  },
  staged: {
    // These commands are run for matching staged files by the Vite+ Git hook dispatcher.
    '*.{css,json,md,yml,yaml}': 'vp fmt --write --no-error-on-unmatched-pattern',
    '*.{js,jsx,ts,tsx}': 'vp check --fix --no-error-on-unmatched-pattern',
  },
  test: {
    clearMocks: false,
    css: true,
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    projects: [
      {
        extends: false,
        test: {
          alias: {
            '@/': new URL('src/', import.meta.url).pathname,
          },
          clearMocks: false,
          css: true,
          environment: 'jsdom',
          globals: true,
          include: ['src/**/*.unit.test.{ts,tsx}'],
          name: 'unit',
          setupFiles: ['src/tests/setup.ts'],
        },
      },
      {
        extends: false,
        test: {
          alias: {
            '@/': new URL('src/', import.meta.url).pathname,
          },
          clearMocks: false,
          css: true,
          environment: 'jsdom',
          globals: true,
          include: ['src/**/*.integration.test.{ts,tsx}'],
          name: 'integration',
          setupFiles: ['src/tests/setup.ts'],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(import.meta.dirname, '.storybook'),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [
              {
                browser: 'chromium',
              },
            ],
            locators: {
              exact: false,
            },
            provider: playwright({}),
          },
          name: 'storybook',
        },
      },
    ],
    sharedViteServer: false,
  },
})
