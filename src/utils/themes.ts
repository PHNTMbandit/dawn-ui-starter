import { ComputerTowerIcon, MoonIcon, SunIcon } from '@phosphor-icons/react'
import type { Theme } from 'dawn-ui-react'

import {
  'common.themes.dark' as common_themes_dark,
  'common.themes.light' as common_themes_light,
  'common.themes.system' as common_themes_system,
} from '@/paraglide/messages'

export const themes: Theme[] = [
  { icon: SunIcon, label: common_themes_light(), value: 'light' },
  { icon: MoonIcon, label: common_themes_dark(), value: 'dark' },
  { icon: ComputerTowerIcon, label: common_themes_system(), value: 'system' },
]
