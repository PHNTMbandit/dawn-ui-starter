import { MonitorIcon, MoonIcon, SunIcon } from '@phosphor-icons/react'
import { Button, cn } from 'dawn-ui-react'
import { useTheme } from '#/hooks/use-theme'

type ThemeToggleProps = React.ComponentProps<'button'>

export const ThemeToggle = ({ className, ref, ...props }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
    setTheme(nextTheme)
  }

  return (
    <Button
      size="iconMedium"
      variant={'ghost'}
      tone="neutral"
      className={cn('shrink-0', className)}
      ref={ref}
      onClick={handleClick}
      {...props}
    >
      {theme === 'system' ? <MonitorIcon /> : theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
