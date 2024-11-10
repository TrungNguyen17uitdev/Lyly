import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg'

export const CloseSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G stroke="currentColor" strokeWidth={1.8} clipPath="url(#a)">
      <Path d="M22.136 2.136 2.337 21.935M2.337 2.663l19.799 19.799" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
