import Styled from 'styled-components';
import media from 'styled-media-query';

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = Styled.section`
    color: var(--texts);
    display: flex;
    flex-direction: column;

    ${media.lessThan('large')`
        width: 100%;
    `}
`;

export const ProfileLink = Styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    ${media.lessThan('large')`
        display: flex;
        text-align: left;
    `}

    &:hover {
        color: var(--highlight);
    }
`;

export const ProfileTitle = Styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 1.5rem;

    ${media.lessThan('large')`
        font-size: 1.2rem;
        margin: 0 0 0 10px;
        width: calc(100% - 40px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `}
`

export const ProfilePosition = Styled.small`
    display: block;
    font-size: 0.8rem;
    font-weight: 300;

    ${media.lessThan('large')`
        margin-top: 0.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `}
`;

export const ProfileDescription = Styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;

    ${media.lessThan('large')`
        display: none;
    `}
`;
