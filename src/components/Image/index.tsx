import './styles'
import { ImageStyled, Figure } from './styles'
import { ImagesEnum } from './enum'

type ImageProps = {
  name: ImagesEnum,
  width: number,
  height: number,
  alt: string
}

const Image = ({name, width, height, alt}: ImageProps) => {
  return(
    <Figure width={width} height={height}>
      <ImageStyled objectFit='contain' src={ImagesEnum[name]} alt={alt} />
    </Figure>
  )
}

export default Image