import { ScriptOnce } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { createContext, useContext, useEffect, useSyncExternalStore } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const THEME_CHANGE_EVENT = 'theme-change',
  ThemeProviderContext = createContext<ThemeProviderState>({
    setTheme: () => {},
    theme: 'system',
  }),
  getInitialTheme = createIsomorphicFn()
    .server((storageKey: string, defaultTheme: Theme): Theme => {
      const cookieHeader = getRequestHeader('cookie') ?? ''
      return parseCookieTheme(cookieHeader, storageKey) ?? defaultTheme
    })
    .client((storageKey: string, defaultTheme: Theme): Theme => {
      const stored = globalThis.localStorage.getItem(storageKey)
      if (isTheme(stored)) {
        return stored
      }
      return defaultTheme
    })

function isTheme(value: string | null | undefined): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system'
}

function parseCookieTheme(cookieHeader: string, name: string): Theme | undefined {
  for (const part of cookieHeader.split(';')) {
    const [key, ...rest] = part.trim().split('=')
    if (key === name) {
      const value = decodeURIComponent(rest.join('='))
      if (isTheme(value)) {
        return value
      }
    }
  }
  return undefined
}

function subscribeToTheme(onStoreChange: () => void) {
  globalThis.window.addEventListener('storage', onStoreChange)
  globalThis.window.addEventListener(THEME_CHANGE_EVENT, onStoreChange)

  return () => {
    globalThis.window.removeEventListener('storage', onStoreChange)
    globalThis.window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange)
  }
}

function getThemeScript(storageKey: string, defaultTheme: Theme) {
  const key = JSON.stringify(storageKey),
    fallback = JSON.stringify(defaultTheme)

  return `(function(){try{var k=${key};var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark'&&t!=='system'){t=${fallback}}var d=matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='system'?(d?'dark':'light'):t;var e=document.documentElement;e.classList.add(r);e.style.colorScheme=r;document.cookie=k+'='+t+';path=/;max-age=31536000;samesite=lax'}catch(e){}})();`
}

function applyTheme(theme: Theme) {
  const root = globalThis.document.documentElement,
    prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
  root.classList.remove('light', 'dark')

  let resolved = theme
  if (theme === 'system' && prefersDark) {
    resolved = 'dark'
  }
  if (theme === 'system' && !prefersDark) {
    resolved = 'light'
  }

  root.classList.add(resolved)
  root.style.colorScheme = resolved
}

function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const theme = useSyncExternalStore(
      subscribeToTheme,
      () => {
        const storedTheme = globalThis.localStorage.getItem(storageKey)
        if (isTheme(storedTheme)) {
          return storedTheme
        }
        return defaultTheme
      },
      () => getInitialTheme(storageKey, defaultTheme),
    ),
    setTheme = (next: Theme) => {
      globalThis.localStorage.setItem(storageKey, next)
      globalThis.document.cookie = `${storageKey}=${next}; path=/; max-age=31536000; samesite=lax`
      globalThis.dispatchEvent(new Event(THEME_CHANGE_EVENT))
    }

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    if (theme !== 'system') {
      return undefined
    }

    const media = globalThis.matchMedia('(prefers-color-scheme: dark)'),
      onChange = () => applyTheme('system')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [theme])

  return (
    <ThemeProviderContext value={{ setTheme, theme }}>
      <ScriptOnce>{getThemeScript(storageKey, defaultTheme)}</ScriptOnce>
      {children}
    </ThemeProviderContext>
  )
}

function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
