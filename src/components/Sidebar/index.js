
import React from 'react'
import propTypes from 'prop-types'

import Profile from '../Profile'
import Social from '../Social'
import Menu from '../Menu'
import TextCredit from '../TextCredit'

import * as S from './styled'

const Sidebar = ({
    site: { title, position, description },
    isMenuOpen,
    setIsMenuOpen
}) => (
        <S.SidebarContainer isMenuOpen={isMenuOpen}>
            <Profile
                title={title}
                position={position}
                description={description}
                isMobileHeader={false}
            />
            <S.SidebarLinksContainer>
                <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                <Social />
                <TextCredit />
            </S.SidebarLinksContainer>
        </S.SidebarContainer>

    );

Sidebar.propTypes = {
    site: propTypes.shape({
        title: propTypes.string.isRequired,
        position: propTypes.string.isRequired,
        description: propTypes.string.isRequired
    })
}

export default Sidebar;