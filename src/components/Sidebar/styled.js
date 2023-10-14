import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const SidebarContainer = styled.aside`
    align-items: center;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    padding: 2rem;
    text-align: center;
    width: 20rem;
    transition: ${transitions.ALL};
    z-index: 1;

    ${media.lessThan('medium')`
        align-items: flex-start;
        justify-content: center;
        border: 0;
        height: 100vh;
        padding: 0;
        width: 100%;
        touch-action: none;
        transform: ${props => props.$isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
    `}
`

export const SidebarLinksContainer = styled.section`
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`