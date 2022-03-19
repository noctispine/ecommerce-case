import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'
import CartItem from './components/CartItem/CartItem'
import { CartContainer, CartList, Line, TotalContainer, TotalWrapper } from './style'

type Props = {}

const Cart = (props: Props) => {
  const cartState = useSelector((state: RootState) => state.cart)
  const items = cartState.items
  return (
    <CartContainer>
      <CartList>
        {items.map((item, indx) => (
          <>
            <CartItem key={indx} item={item} />
            <Line />
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
