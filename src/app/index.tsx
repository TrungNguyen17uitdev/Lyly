import { environment } from '@env'
import { FocusAwareStatusBar } from '@rem/shared/ui'
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <>
      <FocusAwareStatusBar />

      <View className="flex-1 items-center justify-center">
        <Text className="text-red-700">App {environment.NAME}!!!</Text>
        <Link href="/sign-in">
          Đăng nhập
          {/* <Button>
            <Text>Đăng nhập</Text>
          </Button> */}
        </Link>
      </View>
    </>
  )
}

export default App
