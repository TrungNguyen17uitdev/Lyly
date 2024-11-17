import { useAuth } from '@rem/core/auth'
import { Text, TouchableOpacity, View } from 'react-native'

export default function VerifyEmail() {
  const user = useAuth.use.user()

  return (
    <View className="flex flex-col items-center justify-center">
      <Text>Chúng tôi đã gửi một đừng dẫn xác nhận đến {user?.email}</Text>

      <View className="flex">
        <Text>Chưa nhận được email?</Text>
        <TouchableOpacity>
          <Text>Gửi lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
