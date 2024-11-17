/* eslint-env node */

const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

module.exports = (() => {
  const config = getDefaultConfig(__dirname)

  const { resolver } = config

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg']
  }

  return withNativeWind(config, { input: './global.css' })
})()
