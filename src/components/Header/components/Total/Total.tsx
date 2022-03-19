import { LogoContainer, TotalContainer } from './style'
import bag from '../../../../images/bag.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducers/rootReducer'
import { BsFillCartFill } from 'react-icons/bs'
type Props = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showCart: boolean
}

const Total = ({ setShowCart, showCart }: Props) => {
  const cartState = useSelector((state: RootState) => state.cart)

  return (
    <TotalContainer>
      <LogoContainer onClick={() => setShowCart(!showCart)}>
        <BsFillCartFill color="#ffffff" size={20} />
        <span className="totalVal">₺ {cartState.total}</span>
      </LogoContainer>
      <div className="info">
        <img src={bag} alt="bag" />
        <span className="totalVal">₺ {cartState.total}</span>
      </div>
    </TotalContainer>
  )
}

export default Total
