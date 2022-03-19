import styled from "styled-components";
import { theme } from "../../../constants";

export const AppLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-column-gap: 1rem;
    background-color: ${theme.htmlBackground};
`