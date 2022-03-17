import styled from 'styled-components'
import { theme } from '../../constants'

interface IFilterContainerProps {
  isSort?: boolean
}

export const SearchInput = styled.input`
  padding: 0.75rem;
`

export const RadioButtonContainer = styled.div`
  margin-top: 1rem;
`

export const InputContainer = styled.div`
  background-color: #ffffff;
  margin-top: 0.75rem;
  height: auto;
  color: ${theme.blackFilterContainerText};
  font-size: 1.1rem;
`

export const FilterContainer = styled.div<IFilterContainerProps>`
  font-size: 1rem;
  color: ${theme.smokeyGray};
  height: ${(props) => (props.isSort ? '13rem' : '17rem')};
`
export const FilterLayout = styled.div`
  margin-top: 2.4rem;
  width: 18.5rem;

  grid-column: 2 / span 2;

  display: flex;
  flex-direction: column;
  align-content: center;
`
