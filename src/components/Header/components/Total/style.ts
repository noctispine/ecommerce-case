import styled from 'styled-components'
import { theme } from '../../../../constants'

export const TotalContainer = styled.div`
  grid-column-end: 12;
  width: 8rem;
  background-color: ${theme.secondary};

  display: flex;
  justify-content: center;
  align-items: center;

  div {

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .7rem;

    span {
      color: #ffffff;
      height: fit-content;
    }
  
  
    img {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
`
