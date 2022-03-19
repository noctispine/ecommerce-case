import styled from 'styled-components'
import { theme } from '../../constants'

interface IFilterTypeSelectionProps {
  isSort?: boolean
}

export const LabelCheckBox = styled.label`
  color: ${theme.blackFilterContainerText};
  font-size: 1.1rem;
  margin-left: 1rem;
  font-size: .85rem;

  span {
    color: ${theme.lightGrayText};
  }
`

export const SearchInput = styled.input`
  display: block;
  padding: 0.75rem;
  margin: 1.5rem;
  &:focus {
    outline: none;
  }
`

export const CheckBox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RadioButtonContainer = styled.div`
  margin-top: 1rem;
`

export const ListContainer = styled.div<IFilterTypeSelectionProps>`
  height: 9rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: ${(props) => (props.isSort ? '1.5rem' : '')};

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  row-gap: .8rem;

  ::-webkit-scrollbar {
    width: 0.25rem;
    height: 4.8rem;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.scrollBarGray};
    border-radius: 100px;
    width: 0.25rem;
    height: 4.8rem;
  }
`

export const InputContainer = styled.div<IFilterTypeSelectionProps>`
  background-color: #ffffff;
  margin-top: 0.75rem;
  width: 18.5rem;

  height: ${(props) => (props.isSort ? '11.5rem' : '15rem')};
  color: ${theme.blackFilterContainerText};
  font-size: 1.1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
`

export const FilterContainer = styled.div<IFilterTypeSelectionProps>`
  font-size: 1rem;
  color: ${theme.smokeyGray};
`

export const FilterLayout = styled.div`
  margin-top: 2.4rem;
  width: 18.5rem;
  row-gap: 1.2rem;

  grid-column: 2 / span 3;

  display: flex;
  flex-direction: column;
  align-content: center;
`
