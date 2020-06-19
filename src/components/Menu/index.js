import React from 'react';
import links from './content';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const Menu = ({ setIsMenuOpen, isMenuOpen }) => {

    const handleMenuLinks = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <S.MenuWrapper>
            <S.MenuList>
                {links.map((link, index) => (
                    <S.MenuItem key={index}>
                        <AniLink
                            cover
                            direction="left"
                            bg={getThemeColor()}
                            duration={0.6}
                            to={link.path}
                            activeClassName="active"
                            onClick={() => handleMenuLinks()}
                            activeClassName="active"
                        >
                            {link.label}
                        </AniLink>
                    </S.MenuItem>
                ))}
            </S.MenuList>
        </S.MenuWrapper>
    )
};

export default Menu;