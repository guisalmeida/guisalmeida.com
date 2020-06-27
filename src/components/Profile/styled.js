import Styled from 'styled-components';
import media from 'styled-media-query';

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileContainer = Styled.section`
  display: ${props => (props.isMobileHeader ? 'none' : 'flex')};
  color: var(--texts);
  flex-direction: column;

  ${media.lessThan('medium')`
    align-items: flex-start;
    display: ${props => (props.isMobileHeader ? 'flex' : 'none')};
    background: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    padding: 1rem;
    width: 100vw;
  `}
`

export const ProfileLink = Styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    ${media.lessThan('medium')`
        display: flex;
        text-align: left;
        width: 100%;
    `}

    &:hover {
        color: var(--highlight);
    }
`;

export const ProfileTitle = Styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 1.5rem;

    ${media.lessThan('medium')`
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

    ${media.lessThan('medium')`
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

    ${media.lessThan('medium')`
        display: none;
    `}
`;
