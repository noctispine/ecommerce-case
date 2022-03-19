import styled from 'styled-components'
import { breakpoints, theme } from '../../../constants'



export const AppLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 1rem;
  background-color: ${theme.htmlBackground};


 
`

// @media (max-width: ${breakpoints.wide}) {
//   z-index: 100;
//   ::after {
//     display: ${(props) => (props.showCart ? 'inline' : 'none')};
//     position: fixed;
//     top: 0;
//     right: 0;
//     content: "";
//     width: 100%;
//     height: 100%;
//     /* background: ${(props) => (props.showCart ? 'rgba(0, 0, 0, 0.7)' : '')}; */
//   }
// } 