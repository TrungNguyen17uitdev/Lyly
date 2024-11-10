import Svg, { Path, SvgProps } from 'react-native-svg'

export const BookmarkSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M3.9 21.078V1.9h16.2v19.178l-7.524-6.27a.9.9 0 0 0-1.152 0L3.9 21.079Z"
    />
  </Svg>
)
