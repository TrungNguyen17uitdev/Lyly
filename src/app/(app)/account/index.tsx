import { FocusAwareStatusBar, Text } from '@rem/shared/ui'
import React from 'react'
import { View } from 'react-native'

const Account = () => {
  return (
    <>
      <FocusAwareStatusBar />

      <View className="flex-1 items-center justify-center">
        <Text className="text-red-700">Account works!!!</Text>
      </View>
    </>
  )
}

export default Account
