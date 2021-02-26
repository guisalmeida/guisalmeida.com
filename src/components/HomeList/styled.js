import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import transitions from '../../styles/transitions'

export const Subtitle = styled.section`
    margin: auto;
    padding: 2rem 5rem;
    border-bottom: 1px solid var(--borders);
    background: var(--mediumBackground);
    display: flex;
    justify-content: space-between;

    ${media.lessThan('medium')`
        flex-direction: column;
        text-align: center;
        padding: 2rem 1rem;
        max-width: 100%;
    `}

    h3 {
        color: var(--postColor);
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.7;
        letter-spacing: 0.069rem;
        padding: 0;
    }
`
export const BlogLink = styled(AniLink)`
    display: block;
    color: var(--texts);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 0 0 5rem;
    transition: ${transitions.ALL};
    text-decoration: none;

    ${media.lessThan('medium')`
        text-align: center;
        padding: 1rem 0 0;
        max-width: 100%;
    `}

    &:hover {
        color: var(--highlight);
        text-decoration: underline;
    }
`