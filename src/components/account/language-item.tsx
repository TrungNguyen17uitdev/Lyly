import { Language, translate, useSelectedLanguage } from '@rem/core/i18n'
import { Options, OptionType, useModal } from '@rem/shared/ui'
import { useCallback, useMemo } from 'react'

import { Item } from './item'

export const LanguageItem = () => {
  const { language, setLanguage } = useSelectedLanguage()
  const modal = useModal()
  const onSelect = useCallback(
    (option: OptionType) => {
      setLanguage(option.value as Language)
      modal.dismiss()
    },
    [setLanguage, modal]
  )

  const langs = useMemo(
    () => [
      { label: translate('settings.english'), value: 'en' },
      { label: translate('settings.arabic'), value: 'ar' }
    ],
    []
  )

  const selectedLanguage = useMemo(
    () => langs.find((lang) => lang.value === language),
    [language, langs]
  )

  return (
    <>
      <Item text="settings.language" value={selectedLanguage?.label} onPress={modal.present} />
      <Options
        ref={modal.ref}
        options={langs}
        onSelect={onSelect}
        value={selectedLanguage?.value}
      />
    </>
  )
}
