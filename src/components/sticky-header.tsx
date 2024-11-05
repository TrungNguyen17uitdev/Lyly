import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'

const StickyHeader = () => {
  const scrollY = new Animated.Value(0)

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 60],
    extrapolate: 'clamp',
  })

  const logoOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Image
          source={require('assets/logo/instagram-logo.png')} // Replace with your logo URL
          style={[styles.logo, { opacity: logoOpacity }]}
          resizeMode="contain"
        />
        <Text style={styles.title}>Instagram</Text>
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={16}
      >
        {new Array(30).fill(null).map((_, index) => (
          <View
            key={index}
            className={
              'flex-1 items-center justify-center bg-white h-10' + (index % 2 && ' bg-red-500')
            }
          >
            <Text className="text-fuchsia-100 text-3xl">Block {index}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 100, // Adjust based on the header's initial height
  },
  content: {
    height: 1000, // Just for demo purposes
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 24,
  },
})

export default StickyHeader
