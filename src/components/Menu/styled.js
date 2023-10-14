import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const MenuWrapper = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  
  ${media.lessThan('medium')`
    margin: auto;
    top: calc(50% - 3rem);
  `}
`

export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('medium')`
    font-size: 1.8rem;
  `}
`

export const MenuItem = styled.li`
  padding: 0.5rem 0;
  font-size: 1.5rem;
  ${media.lessThan('medium')`
    padding: 1rem 0;
  `}
  .active {
    color: var(--highlight);
    text-decoration: underline;
  }
  a {
    color: var(--postColor);
    text-decoration: none;
    transition: ${transitions.ALL};
    font-weight: 400;
    &:hover {
      color: var(--highlight);
      text-decoration: underline;
    }
  }
`