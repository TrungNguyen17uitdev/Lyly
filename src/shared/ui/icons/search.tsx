import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

export const SearchSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={10} cy={10} r={8.1} stroke="currentColor" strokeWidth={1.8} />
    <Path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.8}
      d="m22 22-6-6"
    />
  </Svg>
)
