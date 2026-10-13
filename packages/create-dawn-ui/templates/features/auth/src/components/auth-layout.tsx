import { LightningIcon, PaletteIcon, ShieldCheckIcon, TranslateIcon } from '@phosphor-icons/react'
import { Badge } from 'dawn-ui-react'

import { LanguageSelect } from '@/components/language-select'
import { ThemeSelect } from '@/components/theme-select'
import { m } from '@/paraglide/messages'

// Shared split-screen shell for auth routes; pass the form as children.
export function AuthLayout({ children }: { children: React.ReactNode }) {
  const highlights = [
    {
      description: m['auth.layout.highlights.authDescription'](),
      icon: ShieldCheckIcon,
      title: m['auth.layout.highlights.authTitle'](),
    },
    {
      description: m['auth.layout.highlights.themeDescription'](),
      icon: PaletteIcon,
      title: m['auth.layout.highlights.themeTitle'](),
    },
    {
      description: m['auth.layout.highlights.i18nDescription'](),
      icon: TranslateIcon,
      title: m['auth.layout.highlights.i18nTitle'](),
    },
    {
      description: m['auth.layout.highlights.toolingDescription'](),
      icon: LightningIcon,
      title: m['auth.layout.highlights.toolingTitle'](),
    },
  ]

  return (
    <div className="h-screen lg:grid lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-brand-container lg:flex lg:flex-col lg:justify-between lg:p-2xl">
        <div className="absolute top-[-6rem] right-[-6rem] size-[24rem] rounded-full bg-brand-default/20 blur-[100px]" />
        <div className="absolute bottom-[-8rem] left-[-5rem] size-[24rem] rounded-full bg-accent-default/20 blur-[100px]" />

        <a
          href="https://github.com/PHNTMbandit/dawn-ui-starter"
          target="_blank"
          rel="noreferrer"
          className="relative style-text-strong-2 text-brand-on-container"
        >
          Dawn UI Starter
        </a>

        <div className="relative space-y-xl">
          <div className="space-y-sm">
            <Badge tone="brand" variant="fill">
              {m['auth.layout.badge']()}
            </Badge>
            <h2 className="style-text-strong-4 text-brand-on-container">
              {m['auth.layout.title']()}
            </h2>
            <p className="max-w-prose style-text-prose-1 text-brand-on-container-muted">
              {m['auth.layout.description']()}
            </p>
          </div>

          <ul className="grid gap-md sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-sm">
                <span className="flex size-xl shrink-0 items-center justify-center rounded-xl bg-surface/70 text-brand-default">
                  <item.icon weight="bold" />
                </span>
                <div className="space-y-3xs">
                  <p className="style-text-strong-1 text-brand-on-container">{item.title}</p>
                  <p className="style-text-prose--1 text-brand-on-container-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative style-text-prose--1 text-brand-on-container-muted">
          {m['auth.layout.builtWith']()}
        </p>
      </aside>

      <div className="relative flex h-full flex-col">
        <div className="absolute top-md right-md flex items-center gap-xs">
          <LanguageSelect compact />
          <ThemeSelect />
        </div>
        <div className="flex h-full w-2/3 flex-col items-center justify-center gap-xl place-self-center text-center lg:w-2/3 xl:w-1/2">
          {children}
        </div>
      </div>
    </div>
  )
}
