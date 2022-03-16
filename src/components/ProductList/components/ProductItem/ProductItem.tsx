import React from 'react'
import { ProductContainer } from '../../style'
import { Button, ImageContainer, Price, ProductItemContainer, Title } from './style'

type Props = {
    price: number
    name: string
}

const ProductItem = (props: Props) => {
  return (
    <ProductItemContainer>
        <ImageContainer />
        <Price>₺ {props.price}</Price>
        <Title>{props.name}</Title>
        <Button>Add</Button>
    </ProductItemContainer>
  )
}

export default ProductItem