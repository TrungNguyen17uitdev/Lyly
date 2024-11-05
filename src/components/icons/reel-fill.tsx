import Svg, { Path, SvgProps } from 'react-native-svg'

export const ReelFillSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.503 7.323A6 6 0 0 1 7.5 1.5h3.786l3.882 5.823H10.55l-3.847-5.77c-.61.08-1.192.253-1.73.503l3.512 5.267H1.503ZM1.5 7.5c0-.06 0-.118.003-.177H1.5V7.5Zm0 1.54v7.46a6 6 0 0 0 6 6h9a6 6 0 0 0 6-6V9.04h-21Zm21-1.54v-.177h-.003A6 6 0 0 0 16.5 1.5h-3.15l3.883 5.823h5.264l.003.177Zm-7.407 6.721a.52.52 0 0 1 0 .887L9.88 18.215c-.331.197-.745-.05-.745-.444v-6.212c0-.395.414-.641.745-.444l5.212 3.106Z"
      clipRule="evenodd"
    />
  </Svg>
)
