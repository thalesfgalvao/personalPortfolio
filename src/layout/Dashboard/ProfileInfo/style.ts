import styled, { css } from "styled-components";

export const ProfileInfoContainer = styled.div`
  ${({ theme }) => css`
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media ${theme.breakpoints.mobile} {
      grid-column: 1;
      grid-row: 1;
      justify-content: center;
    }
    @media ${theme.breakpoints.tablet} {
      grid-column: 1;
      grid-row: 1;
      justify-content: center;
    }
  `}
`;

export const ProfilePicture = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    background-color: ${theme.colors.secondary};
    border-radius: 50%;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    &:hover {
      transform: scale(1.1);
      box-shadow:
        rgba(0, 0, 0, 0.25) 0px 15px 40px,
        rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
      cursor: pointer;
    }

    @media ${theme.breakpoints.mobile} {
      width: 5rem;
      height: 5rem;
      max-height: 100%;
      border-radius: 50%;
    }
    @media ${theme.breakpoints.tablet} {
      width: 13rem;
      height: 13rem;
      max-height: 100%;
      border-radius: 50%;
    }
  `}
`;

export const ProfileInformation = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
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

export const ProfileTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
    font-weight: 600;
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

export const ProfileLabel = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    color: ${theme.colors.label};
    font-weight: 500;
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
