import Svg, { Path, Rect, SvgProps } from 'react-native-svg'

export const ReelSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M15.24 14.327a.546.546 0 0 1 0 .93L9.78 18.51c-.347.206-.78-.052-.78-.465v-6.508c0-.414.433-.672.78-.465l5.46 3.254Z"
    />
    <Path stroke="currentColor" strokeWidth={1.8} d="m6 2 4 6M13 2l4 6" />
    <Rect
      width={20.2}
      height={20.2}
      x={1.9}
      y={1.9}
      stroke="currentColor"
      strokeWidth={1.8}
      rx={5.1}
    />
    <Path stroke="currentColor" strokeWidth={1.8} d="M2 8h20" />
  </Svg>
)
