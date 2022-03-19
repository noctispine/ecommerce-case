import Total from './components/Total/Total'
import { HeaderContainer, TitleContainer } from './style'
import logo from '../../images/logo.png'

type Props = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showCart: boolean
}

const Header = ({setShowCart, showCart}: Props) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={logo} alt="logo" />
      </TitleContainer>
      <Total setShowCart={setShowCart} showCart={showCart} />
    </HeaderContainer>
  )
}

export default Header
