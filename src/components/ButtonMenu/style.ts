import styled, { css } from "styled-components";
import { lighten } from "@mui/material/styles";

export const ButtonMenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-row: 2/3;
    gap: 2rem;

    @media ${theme.breakpoints.mobile} {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
    }
    @media ${theme.breakpoints.tablet} {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
    }
  `}
`;

export const ButtonMenuItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    color: ${theme.colors.body};
    transition: 0.7s;
    padding: 2rem 0rem;
    align-items: center;

    &:hover {
      font-weight: ${theme.fontWeight.bold};
      color: ${theme.colors.primary};
      border-left: 0.5rem solid ${theme.colors.primary};
      background: ${({ theme }) => lighten(theme.colors.primary, 0.8)};
      border-radius: 0.5rem;
      padding: 2rem 0.5rem;
      transition: 0.7s ease-in-out;
      cursor: pointer;
    }

    @media ${theme.breakpoints.mobile} {
      padding: 0px;
      width: 100%;
      justify-content: center;
      svg {
        font-size: ${theme.sizes.medium};
      }
      &:hover {
        border-left: 0;
        border-bottom: 0.5rem solid ${theme.colors.primary};
        background: ${({ theme }) => lighten(theme.colors.primary, 0.8)};
        border-radius: 0.5rem;
        padding: 2rem 0.5rem;
        transition: 0.7s ease-in-out;
        cursor: pointer;
      }
    }
    @media ${theme.breakpoints.tablet} {
      padding: 0px;
      width: 100%;
      justify-content: center;
      svg {
        font-size: ${theme.sizes.large};
      }
      &:hover {
        border-left: 0;
        border-bottom: 0.5rem solid ${theme.colors.primary};
        background: ${({ theme }) => lighten(theme.colors.primary, 0.8)};
        border-radius: 0.5rem;
        padding: 2rem 0.5rem;
        transition: 0.7s ease-in-out;
        cursor: pointer;
      }
    }
    @media ${theme.breakpoints.laptop} {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      color: ${theme.colors.body};
      transition: 0.7s;
      padding: 2rem 0rem;
      align-items: center;
      svg {
        font-size: ${theme.sizes.large};
      }

      &:hover {
        font-weight: ${theme.fontWeight.bold};
        color: ${theme.colors.primary};
        border-left: 0.5rem solid ${theme.colors.primary};
        background: ${({ theme }) => lighten(theme.colors.primary, 0.8)};
        border-radius: 0.5rem;
        padding: 2rem 0.5rem;
        transition: 0.7s ease-in-out;
        cursor: pointer;
      }
    }
    @media ${theme.breakpoints.desktop} {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      color: ${theme.colors.body};
      transition: 0.7s;
      padding: 2rem 0rem;
      align-items: center;
      svg {
        font-size: ${theme.sizes.large};
      }

      &:hover {
        font-weight: ${theme.fontWeight.bold};
        color: ${theme.colors.primary};
        border-left: 0.5rem solid ${theme.colors.primary};
        background: ${({ theme }) => lighten(theme.colors.primary, 0.8)};
        border-radius: 0.5rem;
        padding: 2rem 0.5rem;
        transition: 0.7s ease-in-out;
        cursor: pointer;
      }
    }
  `}
`;

export const MenuOption = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.sizes.normal};
    font-weight: ${theme.fontWeight.normal};
    transition: 0.7s ease-in-out;
    cursor: pointer;
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

export const MenuIcon = styled.span`
  ${({ theme }) => css`
    margin-left: 0.5rem;
  `}
`;
