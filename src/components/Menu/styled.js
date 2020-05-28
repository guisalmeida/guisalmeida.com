import styled from 'styled-components';
import media from 'styled-media-query';

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuWrapper = styled.nav`
    ${media.lessThan('large')`
        display: none;
    `}
`;

export const MenuList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`;

export const MenuItem = styled.li`
    padding: .5rem 0;

    .active {
        color: var(--highlight);
    }
`;

export const MenuLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color .5s;

    &:hover {
        color: var(--highlight);
    }
`;