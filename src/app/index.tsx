import { environment } from '@env'
import { Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const App = () => {
  const [isAuthenticated] = useState(true)

  if (isAuthenticated) return <Redirect href="/feed" />

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-700">App {environment.NAME}!!!</Text>
      <StatusBar backgroundColor="#161622" style="light" />
    </View>
  )
}

export default App
