// #if auth
import { ArrowRightIcon, GithubLogoIcon, SparkleIcon } from '@phosphor-icons/react'
// #else
import { GithubLogoIcon, SparkleIcon } from '@phosphor-icons/react'
// #endif
// #if auth
import { createFileRoute, Link } from '@tanstack/react-router'
// #else
import { createFileRoute } from '@tanstack/react-router'
// #endif
import { Button } from 'dawn-ui-react'

// #if dark-mode
import { ThemeSelect } from '@/components/theme-select'
// #endif
// #if localization
import { LanguageSelect } from '@/components/language-select'
// #endif

// Replace this public landing page with the home screen for your application.
export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const STARTER_REPO = 'https://github.com/PHNTMbandit/dawn-ui-starter'

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-surface-background">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-md py-sm">
          <a
            href={STARTER_REPO}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-xs style-text-strong-2"
          >
            <span className="flex size-lg items-center justify-center rounded-lg bg-brand-default text-brand-on-default">
              <SparkleIcon weight="fill" />
            </span>
            Dawn UI Starter
          </a>
          <div className="flex items-center gap-3xs">
            {/* #if localization */}
            <LanguageSelect compact />
            {/* #endif */}
            {/* #if dark-mode */}
            <ThemeSelect />
            {/* #endif */}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-md">
        <section className="flex flex-col items-center gap-lg py-3xl text-center">
          <div className="space-y-md">
            <h1 className="mx-auto max-w-4xl style-text-strong-5">
              Welcome to your Dawn UI app
            </h1>
            <p className="mx-auto max-w-prose style-text-prose-1 text-on-surface-variant">
              A full-stack React 19 starter built with TanStack Start, Vite+, and Dawn UI.
              Edit this page in <code>src/routes/index.tsx</code> to get started.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-sm">
            {/* #if auth */}
            <Link to="/sign-in">
              <Button>
                Sign in
                <ArrowRightIcon weight="bold" />
              </Button>
            </Link>
            {/* #endif */}
            <a href={STARTER_REPO} target="_blank" rel="noreferrer">
              <Button variant="outline" tone="neutral">
                <GithubLogoIcon weight="bold" />
                Star on GitHub
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
