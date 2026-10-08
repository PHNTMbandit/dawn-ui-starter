import type { QueryClient } from '@tanstack/react-query'
import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import { DrawerProvider, ToastProvider } from 'dawn-ui-react'

import { ThemeProvider } from '@/hooks/use-theme'
import { getLocale } from '@/paraglide/runtime'

import appCss from '../styles/input.css?url'

export interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

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
        title: 'Dawn UI Starter',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="h-screen w-full">
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <DrawerProvider>
            <ToastProvider>{children}</ToastProvider>
          </DrawerProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
