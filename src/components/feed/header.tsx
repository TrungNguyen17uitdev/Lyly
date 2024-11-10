import { ThemeContext } from '@rem/context/theme-context'
import { environment } from '@rem/core/env'
import { HeartSvg, MessengerSvg } from '@rem/shared/ui'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Header = () => {
  const theme = useContext(ThemeContext)

  return (
    <View className=" h-14 bg-white flex dark:bg-black flex-row items-center justify-between w-full px-4 py-3">
      {/* <LogoSvg color={theme.colors.text} /> */}
      <Text className="font-LibreCaslonText italic leading-none text-2xl text-white">
        {environment.NAME}
      </Text>

      <View className="flex items-center flex-row gap-4">
        <TouchableOpacity className="flex items-center justify-center p-0.5 m-1">
          <HeartSvg color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center justify-center p-0.5 m-1">
          <MessengerSvg color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
