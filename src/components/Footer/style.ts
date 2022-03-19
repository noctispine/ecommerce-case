import styled from "styled-components";
import { breakpoints, theme } from "../../constants";

export const FooterLayout = styled.div`
    margin-top: 4.62rem;
    margin-bottom: 2.31rem;
    grid-column: 6 / span 4;
    
    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 2rem;
        
    }
`
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const Text = styled.div`
    color: ${theme.primary};
    margin: 0 1rem;
    display: inline;
`