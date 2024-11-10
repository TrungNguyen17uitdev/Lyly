import type { ConfigContext, ExpoConfig } from '@expo/config'

import { clientEnvironment, environment } from './env'

const plugins: (string | [] | [string] | [string, any])[] | undefined = [
  'expo-router',
  'sentry-expo',
  [
    'expo-font',
    {
      fonts: [
        './assets/fonts/Libre_Caslon_Text/LibreCaslonText.ttf',
        './assets/fonts/Libre_Caslon_Text/LibreCaslonText-Bold.ttf',
        './assets/fonts/Libre_Caslon_Text/LibreCaslonText-Italic.ttf',
      ],
    },
  ],
  [
    'react-native-fbsdk-next',
    {
      appID: environment.FB_LOGIN_APPID,
      clientToken: environment.FB_LOGIN_CLIENT_TOKEN,
      displayName: environment.FB_LOGIN_APP_NAME,
      scheme: environment.FB_LOGIN_SCHEMA,
    },
  ],
]

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
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#2E3C4B',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/8e645247-bfd0-4237-94ed-9cf48fc91f87',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: environment.BUNDLE_ID,
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#2E3C4B',
    },
    package: environment.PACKAGE,
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins,
  extra: {
    ...clientEnvironment,
    eas: {
      projectId: environment.EAS_PROJECT_ID,
    },
  },
})
