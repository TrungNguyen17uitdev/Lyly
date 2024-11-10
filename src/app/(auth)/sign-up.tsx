import { useRouter } from 'expo-router'
import React from 'react'

import { LoginForm, LoginFormProps } from '@rem/components'
import { useAuth } from '@rem/core'
import { FocusAwareStatusBar } from '@rem/shared/ui'

export default function Login() {
  const router = useRouter()
  const signIn = useAuth.use.signIn()

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    console.log(data)
    signIn({ accessToken: 'access-token', refreshToken: 'refresh-token' })
    router.push('/feed')
  }

  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  )
}
