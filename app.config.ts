/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config'
import type { AppIconBadgeConfig } from 'app-icon-badge/types'

import { clientEnvironment, environment } from './env'

const appIconBadgeConfig: AppIconBadgeConfig = {
  enabled: environment.APP_ENV !== 'production',
  badges: [
    {
      text: environment.APP_ENV,
      type: 'banner',
      color: 'white'
    },
    {
      text: environment.VERSION.toString(),
      type: 'ribbon',
      color: 'white'
    }
  ]
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: environment.NAME,
  description: `${environment.NAME} Mobile App`,
  owner: environment.EXPO_ACCOUNT_OWNER,
  scheme: environment.SCHEME,
  slug: environment.NAME,
  version: environment.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/8e645247-bfd0-4237-94ed-9cf48fc91f87'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    googleServicesFile: './GoogleService-Info.plist',
    bundleIdentifier: environment.BUNDLE_ID
  },
  experiments: {
    typedRoutes: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#2E3C4B'
    },
    googleServicesFile: './google-services.json',
    package: environment.PACKAGE
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro'
  },
  plugins: [
    [
      'expo-splash-screen',
      {
        backgroundColor: '#2E3C4B',
        image: './assets/splash-icon.png',
        imageWidth: 150
      }
    ],
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Libre_Caslon_Text/LibreCaslonText.ttf',
          './assets/fonts/Libre_Caslon_Text/LibreCaslonText-Bold.ttf',
          './assets/fonts/Libre_Caslon_Text/LibreCaslonText-Italic.ttf'
        ]
      }
    ],
    '@react-native-firebase/app',
    '@react-native-firebase/auth',
    '@react-native-firebase/crashlytics',
    '@react-native-firebase/analytics',
    '@react-native-firebase/firestore',
    '@react-native-firebase/messaging',
    '@react-native-firebase/storage',
    '@react-native-google-signin/google-signin',
    [
      'react-native-fbsdk-next',
      {
        appID: environment.FB_LOGIN_APPID,
        clientToken: environment.FB_LOGIN_CLIENT_TOKEN,
        displayName: environment.FB_LOGIN_APP_NAME,
        scheme: environment.FB_LOGIN_SCHEMA
      }
    ],
    'expo-localization',
    'expo-router',
    ['app-icon-badge', appIconBadgeConfig]
  ],
  extra: {
    ...clientEnvironment,
    eas: {
      projectId: environment.EAS_PROJECT_ID
    }
  }
})
