import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from 'dawn-ui-react'

import { ThemeSelect } from '@/components/theme-select'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border px-md py-xs">
        <span className="style-text-strong-1">Dawn UI</span>
        <div className="flex items-center gap-sm">
          <ThemeSelect />
          <Link to="/sign-in">
            <Button variant="ghost" size="small">
              Sign In
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button size="small">Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-xl px-md text-center">
        <div>
          <h1 className="style-text-strong-5">Dawn UI Starter</h1>
          <p className="max-w-prose style-text-prose-1 text-on-surface-muted">
            A modern React starter template with authentication, theming, and i18n built-in.
          </p>
        </div>

        <div className="flex gap-sm">
          <Link to="/sign-up">
            <Button>Get Started</Button>
          </Link>
          <Link to="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-border p-md text-center style-text-prose--1 text-on-surface-muted">
        Built with Dawn UI
      </footer>
    </div>
  )
}
