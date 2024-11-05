import Svg, { Path, Rect, SvgProps } from 'react-native-svg'

export const AddSvg = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Rect
      width={20}
      height={20}
      x={2}
      y={2}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      rx={5}
    />
    <Path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M12.1 6.9v10.2M6.9 11.8h10.2"
    />
  </Svg>
)
