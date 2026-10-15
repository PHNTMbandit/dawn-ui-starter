import { ComputerTowerIcon, MoonIcon, SunIcon } from '@phosphor-icons/react'
import type { Theme } from 'ixia-ui-react'

// #if localization
import {
  'common.themes.dark' as common_themes_dark,
  'common.themes.light' as common_themes_light,
  'common.themes.system' as common_themes_system,
} from '@/paraglide/messages'

// Define the options shown by ThemeSelect; labels stay localized through Paraglide.
export const themes: Theme[] = [
  { icon: SunIcon, label: common_themes_light(), value: 'light' },
  { icon: MoonIcon, label: common_themes_dark(), value: 'dark' },
  { icon: ComputerTowerIcon, label: common_themes_system(), value: 'system' },
]
// #else
// Define the options shown by ThemeSelect.
export const themes: Theme[] = [
  { icon: SunIcon, label: 'Light', value: 'light' },
  { icon: MoonIcon, label: 'Dark', value: 'dark' },
  { icon: ComputerTowerIcon, label: 'System', value: 'system' },
]
// #endif
