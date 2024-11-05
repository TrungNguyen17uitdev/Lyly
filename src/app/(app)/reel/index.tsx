import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

const Reel = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-700">Reel works!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Reel
