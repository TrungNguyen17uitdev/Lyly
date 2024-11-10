import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

const Add = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-green-700">Add works!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Add
