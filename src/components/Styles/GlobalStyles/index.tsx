import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { theme } from '../../../constants'
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  font-family: ${theme.fontFamily};
`