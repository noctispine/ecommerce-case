import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'
import CartItem from './components/CartItem/CartItem'
import {
  CartContainer,
  CartList,
  Line,
  LineWrapper,
  TotalContainer,
  TotalWrapper,
} from './style'

type Props = {
  showCart: boolean
}

const Cart = ({showCart}: Props) => {
  const cartState = useSelector((state: RootState) => state.cart)
  const items = cartState.items
  return (
    <CartContainer showCart={showCart} className='cy test_cart'>
      <CartList>
        {items.map((item, indx) => (
          <>
            <CartItem key={indx} item={item} />
            <LineWrapper>
              <Line />
            </LineWrapper>
          </>
        ))}
      </CartList>
      <TotalWrapper>
        <TotalContainer>₺ {cartState.total}</TotalContainer>
      </TotalWrapper>
    </CartContainer>
  )
}

export default Cart
