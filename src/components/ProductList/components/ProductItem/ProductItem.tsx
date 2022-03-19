import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActionCreators } from '../../../../redux/reducers/cart/reducer'
import { ProductContainer } from '../../style'
import { Button, ImageContainer, Price, ProductItemContainer, Title } from './style'

type Props = {
  price: number
  name: string
}

const ProductItem = (props: Props) => {
  const dispatch = useDispatch()

  return (
    <ProductItemContainer className='test_product_item'>
      <ImageContainer />
      <Price>₺ {props.price}</Price>
      <Title>{props.name}</Title>
      <Button
        onClick={() =>
          dispatch(cartActionCreators.incrementCreator(props.name, props.price))
        }
        className='cy add_to_cart'
      >
        Add
      </Button>
    </ProductItemContainer>
  )
}

export default ProductItem
