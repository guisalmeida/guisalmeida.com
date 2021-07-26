import React from 'react';
import links from './content';
import { Link } from 'gatsby';

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
                        <Link
                            to={link.path}
                            activeClassName="active"
                            onClick={() => handleMenuLinks()}
                        >
                            {link.label}
                        </Link>
                    </S.MenuItem>
                ))}
            </S.MenuList>
        </S.MenuWrapper>
    )
};

export default Menu;