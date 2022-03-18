import styled from 'styled-components'
import { theme } from '../../constants'

export const HeaderContainer = styled.div`
  grid-column: 1 / span 12;
  height: 4.75rem;

  display: grid;
  grid-template-columns: repeat(12, 1fr);

  background-color: ${theme.primary};
`

export const TitleContainer = styled.div`
  grid-column: 5 / span 4;
  align-self: center;
  justify-self: center;
  font-size: 3rem; // Delete
  align-self: center;
`
