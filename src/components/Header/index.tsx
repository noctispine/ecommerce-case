import Total from './components/Total/Total'
import { HeaderContainer, TitleContainer } from './style'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <TitleContainer>MARKET</TitleContainer>
      <Total />
    </HeaderContainer>
  )
}

export default Header