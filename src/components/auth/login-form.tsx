import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { object, string, infer as zInfer } from 'zod'

import { Button, ControlledInput, Text } from '@rem/shared/ui'
import { View } from 'react-native'

const schema = object({
  email: string({
    required_error: 'Email is required',
  }).email('Invalid email format'),
  password: string({
    required_error: 'Password is required',
  }).min(8, 'Password must be at least 8 characters'),
})

export type FormType = zInfer<typeof schema>

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>
}

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  })
  return (
    <View className="flex-1 justify-center p-4">
      <Text testID="form-title" className="pb-6 text-center text-2xl">
        Sign In
      </Text>

      {/* <ControlledInput testID="name" control={control} name="name" label="Name" /> */}

      <ControlledInput testID="email-input" control={control} name="email" label="Email" />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label="Password"
        placeholder="***"
        secureTextEntry={true}
      />
      <Button testID="login-button" label="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
