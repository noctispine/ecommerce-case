import { TotalContainer } from './style'
import bag from '../../../../images/bag.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducers/rootReducer'
type Props = {}

const Total = (props: Props) => {
  const cartState = useSelector((state: RootState) => state.cart)


  return (
    <TotalContainer>
      <div>
        <img src={bag} alt="bag" />
        <span>₺ {cartState.total}</span>
      </div>
    </TotalContainer>
  )
}

export default Total
