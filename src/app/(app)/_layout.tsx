import { ThemeContext } from '@rem/context/theme-context'
import { useAuth } from '@rem/core'
import {
  AddSvg,
  HomeFillSvg,
  HomeSvg,
  ReelFillSvg,
  ReelSvg,
  SearchFillSvg,
  SearchSvg,
  UserFillSvg,
  UserSvg,
} from '@rem/shared/ui'
import { Redirect, SplashScreen, Tabs } from 'expo-router'
import React, { useCallback, useContext, useEffect } from 'react'

interface IconProps {
  active: boolean
  color: string
}

type IconType = React.FC<IconProps>

interface TabType {
  name: string
  label: string
  Icon: IconType
}

const tabs: TabType[] = [
  {
    name: 'feed/index',
    label: 'Feed',
    Icon: ({ active, color }) =>
      active ? <HomeFillSvg color={color} /> : <HomeSvg color={color} />,
  },
  {
    name: 'search/index',
    label: 'Search',
    Icon: ({ active, color }) =>
      active ? <SearchFillSvg color={color} /> : <SearchSvg color={color} />,
  },
  {
    name: 'add/index',
    label: 'Add',
    Icon: ({ color }) => <AddSvg color={color} />,
  },
  {
    name: 'reel/index',
    label: 'Reel',
    Icon: ({ active, color }) =>
      active ? <ReelFillSvg color={color} /> : <ReelSvg color={color} />,
  },
  {
    name: 'account/index',
    label: 'User',
    Icon: ({ active, color }) =>
      active ? <UserFillSvg color={color} /> : <UserSvg color={color} />,
  },
]

const AppLayout = () => {
  const theme = useContext(ThemeContext)
  const status = useAuth.use.status()

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash()
      }, 1000)
    }
  }, [hideSplash, status])

  if (status === 'signOut') {
    return <Redirect href="/sign-in" />
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          paddingBottom: 35,
          height: 85,
          backgroundColor: theme.colors.background,
        },
      }}
      initialRouteName="feed"
    >
      {tabs.map(({ name, label, Icon }) => (
        <Tabs.Screen
          name={name}
          key={name}
          options={{
            title: label,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => <Icon active={focused} color={theme.colors.text} />,
          }}
        ></Tabs.Screen>
      ))}
    </Tabs>
  )
}

export default AppLayout
