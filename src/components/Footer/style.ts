import styled from "styled-components";
import { theme } from "../../constants";

export const FooterLayout = styled.div`
    margin-top: 4.62rem;
    margin-bottom: 2.31rem;

    grid-column: 5 / span 4;
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