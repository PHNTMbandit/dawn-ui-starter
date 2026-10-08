import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { SidebarProvider } from 'dawn-ui-react'

import { userQueryOptions } from '@/utils/auth-func.ts'

export const Route = createFileRoute('/_secure')({
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.query(userQueryOptions)
    return {
      user,
    }
  },
  component: RouteComponent,
  loader: async ({ context }) => {
    if (!context.user) {
      throw redirect({ to: '/sign-in' })
    }
    return context.user
  },
})

function RouteComponent() {
  return (
    <SidebarProvider id="main">
      <Outlet />
    </SidebarProvider>
  )
}
