import { FocusAwareStatusBar } from '@rem/components'
import Header from '@rem/components/header'
import { FlashList } from '@shopify/flash-list'
import { styled } from 'nativewind'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
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

      <View className="flex-grow flex-row mt-[56px]">
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
})

export default Feed
