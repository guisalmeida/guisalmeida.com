import React from 'react';
import links from './content';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const Menu = () => (
    <S.MenuWrapper>
        <S.MenuList>
            {links.map((link, index) => (
                <S.MenuItem key={index}>
                    <S.MenuLink
                        cover
                        direction="left"
                        bg={getThemeColor()}
                        duration={0.6}
                        to={link.path}
                        activeClassName="active"
                    >
                        {link.label}
                    </S.MenuLink>
                </S.MenuItem>
            ))}
        </S.MenuList>
    </S.MenuWrapper>
);

export default Menu;