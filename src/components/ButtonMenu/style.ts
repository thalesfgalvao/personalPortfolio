import styled, { css } from "styled-components";
import { lighten } from '@mui/material/styles';

export const ButtonMenuContainer = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        flex-direction: column;
    `}
`

export const ButtonMenuItem = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        gap: 1rem;
        font-size: ${theme.sizes.small};
        color: ${theme.colors.body};
        font-weight: ${theme.fontWeight.normal};
        transition: 0.7s;
        padding: 2rem 0rem;
        align-items: center;

        &:hover{
            font-weight: ${theme.fontWeight.bold};
            color: ${theme.colors.primary};
            border-left: 0.5rem solid ${theme.colors.primary};
            background: ${({ theme }) => lighten(theme.colors.primary, 0.8)};
            border-radius: 0.5rem;
            padding: 2rem 0.5rem;
            transition: 0.7s ease-in-out;
            cursor: pointer;
        }
    `}
`