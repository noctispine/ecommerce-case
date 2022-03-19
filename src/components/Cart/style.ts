import styled from 'styled-components'
import { theme } from '../../constants'

export const CartContainer = styled.div`
  grid-column: 11 / span 3;
  margin-top: 2rem;
  position: sticky;
  top: 1rem;
  height: 20rem;
  max-height: 70vh;

  border-radius: 0.125rem;
  border: 0.5rem solid ${theme.primary};

  display: flex;
  flex-direction: column;
`
export const TotalWrapper = styled.div`
  /* position: absolute;
  bottom: 1.5rem;
  right: 1.5rem; */
  margin-top: 1rem;

  width: 100%;
  height: 3.2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const TotalContainer = styled.div`
  color: ${theme.primary};
  border: 0.125rem solid ${theme.primary};
  font-size: 1rem;
  width: 5.75rem;
  height: 100%;
  margin-right: 1.5rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

`

export const CartList = styled.div`
  height: inherit;
  margin-top: 1.6rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 4.8rem;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.scrollBarGray};
    border-radius: 100px;
    width: 0.8rem;
    height: 4.8rem;
  }
`

export const Line = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 15.5rem;
  height: 0.06rem;
  background-color: ${theme.line};
`
