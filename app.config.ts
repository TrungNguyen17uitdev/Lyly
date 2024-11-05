import type { ConfigContext, ExpoConfig } from '@expo/config'

import { clientEnvironment, environment } from './env'

let plugins = [
  [
    'expo-router',
    {
      userTrackingPermission: false,
    },
  ],
  [
    'expo-image-picker',
    {
      photosPermission: 'The app accesses your photos to let you upload a profile picture.',
    },
  ],
]
if (process.env.SENTRY_DSN && process.env.SENTRY_DSN.length > 0) {
  plugins.push(['sentry-expo'])
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
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#2E3C4B',
  },
  updates: {
    fallbackToCacheTimeout: 0,
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
  plugins: ['expo-router'],
  extra: {
    ...clientEnvironment,
    eas: {
      projectId: environment.EAS_PROJECT_ID,
    },
  },
})
