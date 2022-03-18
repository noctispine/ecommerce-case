import Total from './components/Total/Total'
import { HeaderContainer, TitleContainer } from './style'
import logo from '../../images/logo.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={logo} alt="logo" />
      </TitleContainer>
      <Total />
    </HeaderContainer>
  )
}

export default Header
