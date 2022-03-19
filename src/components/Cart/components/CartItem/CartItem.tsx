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
    <ItemContainer className="cy cart_item">
      <Info>
        <Text>{item.name}</Text>
        <Text>₺ {roundToTwo(item.price * item.quantity)}</Text>
      </Info>
      <QuantityContainer>
        <button
          className='cy decrement'
          onClick={() =>
            dispatch(cartActionCreators.decrementCreator(item.name, item.price))
          }
        >
          {/* <div className="signs">-</div> */}
          <AiOutlineMinus size="25" />
        </button>
        <div  className='cy quantity'>{item.quantity}</div>
        <button
        className='cy increment'
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
