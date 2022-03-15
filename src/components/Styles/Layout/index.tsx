import styled from "styled-components";
import { theme } from "../../../constants";

export const AppLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: ${theme.htmlBackground};
`