import { createRouter as createTanStackRouter, ErrorComponent } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { getContext } from './integrations/tanstack-query/root-provider'
import { routeTree } from './routeTree.gen'

// Central router defaults and SSR-aware Query integration live here.
export function getRouter() {
  const context = getContext(),
    router = createTanStackRouter({
      context,
      defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
      defaultPreload: 'intent',
      defaultPreloadStaleTime: 0,
      routeTree,
      scrollRestoration: true,
    })

  setupRouterSsrQueryIntegration({ queryClient: context.queryClient, router })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
