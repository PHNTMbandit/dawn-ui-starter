import {
  ChartLineUpIcon,
  CurrencyDollarIcon,
  GearIcon,
  HouseIcon,
  SidebarSimpleIcon,
  TrendUpIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Avatar,
  AvatarFallback,
  Badge,
  BentoBox,
  BentoBoxDescription,
  BentoBoxHeader,
  BentoBoxTitle,
  cn,
  Profile,
  ProfileContent,
  ProfileName,
  ProfileSubname,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarToggle,
} from 'dawn-ui-react'

import { LanguageSelect } from '@/components/language-select'
import { SignOut } from '@/components/sign-out'
import { ThemeSelect } from '@/components/theme-select'
import { m } from '@/paraglide/messages'

// Starter protected screen; add authenticated navigation and app-specific content here.
export const Route = createFileRoute('/_secure/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  // Swap these demo nav items for your application's real sections.
  const navItems = [
      {
        badge: undefined,
        icon: HouseIcon,
        isActive: true,
        label: m['dashboard.nav.dashboard'](),
      },
      {
        badge: '3',
        icon: ChartLineUpIcon,
        isActive: false,
        label: m['dashboard.nav.analytics'](),
      },
      {
        badge: '12',
        icon: UsersThreeIcon,
        isActive: false,
        label: m['dashboard.nav.team'](),
      },
      {
        badge: undefined,
        icon: GearIcon,
        isActive: false,
        label: m['dashboard.nav.settings'](),
      },
    ],
    // Replace with live metrics from your data layer.
    stats = [
      {
        delta: '+12.5%',
        icon: CurrencyDollarIcon,
        label: m['dashboard.stats.revenue'](),
        value: '$48,250',
      },
      {
        delta: '+8.2%',
        icon: UsersThreeIcon,
        label: m['dashboard.stats.activeUsers'](),
        value: '2,340',
      },
      {
        delta: '+3.1%',
        icon: TrendUpIcon,
        label: m['dashboard.stats.conversion'](),
        value: '4.8%',
      },
    ],
    activity = [
      {
        detail: m['dashboard.activity.alex'](),
        time: m['dashboard.activity.twoMinutesAgo'](),
        who: 'Alex Rivera',
      },
      {
        detail: m['dashboard.activity.jordan'](),
        time: m['dashboard.activity.oneHourAgo'](),
        who: 'Jordan Lee',
      },
      {
        detail: m['dashboard.activity.sam'](),
        time: m['dashboard.activity.fourHoursAgo'](),
        who: 'Sam Carter',
      },
    ]

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
            <SidebarGroupLabel>{m['dashboard.navigation']()}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton isActive={item.isActive}>
                      <item.icon weight="bold" />
                      {item.label}
                      {item.badge && (
                        <SidebarMenuBadge tone="neutral" className="ml-auto">
                          {item.badge}
                        </SidebarMenuBadge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          {(isExpanded) => (
            <Profile>
              <Avatar>
                <AvatarFallback>{m['dashboard.profileInitials']()}</AvatarFallback>
              </Avatar>
              {isExpanded && (
                <ProfileContent>
                  <ProfileName>{m['dashboard.profileName']()}</ProfileName>
                  <ProfileSubname>user@example.com</ProfileSubname>
                </ProfileContent>
              )}
            </Profile>
          )}
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col bg-surface-2">
        <header className="flex items-center justify-between border-b border-border bg-surface px-lg py-md">
          <div className="space-y-3xs">
            <h1 className="style-text-strong-3">{m['dashboard.title']()}</h1>
            <p className="style-text-prose--1 text-on-surface-muted">{m['dashboard.welcome']()}</p>
          </div>
          <div className="flex items-center gap-sm">
            <LanguageSelect compact />
            <ThemeSelect />
            <SignOut />
          </div>
        </header>

        <main className="flex-1 space-y-lg p-lg">
          <section className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <BentoBox key={stat.label} size="large" className="border border-border">
                <BentoBoxHeader>
                  <span className="flex size-xl items-center justify-center rounded-xl bg-brand-subtle text-brand-default">
                    <stat.icon weight="bold" />
                  </span>
                  <BentoBoxTitle className="text-on-surface-muted">{stat.label}</BentoBoxTitle>
                </BentoBoxHeader>
                <div className="flex items-end justify-between gap-sm">
                  <span className="style-text-strong-4">{stat.value}</span>
                  <Badge tone="success" variant="outline">
                    <TrendUpIcon weight="bold" />
                    {stat.delta}
                  </Badge>
                </div>
              </BentoBox>
            ))}
          </section>

          <BentoBox size="large" className="border border-border">
            <BentoBoxHeader>
              <BentoBoxTitle>{m['dashboard.activity.title']()}</BentoBoxTitle>
              <BentoBoxDescription>{m['dashboard.activity.description']()}</BentoBoxDescription>
            </BentoBoxHeader>
            <ul className="divide-y divide-border">
              {activity.map((entry) => (
                <li key={entry.who} className="flex items-center gap-sm py-sm">
                  <Avatar>
                    <AvatarFallback>
                      {entry.who
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <p className="flex-1 style-text-prose--1">
                    <span className="style-text-strong-1">{entry.who}</span>{' '}
                    <span className="text-on-surface-muted">{entry.detail}</span>
                  </p>
                  <span className="style-text-prose--1 text-on-surface-muted">{entry.time}</span>
                </li>
              ))}
            </ul>
            <Separator />
            <Link to="/" className="style-text-default--1 text-brand-muted hover:underline">
              {m['dashboard.activity.viewAll']()}
            </Link>
          </BentoBox>
        </main>
      </div>
    </>
  )
}
