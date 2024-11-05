import Svg, { Path, SvgProps } from 'react-native-svg'

export const BurgerSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path stroke="currentColor" strokeWidth={1.8} d="M2 5.1h20M2 12.1h20M2 19.1h20" />
  </Svg>
)
