import styled from 'styled-components'
import { isPropertySignature } from 'typescript'
import { breakpoints, theme } from '../../../../constants'

export const PaginationWrapper = styled.div`
  margin: 0rem 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 3rem;
  }
`

interface PaginationItemProps {
  selected?: boolean
  disabled?: boolean
  arrow?: boolean
}

export const PaginationItem = styled.div<PaginationItemProps>`
  min-width: 1rem;
  height: 1.2rem;
  padding: 0.75rem;
  margin: ${(props) => (!props.arrow ? '0 .2rem' : '')};
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.selected ? '#FFFFFF' : theme.smokeyGray)};

  list-style: none;
  background: ${(props) => (props.selected ? theme.primary : '')};
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    height: 0.8rem;
    padding: 0.3rem;
    font-size: 0.9rem;
  }
`
export const PaginationUl = styled.div`
  display: flex;
  justify-content: space-between;
`

interface IListItemGroupProps {
  arrow?: boolean
}

export const ListItemGroup = styled.div<IListItemGroupProps>`
  font-weight: ${(props) => (props.arrow ? 'bold' : '')};
  display: flex;

  &:active {
    color: ${theme.primary};
  }
`

/* align-self: ${(props) =>
  props.arrow === 'right'
    ? 'flex-end'
    : props.arrow === 'left'
    ? 'flex-start'
    : 'center'}; */
