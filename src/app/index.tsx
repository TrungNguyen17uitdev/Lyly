import { environment } from '@rem/core/env'
import { useIsFirstTime } from '@rem/core/hooks'
import { Button, FocusAwareStatusBar, Text } from '@rem/shared/ui'
import { Cover } from '@rem/shared/ui'
import { useRouter } from 'expo-router'
import { SafeAreaView, View } from 'react-native'

const App = () => {
  const [_, setIsFirstTime] = useIsFirstTime()
  const router = useRouter()
  return (
    <View className="flex h-full items-center  justify-center">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">
          Hello, My {environment.NAME} app
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          The right way to build your mobile app
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">🚀 Production-ready </Text>
        <Text className="my-1 text-left text-lg">🥷 Developer experience + Productivity</Text>
        <Text className="my-1 text-left text-lg">🧩 Minimal code and dependencies</Text>
        <Text className="my-1 text-left text-lg">💪 well maintained third-party libraries</Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false)
            router.push('/')
          }}
        />
      </SafeAreaView>
    </View>
  )
}

export default App
