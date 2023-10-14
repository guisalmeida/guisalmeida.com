
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from 'gatsby';

import Profile from '../Profile';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import * as S from './styled';
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        position
                        description
                    }
                }
            }
        `
    )

    return (
        <S.LayoutWrapper>
            <GlobalStyles $isMenuOpen={isMenuOpen}/>
            <Sidebar
                site={site.siteMetadata}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            />
            <Profile
                title={site.siteMetadata.title}
                position={site.siteMetadata.position}
                description={site.siteMetadata.description}
                isMobileHeader={true}
            />
            <S.LayoutMain>{children}</S.LayoutMain>
            <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
