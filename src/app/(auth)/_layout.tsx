import { useAuth } from '@rem/core/auth'
import { FocusAwareStatusBar } from '@rem/shared/ui'
import { Redirect, Stack } from 'expo-router'

const AuthLayout = () => {
  const user = useAuth.use.user()

  if (user) return <Redirect href="/feed" />

  return (
    <>
      <Stack>
        <Stack.Screen name="verify-email" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>

      <FocusAwareStatusBar />
    </>
  )
}

export default AuthLayout
