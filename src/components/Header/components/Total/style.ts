import styled from 'styled-components'
import { breakpoints, theme } from '../../../../constants'

export const TotalContainer = styled.div`
  grid-column: 13;
  background-color: ${theme.secondary};

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.7rem;

    .totalVal {
      color: #ffffff;
      height: fit-content;
    }

    img {
      width: 1.1rem;
      height: 1.1rem;
    }
  }

  @media (max-width: ${breakpoints.wide}) {
    grid-column: 12 / span 3;
    
    .info {
      display: none !important;
    }
  }
`

export const LogoContainer = styled.div`
  display: none !important;
  @media (max-width: ${breakpoints.wide}) {
    display: block !important;
  }
`
