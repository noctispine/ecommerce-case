import styled from "styled-components";
import { theme } from "../../../../constants";

export const ProductItemContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 7.75rem;
`

export const ImageContainer = styled.div`
    background: ${theme.gray};
    align-self: center;
    width: 5.75rem;
    height: 5.75rem;
    border: 1rem solid ${theme.lightGray};
    border-radius: 0.75rem;
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

`

export const Button = styled.button`
    color: #FFFFFF;
    width: 7.75rem;
    height: 1.4rem;
    background-color: ${theme.primary};
    text-align: center;
    border: none;
`