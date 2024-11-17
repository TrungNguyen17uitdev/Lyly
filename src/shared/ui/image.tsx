import { Image as NImage, ImageProps } from 'expo-image'
import { useState } from 'react'

export type ImgProps = ImageProps & {
  className?: string
}

export const Image = ({
  style,
  className,
  placeholder = 'L0Eyb[xufQxu-;fQfQfQfQfQfQfQ',
  source,
  ...props
}: ImgProps) => {
  const [isError, setIsError] = useState(false)

  return (
    <Image
      className={className}
      placeholder={placeholder}
      style={style}
      transition={{
        effect: 'cross-dissolve',
        duration: 200
      }}
      onError={() => setIsError(true)}
      source={isError ? require('../../../assets/image-fallback.png') : source}
      {...props}
    />
  )
}

export const preloadImages = (sources: string[]) => {
  NImage.prefetch(sources)
}
