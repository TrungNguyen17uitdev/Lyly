import { Item, ItemsContainer, LanguageItem, ThemeItem } from '@rem/components/account'
import { useAuth } from '@rem/core/auth'
import { translate } from '@rem/core/i18n'
import { FocusAwareStatusBar, Text } from '@rem/shared/ui'
import { environment } from 'env'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Settings() {
  const signOut = useAuth.use.signOut()

  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <Text className="text-xl font-bold">{translate('settings.title')}</Text>
          <ItemsContainer title="settings.generale">
            <LanguageItem />
            <ThemeItem />
          </ItemsContainer>

          <ItemsContainer title="settings.about">
            <Item text="settings.appName" value={environment.NAME} />
            <Item text="settings.version" value={environment.VERSION} />
          </ItemsContainer>

          <View className="my-8">
            <ItemsContainer>
              <Item text="settings.logout" onPress={signOut} />
            </ItemsContainer>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
