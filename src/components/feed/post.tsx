import { type Post } from '@rem/shared/types/post'
import { type FC, type PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

interface PostItemProps {
  post: Post
}

const PostItem: FC<PropsWithChildren<PostItemProps>> = ({ post }) => {
  return (
    <View>
      <Text>{post.caption}</Text>
    </View>
  )
}

export default PostItem
