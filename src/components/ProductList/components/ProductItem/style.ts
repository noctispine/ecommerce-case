import styled from 'styled-components'
import { breakpoints, theme } from '../../../../constants'

export const ProductItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 7.75rem;
  

  @media (max-width: ${breakpoints.mobile}) {
    width: 3.5rem;
    hegiht: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 4.5rem;
  }
`

export const ImageContainer = styled.div`
  background: ${theme.gray};

  align-self: center;
  width: 5.75rem;
  height: 5.75rem;
  border: 1rem solid #fefefe;
  outline: solid ${theme.lightGray};
  border-radius: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: ${breakpoints.wide}) {
    width: 4.5rem;
    height: 4.5rem;
  }
`

export const Price = styled.div`
  align-self: flex-start;
  margin-top: 0.5rem;
  color: ${theme.primary};
  font-size: 0.875rem;
`

export const Title = styled.div`
  font-size: 0.875rem;
  width: 7.75rem;
  height: 2.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 3.5rem;
    font-size: 0.7rem;
  }

  @media (max-width: ${breakpoints.wide}) {
    width: 4.5rem;
    font-size: 0.9rem;
  }
`

export const Button = styled.button`
  color: #ffffff;
  width: 7.75rem;
  height: 1.4rem;
  background-color: ${theme.primary};
  text-align: center;
  border: none;
  @media (max-width: ${breakpoints.mobile}) {
    width: 3.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 4.5rem;
  }
`
