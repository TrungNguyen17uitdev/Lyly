import { zodResolver } from '@hookform/resolvers/zod'
import auth, { type FirebaseAuthTypes, sendEmailVerification } from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useAuth } from '@rem/core/auth'
import { Button, ControlledInput, FocusAwareStatusBar, Text } from '@rem/shared/ui'
import { environment } from 'env'
import { type Href, useRouter } from 'expo-router'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk-next'
import { type infer as zInfer, object, string } from 'zod'

export type FormType = zInfer<typeof schema>

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>
}

const schema = object({
  name: string().optional(),
  email: string({
    required_error: 'Email is required'
  }).email('Invalid email format'),
  password: string({
    required_error: 'Password is required'
  }).min(8, 'Password must be at least 8 characters')
})

export default function SignUp() {
  const router = useRouter()
  const signIn = useAuth.use.signIn()

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(({ user }) => signInUser(user, true))
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        }

        console.error(error)
      })
  }

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema)
  })

  const forgotPassword = () => {
    router.push('/forgot-password' as Href)
  }

  const sendEmail = (user: FirebaseAuthTypes.User) => {
    sendEmailVerification(user, {
      url: `${environment.BASE_URL}verify-email/${user.email}`,
      iOS: { bundleId: environment.BUNDLE_ID },
      android: { packageName: environment.PACKAGE }
    })
  }

  const signInWithFacebook = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])

    if (result.isCancelled) {
      console.log('User cancelled the login process')
    }

    const data = await AccessToken.getCurrentAccessToken()

    if (!data) {
      console.log('Something went wrong obtaining access token')
      return
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken)

    auth()
      .signInWithCredential(facebookCredential)
      .then(({ user }) => signInUser(user))
  }

  const signInWitGoogle = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })

    const signInResult = await GoogleSignin.signIn()

    const idToken = signInResult.data?.idToken

    if (!idToken) {
      throw new Error('No ID token found')
    }

    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    auth()
      .signInWithCredential(googleCredential)
      .then(({ user }) => signInUser(user))
  }

  const signInUser = (user: FirebaseAuthTypes.User, withSendEmailVerify?: boolean) => {
    signIn(user)
    if (withSendEmailVerify) {
      sendEmail(user)
      router.push('/verify-email' as Href)
    }
  }

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

          <View className="flex w-full flex-col gap-2">
            <Button className="bg-white" onPress={signInWitGoogle}>
              <Text>Đăng nhập với Google</Text>
            </Button>
            <Button className="bg-blue-700" onPress={signInWithFacebook}>
              <Text>Đăng nhập với Facebook</Text>
            </Button>
          </View>

          <TouchableOpacity onPress={forgotPassword}>
            <Text>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
