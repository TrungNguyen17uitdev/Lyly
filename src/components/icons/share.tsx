import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg'

export const ShareSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M2.684 3.95H21.57l-9.443 16.356-2.766-9.069a.9.9 0 0 0-.203-.351L2.684 3.95Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
