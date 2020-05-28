import Styled from 'styled-components';
import media from 'styled-media-query';

export const SocialWrapper = Styled.nav`
    margin: 2rem auto;
    width: 100%;

    ${media.lessThan('large')`
        display: none;
    `}
`;

export const SocialList = Styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;

export const SocialItem = Styled.li``;

export const SocialLink = Styled.a`
    color: var(--texts);
    text-decoration: none;
    transition: color .5s;

    &:hover {
        color:var(--highlight);
    }
`;

export const IconWrapper = Styled.div`
    fill: #bbb;
    width: 30px;
    height: 30px;
`;