import {
  ArrowRightIcon,
  GithubLogoIcon,
  ParachuteIcon,
  PaletteIcon,
  SparkleIcon,
  StackIcon,
} from '@phosphor-icons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  BentoBox,
  BentoBoxContent,
  BentoBoxDescription,
  BentoBoxFooter,
  BentoBoxHeader,
  BentoBoxTitle,
  Button,
} from 'dawn-ui-react'
import { SiBetterauth, SiGithubactions, SiNeon, SiReact, SiStorybook, SiVite } from 'react-icons/si'

import { LanguageSelect } from '@/components/language-select'
import { ThemeSelect } from '@/components/theme-select'
import { m } from '@/paraglide/messages'

// Replace this public landing page with the home screen for your application.
export const Route = createFileRoute('/')({ component: Home })

function Home() {
  // Starter repo is the primary link; Dawn UI is credited as the UI layer.
  const STARTER_REPO = 'https://github.com/PHNTMbandit/dawn-ui-starter',
    DAWN_UI_REPO = 'https://github.com/PHNTMbandit/dawn-ui-react',
    SPONSOR_URL = 'https://github.com/sponsors/PHNTMbandit',
    // Each card sells a reason to start from this template.
    features = [
      {
        description: m['site.features.react.description'](),
        docs: [{ href: 'https://react.dev/learn', label: m['site.docs.react']() }],
        icon: <SiReact aria-hidden="true" />,
        iconBackground: 'color-mix(in srgb, #087ea4 12%, var(--color-surface))',
        iconColor: 'color-mix(in srgb, #087ea4 60%, var(--color-on-surface))',
        title: m['site.features.react.title'](),
      },
      {
        description: m['site.features.tanstack.description'](),
        docs: [{ href: 'https://tanstack.com', label: m['site.docs.tanstack']() }],
        icon: <StackIcon aria-hidden="true" weight="bold" />,
        iconBackground: 'color-mix(in srgb, #ff4154 12%, var(--color-surface))',
        iconColor: 'color-mix(in srgb, #ff4154 60%, var(--color-on-surface))',
        title: m['site.features.tanstack.title'](),
      },
      {
        description: m['site.features.auth.description'](),
        docs: [{ href: 'https://www.better-auth.com/docs', label: m['site.docs.betterAuth']() }],
        icon: <SiBetterauth aria-hidden="true" />,
        iconBackground: 'var(--color-neutral-subtle)',
        iconColor: 'var(--color-on-surface)',
        title: m['site.features.auth.title'](),
      },
      {
        description: m['site.features.database.description'](),
        docs: [{ href: 'https://neon.tech/docs', label: m['site.docs.neon']() }],
        icon: <SiNeon aria-hidden="true" />,
        iconBackground: 'color-mix(in srgb, #00c781 12%, var(--color-surface))',
        iconColor: 'color-mix(in srgb, #00c781 60%, var(--color-on-surface))',
        title: m['site.features.database.title'](),
      },
      {
        description: m['site.features.i18n.description'](),
        docs: [{ href: 'https://paraglidejs.com/', label: m['site.docs.paraglide']() }],
        icon: <ParachuteIcon aria-hidden="true" />,
        iconBackground: 'color-mix(in srgb, #ed6a3f 12%, var(--color-surface))',
        iconColor: 'color-mix(in srgb, #ed6a3f 60%, var(--color-on-surface))',
        title: m['site.features.i18n.title'](),
      },
      {
        description: m['site.features.dawnUi.description'](),
        docs: [
          {
            href: 'https://github.com/PHNTMbandit/dawn-ui-react',
            label: m['site.docs.dawnUi'](),
          },
        ],
        icon: <PaletteIcon aria-hidden="true" weight="bold" />,
        iconBackground: 'var(--color-brand-subtle)',
        iconColor: 'var(--color-brand-default)',
        title: m['site.features.dawnUi.title'](),
      },
      {
        description: m['site.features.toolchain.description'](),
        docs: [{ href: 'https://viteplus.dev/guide/', label: m['site.docs.vitePlus']() }],
        icon: <SiVite aria-hidden="true" />,
        iconBackground: 'color-mix(in srgb, #646cff 12%, var(--color-surface))',
        iconColor: 'color-mix(in srgb, #646cff 60%, var(--color-on-surface))',
        title: m['site.features.toolchain.title'](),
      },
      {
        description: m['site.features.storybook.description'](),
        docs: [{ href: 'https://storybook.js.org/docs', label: m['site.docs.storybook']() }],
        icon: <SiStorybook aria-hidden="true" />,
        iconBackground: 'color-mix(in srgb, #ff4785 12%, var(--color-surface))',
        iconColor: 'color-mix(in srgb, #ff4785 60%, var(--color-on-surface))',
        title: m['site.features.storybook.title'](),
      },
      {
        description: m['site.features.cicd.description'](),
        docs: [
          { href: 'https://viteplus.dev/guide/commit-hooks', label: m['site.docs.gitHooks']() },
        ],
        icon: <SiGithubactions aria-hidden="true" />,
        iconBackground: 'color-mix(in srgb, #2088ff 12%, var(--color-surface))',
        iconColor: 'color-mix(in srgb, #2088ff 60%, var(--color-on-surface))',
        title: m['site.features.cicd.title'](),
      },
    ]

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
            <LanguageSelect compact />
            <ThemeSelect />
            <a href={SPONSOR_URL} target="_blank" rel="noreferrer">
              <Button variant="outline">{m['site.sponsor']()} &#128512;</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-md">
        <section className="flex flex-col items-center gap-lg py-3xl text-center">
          <div className="space-y-md">
            <h1 className="mx-auto max-w-4xl style-text-strong-5">{m['site.hero.title']()}</h1>
            <p className="mx-auto max-w-prose style-text-prose-1 text-on-surface-variant">
              {m['site.hero.description']()}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-sm">
            <Link to="/sign-in">
              <Button>
                {m['site.signIn']()}
                <ArrowRightIcon weight="bold" />
              </Button>
            </Link>
            <a href={STARTER_REPO} target="_blank" rel="noreferrer">
              <Button variant="outline" tone="neutral">
                <GithubLogoIcon weight="bold" />
                {m['site.hero.starOnGithub']()}
              </Button>
            </a>
          </div>
          <p className="style-text-prose--1 text-on-surface-muted">
            {m['site.hero.styledWith']()}{' '}
            <a href={DAWN_UI_REPO} target="_blank" rel="noreferrer">
              <Button variant="link" size="small">
                Dawn UI
              </Button>
            </a>
          </p>
        </section>

        <section className="grid gap-md pb-3xl sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <BentoBox key={feature.title} size="large">
              <BentoBoxHeader>
                <span
                  className="flex size-xl items-center justify-center rounded-xl"
                  style={{ backgroundColor: feature.iconBackground, color: feature.iconColor }}
                >
                  {feature.icon}
                </span>
              </BentoBoxHeader>
              <BentoBoxContent>
                <BentoBoxTitle>{feature.title}</BentoBoxTitle>
                <BentoBoxDescription>{feature.description}</BentoBoxDescription>
              </BentoBoxContent>
              <BentoBoxFooter>
                {feature.docs.map((doc) => (
                  <Link key={doc.href} to={doc.href} target="_blank" rel="noreferrer">
                    <Button variant="link" size="small">
                      {doc.label}
                    </Button>
                  </Link>
                ))}
              </BentoBoxFooter>
            </BentoBox>
          ))}
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-xs p-md text-center style-text-prose--1 text-on-surface-muted sm:flex-row sm:text-left">
          <span className="flex items-center gap-3xs">
            {m['site.footer.builtWith']()}{' '}
            <a
              href={DAWN_UI_REPO}
              target="_blank"
              rel="noreferrer"
              className="text-brand-muted hover:underline"
            >
              Dawn UI
            </a>
          </span>
          <span>
            {m['site.footer.license']()} · © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  )
}
