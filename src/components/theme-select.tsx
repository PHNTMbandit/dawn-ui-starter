import {
  cn,
  getThemeByValue,
  Select,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectTitle,
  SelectTrigger,
  SelectValue,
} from 'dawn-ui-react'
import type { ThemeValue } from 'dawn-ui-react'
import type { ComponentProps } from 'react'

import { useTheme } from '@/hooks/use-theme'
import { themes } from '@/utils/themes'

type ThemeSelectProps = ComponentProps<typeof SelectTrigger>

// Add or remove available choices in `@/utils/themes`.
export function ThemeSelect({ className, ref, ...props }: ThemeSelectProps) {
  const { theme, setTheme } = useTheme(),
    handleThemeChange = (value: ThemeValue | null) => {
      if (value === null) {
        return
      }

      console.log(value)
      setTheme(value)
    }

  return (
    <Select<ThemeValue>
      items={themes}
      value={theme}
      onValueChange={handleThemeChange}
      isItemEqualToValue={(itemValue, value) => itemValue === value}
      itemToStringLabel={(value) => getThemeByValue(value, themes)?.label ?? value}
      itemToStringValue={(value) => value}
    >
      <SelectTrigger variant="ghost" className={cn('', className)} ref={ref} {...props}>
        <SelectValue>
          {(value: ThemeValue) => {
            const selectedTheme = getThemeByValue(value, themes)
            if (!selectedTheme) {
              return undefined
            }
            return <selectedTheme.icon weight="bold" />
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup className="z-99">
        <SelectList>
          {themes.map((themeOption) => (
            <SelectItem key={themeOption.value} value={themeOption.value}>
              <SelectTitle>
                <themeOption.icon weight="bold" />
                {themeOption.label}
              </SelectTitle>
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  )
}
