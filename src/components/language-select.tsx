import { TranslateIcon } from '@phosphor-icons/react'
import {
  cn,
  Select,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from 'dawn-ui-react'

import { m } from '@/paraglide/messages'
import { getLocale, locales, setLocale } from '@/paraglide/runtime'
import { languages } from '@/utils/languages'

type LanguageSelectProps = React.ComponentProps<typeof SelectTrigger> & {
  compact?: boolean
}

function handleValueChange(value: unknown) {
  const selectedLocale = locales.find((locale) => locale === value)
  if (selectedLocale) {
    void setLocale(selectedLocale)
  }
}

export function LanguageSelect({ className, ref, ...props }: LanguageSelectProps) {
  return (
    <Select items={languages} onValueChange={handleValueChange} value={getLocale()}>
      <SelectTrigger
        variant="ghost"
        aria-label={m['common.languageSelector']()}
        {...props}
        className={cn('w-full', className)}
        ref={ref}
      >
        <SelectValue>
          <TranslateIcon weight="bold" />
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        <SelectList>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  )
}
