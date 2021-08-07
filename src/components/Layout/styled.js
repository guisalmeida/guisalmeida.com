import Styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = Styled.section`
    display: flex;

    ${media.lessThan('medium')`
        flex-direction: column;
    `}
`;

export const LayoutMain = Styled.main`
    background: var(--background);
    min-height: 100vh;
    padding: 0 3.75rem 0 20rem;
    transition: background, color 0.5s;
    width: 100%;

    body#grid & {
        grid-template-areas:
            "title"
            "posts"
            "pagination";
    }

    ${media.lessThan("medium")`
        padding: 0 0 3rem 0;
    `}
`;