import { useRouter } from 'expo-router'
import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormType, LoginFormProps } from '@rem/components'
import { useAuth } from '@rem/core'
import {
  Button,
  ControlledInput,
  FocusAwareStatusBar,
  Text,
  TouchableOpacity,
} from '@rem/shared/ui'
import { environment } from 'env'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, View } from 'react-native'
import { object, string } from 'zod'

const schema = object({
  name: string().optional(),
  email: string({
    required_error: 'Email is required',
  }).email('Invalid email format'),
  password: string({
    required_error: 'Password is required',
  }).min(8, 'Password must be at least 8 characters'),
})

export default function Login() {
  const router = useRouter()
  const signIn = useAuth.use.signIn()

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    console.log(data)
    signIn({ accessToken: 'access-token', refreshToken: 'refresh-token' })
    router.push('/feed')
  }

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  return (
    <>
      <FocusAwareStatusBar />

      <Text>{environment.NAME}</Text>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={10}>
        <View className="flex-1 justify-center p-4">
          <Text testID="form-title" className="pb-6 text-center text-2xl">
            Sign In
          </Text>

          <ControlledInput
            control={control}
            name="email"
            label="Email"
            placeholder="example@gmail.com"
          />

          <ControlledInput
            control={control}
            name="password"
            label="Mật khẩu"
            placeholder="8 ký tự"
            secureTextEntry={true}
          />

          <Button testID="login-button" label="Đăng nhập" onPress={handleSubmit(onSubmit)} />

          <View className="inline">
            <Text>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity>
              <Text>Đăng ký</Text>
            </TouchableOpacity>
            <Text>ngay</Text>
          </View>

          <View className="flex flex-col gap-2 w-full">
            <Button>
              <Text>Đăng nhập qua Google</Text>
            </Button>
            <Button>
              <Text>Đăng nhập qua Facebook</Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
