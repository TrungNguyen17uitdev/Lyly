import Header from '@rem/components/feed/header'
import PostItem from '@rem/components/feed/post'
import Story from '@rem/components/feed/story'
import { Post } from '@rem/shared/types/post'
import { FocusAwareStatusBar } from '@rem/shared/ui'
import Skeleton, { SkeletonItem } from '@rem/shared/ui/skeleton'
import { FlashList } from '@shopify/flash-list'
import React, { useState } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const Feed = () => {
  const scrollY = useSharedValue(0)
  const inset = useSafeAreaInsets()
  const [posts] = useState<Post[]>([])
  const [_, setLastPost] = useState<Post>()
  const [postLoading] = useState(false)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    }
  })

  // useEffect(() => {
  //   setPostLoading(true)

  //   const unsubscribe = onSnapshot(
  //     query(collection('post'), startAfter(lastPost), orderBy('createdAt', 'desc'), limit(5)),
  //     (snapshot) => {
  //       const _posts = snapshot.docs.map((doc) => {
  //         return {
  //           ...doc.data(),
  //           id: doc.id
  //         } as Post
  //       })

  //       setPosts((posts) => [...posts, ..._posts])
  //       setPostLoading(false)
  //     }
  //   )

  //   return unsubscribe
  // }, [lastPost])

  const headerStyle = useAnimatedStyle(() => {
    return {
      top: inset.top,
      transform: [
        {
          translateY: scrollY.value > 56 ? -56 : 0
        }
      ]
    }
  })

  const ListEndLoader = () => {
    if (postLoading) {
      return (
        <Skeleton className="flex flex-row items-center">
          <SkeletonItem />
          <SkeletonItem />
        </Skeleton>
      )
    }
  }

  return (
    <SafeAreaView className="h-full bg-white dark:bg-black" edges={['right', 'left', 'top']}>
      <FocusAwareStatusBar />

      <Animated.View style={[headerStyle]}>
        <Header />
      </Animated.View>

      <Story />

      <View className="grow flex-row">
        <FlashList
          data={posts}
          estimatedItemSize={340}
          renderItem={({ item }) => <PostItem post={item} />}
          onScroll={scrollHandler}
          onEndReached={() => setLastPost(posts[posts.length - 1])}
          ListFooterComponent={ListEndLoader}></FlashList>
      </View>
    </SafeAreaView>
  )
}

export default Feed
