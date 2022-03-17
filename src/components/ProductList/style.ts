import styled from 'styled-components'
import { theme } from '../../constants'

export const ProductListWrapper = styled.div`
  width: 100%;
  height: 100%;
  height: 67rem;
  grid-column: 5 / span 4;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
`

export const ProductContainer = styled.div`
  height: 63rem;
  background: #ffffff;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 1.2rem 1rem;
`
export const ItemTypeContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0 0.5rem;
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
