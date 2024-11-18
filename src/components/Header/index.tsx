import { ImagesEnum } from '../Image/enum'
import Image from './../Image'

const Header = () => {
  return(
    <div>
      <Image name={ImagesEnum.logo} width={100} height={100} alt="Profile pic"/>
      {/* <Text>Good Morning, Anny</Text>
      <Icon /> */}
    </div>
  )
}

export default Header