import Svg, { Path, SvgProps } from 'react-native-svg'

export const HomeSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.621 1.349a.9.9 0 0 0-1.242 0l-10 9.535a.9.9 0 0 0-.279.652V22a.9.9 0 0 0 .9.9h7V22h.002v-5.102a2.998 2.998 0 1 1 5.996 0V22H15v.9h7a.9.9 0 0 0 .9-.9V11.536a.9.9 0 0 0-.279-.652l-10-9.535ZM16.798 21.1H21.1v-9.179L12 3.244 2.9 11.92V21.1h4.302v-4.202a4.798 4.798 0 0 1 9.596 0V21.1Z"
      clipRule="evenodd"
    />
  </Svg>
)
