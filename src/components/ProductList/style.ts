import styled from 'styled-components'
import { theme } from '../../constants'

export const ProductListWrapper = styled.div`
  width: 100%;
  height: 70rem;
  grid-column: 5 / span 6;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
`

export const ProductContainerWrapper = styled.div`
  height: 63rem;
  background: #ffffff;

`

export const ProductContainer = styled.div`
  margin: 1.4rem;
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  /* flex-wrap: wrap;
  justify-content: center; */
  justify-items: center;
  grid-row-gap: 1.25rem;
`
export const ItemTypeContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
`

interface IButtonProps {
  isSelected: boolean
}

export const Button = styled.button<IButtonProps>`
  padding: 0.375rem 1rem;
  color: ${(props) => (props.isSelected ? theme.lightGray : theme.primary)};
  background-color: ${(props) =>
    props.isSelected ? theme.primary : theme.lightGray};
  border: none;
`

export const Title = styled.div`
  font-size: 1.25rem;
  color: ${theme.productListTitleBlack};
`
