import Header from '@rem/components/feed/header'
import { FocusAwareStatusBar } from '@rem/shared/ui'
import { FlashList } from '@shopify/flash-list'
import { styled } from 'nativewind'
import React from 'react'
import { Text, View } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const AnimatedView = styled(Animated.View)
const AnimatedFlatList = styled(Animated.FlatList)

const Feed = () => {
  const scrollY = useSharedValue(0)
  const inset = useSafeAreaInsets()

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  // Animated style for the sticky header
  const headerStyle = useAnimatedStyle(() => {
    return {
      top: inset.top,
      transform: [
        {
          translateY: scrollY.value > 56 ? -56 : 0,
        },
      ],
    }
  })

  return (
    <SafeAreaView className="bg-white dark:bg-black h-full" edges={['right', 'left', 'top']}>
      <FocusAwareStatusBar />

      {/* <AnimatedView style={[styles.header, headerStyle]}>
      </AnimatedView> */}
      <Header />

      <View className="flex-grow flex-row">
        <FlashList
          data={new Array(30).fill(null)}
          estimatedItemSize={39}
          renderItem={({ index }) => (
            <View
              key={index}
              className={
                'flex-1 items-center justify-center bg-white h-10' + (index % 2 && ' bg-red-500')
              }
            >
              <Text className="text-fuchsia-100 text-3xl">Block {index}</Text>
            </View>
          )}
        ></FlashList>
      </View>
    </SafeAreaView>
  )
}

export default Feed
