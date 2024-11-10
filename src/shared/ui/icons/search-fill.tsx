import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

export const SearchFillSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={10} cy={10} r={7.75} stroke="currentColor" strokeWidth={2.5} />
    <Path
      fill="#000"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="m22 22-6-6"
    />
  </Svg>
)
