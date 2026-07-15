import styled, { css } from "styled-components";

export const SocialMediaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-row: 3;
    gap: 2rem;

    @media ${theme.breakpoints.mobile} {
      display: flex;
      flex-direction: column;
      grid-row: 1;
      grid-column: 3;
      justify-content: center;
      align-items: center;
    }
    @media ${theme.breakpoints.tablet} {
      display: flex;
      flex-direction: column;
      grid-row: 1;
      grid-column: 3;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const SocialMediaItem = styled.div`
  ${({ theme }) => css``}
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
`;

export const LinkLabel = styled.label`
  ${({ theme }) => css`
    @media ${theme.breakpoints.mobile} {
      display: none;
      visibility: hidden;
    }
    @media ${theme.breakpoints.tablet} {
      display: none;
      visibility: hidden;
    }
  `}
`;
