import type { QueryClient } from '@tanstack/react-query'
import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import { DrawerProvider, ToastProvider } from 'ixia-ui-react'

// #if dark-mode
import { ThemeProvider } from '@/hooks/use-theme'
// #endif
// #if localization
import { getLocale } from '@/paraglide/runtime'
// #endif

import appCss from '../styles/input.css?url'

// Set app-wide metadata and providers here; add global context providers in RootDocument.
export interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  // #if localization
  beforeLoad: async () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },
  // #endif

  head: () => ({
    links: [
      {
        href: appCss,
        rel: 'stylesheet',
      },
    ],
    meta: [
      {
        charSet: 'utf8',
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      {
        title: 'Ixia Starter',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    // #if localization
    <html lang={getLocale()} suppressHydrationWarning>
      {/* #else */}
      <html lang="en" suppressHydrationWarning>
        {/* #endif */}
        <head>
          <HeadContent />
        </head>
        <body className="h-screen w-full">
          {/* #if dark-mode */}
          <ThemeProvider defaultTheme="system" storageKey="theme">
            {/* #endif */}
            <DrawerProvider>
              <ToastProvider>{children}</ToastProvider>
            </DrawerProvider>
            {/* #if dark-mode */}
          </ThemeProvider>
          {/* #endif */}
          <Scripts />
        </body>
      </html>
  )
}
