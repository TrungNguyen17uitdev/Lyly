// Import  global CSS file
import '../../global.css'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { hydrateAuth } from '@rem/core/auth'
import ThemeProvider from '@rem/core/context/theme-context'
import { loadSelectedTheme } from '@rem/core/hooks'
import { Stack } from 'expo-router'
import { preventAutoHideAsync, setOptions } from 'expo-splash-screen'
import React from 'react'
import { StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'

export { ErrorBoundary } from 'expo-router'

hydrateAuth()
loadSelectedTheme()
// Prevent the splash screen from auto-hiding before asset loading is complete.
preventAutoHideAsync()
// Set the animation options. This is optional.
setOptions({
  duration: 500,
  fade: true
})

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  )
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <KeyboardProvider>
        <ThemeProvider>
          <BottomSheetModalProvider>
            {children}
            <FlashMessage position="top" />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
