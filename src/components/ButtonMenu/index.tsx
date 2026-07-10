import React from "react";
import * as S from "./style";
import { SvgIconProps } from "@mui/material";

interface ButtonMenuProps {
  icon?: React.ReactElement<SvgIconProps>;
  menuOption?: string;
}

export const ButtonMenu = ({ icon, menuOption }: ButtonMenuProps) => {
  return (
    <S.ButtonMenuContainer>
      <S.ButtonMenuItem>
        <S.MenuIcon>
          {icon &&
            React.cloneElement(icon, {
              sx: { fontSize: "2.4rem" },
            })}
        </S.MenuIcon>
        <S.MenuOption>{menuOption}</S.MenuOption>
      </S.ButtonMenuItem>
    </S.ButtonMenuContainer>
  );
};
