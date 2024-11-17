import { ThemeContext } from '@rem/core/context'
import { environment } from '@rem/core/env'
import { HeartSvg, MessengerSvg } from '@rem/shared/ui'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Header = () => {
  const theme = useContext(ThemeContext)

  return (
    <View className=" flex h-14 w-full flex-row items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* <LogoSvg color={theme.colors.text} /> */}
      <Text className="font-LibreCaslonText text-2xl italic leading-none text-white">
        {environment.NAME}
      </Text>

      <View className="flex flex-row items-center gap-4">
        <TouchableOpacity className="m-1 flex items-center justify-center p-0.5">
          <HeartSvg color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity className="m-1 flex items-center justify-center p-0.5">
          <MessengerSvg color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
