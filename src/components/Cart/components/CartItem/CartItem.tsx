import { useDispatch } from 'react-redux'
import { cartActionCreators } from '../../../../redux/reducers/cart/reducer'
import {
  ICartItem,
  roundToTwo,
} from '../../../../redux/reducers/cart/reducerHelpers'
import { Info, ItemContainer, QuantityContainer, Text } from './style'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {
  item: ICartItem
}

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <Info>
        <Text>{item.name}</Text>
        <Text>₺ {roundToTwo(item.price * item.quantity)}</Text>
      </Info>
      <QuantityContainer>
        <button
          onClick={() =>
            dispatch(cartActionCreators.decrementCreator(item.name, item.price))
          }
        >
          {/* <div className="signs">-</div> */}
          <AiOutlineMinus size="25"  />
        </button>
        <div>{item.quantity}</div>
        <button
          onClick={() =>
            dispatch(cartActionCreators.incrementCreator(item.name, item.price))
          }
        >
          {/* <div className="signs">+</div> */}
          <AiOutlinePlus size="25" />
        </button>
      </QuantityContainer>
    </ItemContainer>
  )
}

export default CartItem
