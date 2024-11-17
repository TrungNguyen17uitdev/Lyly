import en from '@rem/translations/en.json'
import vi from '@rem/translations/vi.json'

export const resources = {
  en: { translation: en },
  vi: { translation: vi }
}

export type Language = keyof typeof resources
