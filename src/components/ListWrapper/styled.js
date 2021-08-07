import styled from 'styled-components'
import media from 'styled-media-query'

export const ListWrapper = styled.section`
    body#grid & {
    background-color: var(--background);
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
  
  ${media.lessThan("medium")`
    body#grid & {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  `}
`