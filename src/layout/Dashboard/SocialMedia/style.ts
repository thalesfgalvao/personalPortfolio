import styled, { css } from "styled-components";

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 3/4;
    gap: 2rem;
`;

export const SocialMediaItem = styled.div`
    ${({ theme }) => css`
    `}
`;

export const Link = styled.a`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        gap: 1rem;
        font-size: ${theme.sizes.small};
        color: ${theme.colors.body};
        transition: 0.2s;
        text-decoration: none;

        &:hover {
            color: ${theme.colors.primary};
            transition: 0.2s;
            cursor: pointer;
            text-decoration: none;
        }
    `}
`