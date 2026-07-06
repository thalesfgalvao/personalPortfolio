import styled, { css } from "styled-components";

export const ProfileInfoContainer = styled.div`
  width: 100%;
  grid-row: 1/2;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  `}
`;

export const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
`;

export const ProfileTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
    font-weight: 600;
  `}
`;

export const ProfileLabel = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    color: ${theme.colors.label};
    font-weight: 500;
  `}
`;
