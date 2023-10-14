
import React from 'react'
import PropTypes from 'prop-types'

import Profile from '../Profile'
import Social from '../Social'
import Menu from '../Menu'

import * as S from './styled'

const Sidebar = ({
    site: { title, position, description },
    isMenuOpen,
    setIsMenuOpen
}) => (
    <S.SidebarContainer $isMenuOpen={isMenuOpen}>
        <Profile
            title={title}
            position={position}
            description={description}
            isMobileHeader={false}
        />
        <S.SidebarLinksContainer>
            <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            <Social />
        </S.SidebarLinksContainer>
    </S.SidebarContainer>

);

Sidebar.propTypes = {
    site: PropTypes.shape({
        title: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default Sidebar;