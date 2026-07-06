import React from 'react';
import * as S from './style'
import { SvgIconProps } from '@mui/material';

interface ButtonMenuProps {
    icon?: React.ReactElement<SvgIconProps>;
    menuOption?: string;
}

export const ButtonMenu = ({ icon, menuOption }: ButtonMenuProps) => {
    return(
        <S.ButtonMenuContainer>
            <S.ButtonMenuItem>
                {icon &&
                React.cloneElement(icon, {
                    sx: { fontSize: '2.4rem' },
                })}
                {menuOption}
            </S.ButtonMenuItem>
        </S.ButtonMenuContainer>
    );
}