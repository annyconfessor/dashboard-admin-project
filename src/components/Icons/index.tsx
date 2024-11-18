import { IconStyled, Figure } from './styles'
import { IconsEnum } from './enum'

type IconProps = {
  name: IconsEnum,
  width: number,
  height: number
}

const Icon = ({name, width, height}: IconProps) => {
  return(
    <Figure width={width} height={height}>
      <IconStyled objectFit='contain' src={IconsEnum[name]} />
    </Figure>
  )
}

export default Icon