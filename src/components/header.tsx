import { ThemeContext } from '@rem/context/theme-context'
import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { HeartSvg, MessengerSvg } from './icons'
import LogoSvg from './icons/logo'

const Header = () => {
  const theme = useContext(ThemeContext)

  return (
    <View className="bg-white flex dark:bg-black flex-row items-center justify-between w-full px-4 py-3">
      <LogoSvg color={theme.colors.text} />

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
