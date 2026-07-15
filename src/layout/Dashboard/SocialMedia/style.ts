import styled, { css } from "styled-components";

export const SocialMediaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-row: 3;
    justify-content: space-around;
    gap: 1rem;

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
    align-items: center;
    gap: 1rem;
    font-size: ${theme.sizes.normal};
    color: ${theme.colors.body};
    transition: 0.2s;
    text-decoration: none;
    max-width: max-content;

    &:hover {
      color: ${theme.colors.primary};
      transition: 0.2s;
      cursor: pointer;
      text-decoration: none;
    }

    @media ${theme.breakpoints.mobile} {
      svg {
        font-size: ${theme.sizes.medium};
      }
    }
    @media ${theme.breakpoints.tablet} {
      svg {
        font-size: ${theme.sizes.large};
      }
    }
    @media ${theme.breakpoints.laptop} {
      margin-left: 0.5rem;
      svg {
        font-size: ${theme.sizes.large};
      }
    }
    @media ${theme.breakpoints.desktop} {
      margin-left: 0.5rem;
      svg {
        font-size: ${theme.sizes.large};
      }
    }
  `}
`;

export const LinkLabel = styled.label`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.colors.primary};
      transition: 0.2s;
      cursor: pointer;
      text-decoration: none;
    }
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
