import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const MenuWrapper = styled.nav`
  margin-top: 2rem;
  
  ${media.lessThan('medium')`
    margin: auto;
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
  ${media.lessThan('medium')`
    padding: 1rem 0;
  `}
  .active {
    color: var(--highlight);
  }
  a {
    color: var(--texts);
    text-decoration: none;
    transition: ${transitions.COLOR};
    &:hover {
      color: var(--highlight);
    }
  }
`