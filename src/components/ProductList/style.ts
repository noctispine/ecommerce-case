import styled from 'styled-components'
import { breakpoints, theme } from '../../constants'

export const ProductListWrapper = styled.div`
  width: 100%;
  grid-column: 5 / span 6;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.wide}) {
    grid-column: 2 / span 12;
  }
`

export const ProductContainerWrapper = styled.div`
  height: 63rem;
  background: "#ffffff";

  @media (max-width: ${breakpoints.mobile}) {
    height: 50rem;
  }

`

export const ProductContainer = styled.div`
  margin: 1.4rem;
  display: grid;
  height: fit-content;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1 fr);
  justify-items: center;
  grid-row-gap: 1.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    overflow-y: scroll;
    grid-row-gap: 0.5rem;
    overflow-x: hidden;

  }


`
export const ItemTypeContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  column-gap: .5rem;
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
