import type { Theme } from '@react-navigation/native'
import { DarkTheme as _DarkTheme, DefaultTheme } from '@react-navigation/native'
import { throttle } from 'lodash'
import { createContext, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { Appearance } from 'react-native'

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
  },
}

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

export const ThemeContext = createContext<Theme>(DefaultTheme)

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const defaultTheme = Appearance.getColorScheme() === 'dark' ? DarkTheme : LightTheme
  const [colorTheme, setColorTheme] = useState(defaultTheme)

  const onColorSchemeChange = useCallback(
    throttle(
      ({ colorScheme }) => {
        if (colorScheme === 'dark') {
          console.log(colorScheme)
          setColorTheme(DarkTheme)
        } else {
          setColorTheme(LightTheme)
        }
      },
      250,
      {
        leading: true,
      }
    ),
    []
  )

  useEffect(() => {
    const subscription = Appearance.addChangeListener(onColorSchemeChange)
    return () => {
      onColorSchemeChange.cancel()
      subscription.remove()
    }
  }, [])

  return <ThemeContext.Provider value={colorTheme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
