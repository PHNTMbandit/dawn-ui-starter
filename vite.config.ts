import { paraglideVitePlugin } from '@inlang/paraglide-js'
import babel from '@rolldown/plugin-babel'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import { nitro } from 'nitro/vite'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  optimizeDeps: {
    include: ['@phosphor-icons/react', '@tanstack/react-form', '@tanstack/react-form-start'],
  },
  test: {
    passWithNoTests: true,
    projects: [
      {
        test: {
          alias: {
            '@/': new URL('./src/', import.meta.url).pathname,
          },
          css: true,
          environment: 'jsdom',
          globals: true,
          include: ['src/**/*.unit.test.{ts,tsx}'],
          name: 'unit',
          setupFiles: ['src/tests/setup.ts'],
        },
      },
      {
        test: {
          alias: {
            '@/': new URL('./src/', import.meta.url).pathname,
          },
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
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
})

export default config
