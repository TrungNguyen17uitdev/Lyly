import { useCallback, useMemo } from 'react'
import { Item } from './item'
import { useSelectedTheme, ColorSchemeType } from '@rem/core/hooks'
import { Options, OptionType, useModal } from '@rem/shared/ui'
import { translate } from '@rem/core/i18n'

export const ThemeItem = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme()
  const modal = useModal()

  const onSelect = useCallback(
    (option: OptionType) => {
      setSelectedTheme(option.value as ColorSchemeType)
      modal.dismiss()
    },
    [setSelectedTheme, modal]
  )

  const themes = useMemo(
    () => [
      { label: `${translate('settings.theme.dark')} 🌙`, value: 'dark' },
      { label: `${translate('settings.theme.light')} 🌞`, value: 'light' },
      { label: `${translate('settings.theme.system')} ⚙️`, value: 'system' }
    ],
    []
  )

  const theme = useMemo(
    () => themes.find((t) => t.value === selectedTheme),
    [selectedTheme, themes]
  )

  return (
    <>
      <Item text="settings.theme.title" value={theme?.label} onPress={modal.present} />
      <Options ref={modal.ref} options={themes} onSelect={onSelect} value={theme?.value} />
    </>
  )
}
