import Styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = Styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    width: 20rem;
    height: 100vh;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);

    ${media.lessThan('large')`
        align-items: flex-start;
        justify-content: center;
        height: 4.125rem;
        padding: 0 2rem;
        width: 100%;
    `}
`;