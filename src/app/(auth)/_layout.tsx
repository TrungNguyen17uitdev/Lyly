import { hydrateAuth, useAuth } from '@rem/core'
import { FocusAwareStatusBar } from '@rem/shared/ui'
import { Redirect, Stack } from 'expo-router'

hydrateAuth()

const AuthLayout = () => {
  const user = useAuth.use.user()

  if (user) return <Redirect href="/(app)/feed" />

  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>

      <FocusAwareStatusBar />
    </>
  )
}

export default AuthLayout
