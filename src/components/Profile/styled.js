import Styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from "gatsby";

export const ProfileContainer = Styled.section`
  display: ${props => (props.$isMobileHeader ? 'none' : 'flex')};
  color: var(--texts);
  flex-direction: column;
  align-items: center;

  ${media.lessThan('medium')`
    display: ${props => (props.$isMobileHeader ? 'flex' : 'none')};
    position: fixed;
    align-items: flex-start;
    background: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    padding: 1rem;
    width: 100vw;
    height: 4rem;
    z-index: 5;
  `}
`

export const ProfileLink = Styled(Link)`
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
    margin: 1rem auto 0;
    color: var(--postColor);

    ${media.lessThan('medium')`
        font-size: 1.2rem;
        margin: 0;
    `}
`

export const ProfilePosition = Styled.small`
    display: block;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--postColor);
    margin-top: 0.2rem;

    &:after {
        content: "";
        display: block;
        width: 100px;
        height: 1px;
        background: var(--postColor);
        margin: 1rem auto;
    }

    ${media.lessThan('medium')`
        &:after {
            content: none;
        }
    `}
`;

export const ProfileDescription = Styled.p`
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.4;
    width: 90%;

    ${media.lessThan('medium')`
        display: none;
    `}
`;
