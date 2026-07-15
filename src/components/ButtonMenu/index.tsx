import React from "react";
import * as S from "./style";

interface ButtonMenuProps {
  icon: React.ReactElement;
  menuOption: string;
}

export const ButtonMenu = ({ icon, menuOption }: ButtonMenuProps) => {
  return (
    <S.ButtonMenuContainer>
      <S.ButtonMenuItem>
        <S.MenuIcon>{icon}</S.MenuIcon>
        <S.MenuOption>{menuOption}</S.MenuOption>
      </S.ButtonMenuItem>
    </S.ButtonMenuContainer>
  );
};
