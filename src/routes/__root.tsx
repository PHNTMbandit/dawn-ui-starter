import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import { DrawerProvider, ToastProvider } from 'dawn-ui-react'
import { ThemeProvider } from '#/hooks/use-theme.tsx'
import { getLocale } from '#/paraglide/runtime'
import appCss from '../styles/input.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Dawn UI Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
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
            <ToastProvider className="size-full">{children}</ToastProvider>
          </DrawerProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
