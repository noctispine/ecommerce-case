import styled from 'styled-components'
import { theme } from '../../../../constants'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  margin-right: 1.4rem;
  margin-left: 1.4rem;
`

export const Info = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Text = styled.div`
  font-size: 1rem;
  color: ${theme.primary};
`

export const QuantityContainer = styled.div`
  display: flex;
  width: 5rem;
  justify-content: space-evenly;
  align-items: center;

  div {
    color: #ffffff;
    display: flex;
    background-color: ${theme.primary};

    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 0.5rem 0.7rem;
  }

  button {
    color: ${theme.primary};
    background-color: transparent;
    cursor: pointer;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
