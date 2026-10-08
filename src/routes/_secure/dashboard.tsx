import { SidebarSimpleIcon } from '@phosphor-icons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  cn,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarToggle,
} from 'dawn-ui-react'

import { SignOut } from '@/components/sign-out'
import { ThemeSelect } from '@/components/theme-select'

export const Route = createFileRoute('/_secure/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          {(isExpanded) => (
            <>
              <span className={cn('style-text-strong-3', !isExpanded && 'hidden')}>
                <Link to="/" className="style-text-strong-1">
                  Dawn UI
                </Link>
              </span>
              <SidebarToggle>{() => <SidebarSimpleIcon weight="bold" />}</SidebarToggle>
            </>
          )}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b p-md">
          <div className="flex items-center gap-sm">
            <ThemeSelect />
            <SignOut />
          </div>
        </header>

        <main className="p-xl">
          <div className="space-y-md">
            <h1 className="style-text-strong-4">Dashboard</h1>
            <p className="text-on-surface-muted">
              Welcome to your dashboard. You're now signed in.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
