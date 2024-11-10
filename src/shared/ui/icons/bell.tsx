import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg'

export const BellSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12.5 3.023C10.833 2.874 7 3.38 5 6.597 2.5 10.617 5 19.107 1.5 20h11"
      />
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M11.5 3.023c1.667-.149 5.5.357 7.5 3.574 2.5 4.02 0 12.51 3.5 13.403h-11"
      />
      <Path fill="currentColor" d="M9 22c.505 1.177 1.658 2 3 2s2.495-.823 3-2H9Z" />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.732 3a2 2 0 1 0-3.465 0h3.465Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
