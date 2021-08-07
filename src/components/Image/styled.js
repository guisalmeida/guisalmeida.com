import styled from 'styled-components'
import media from 'styled-media-query'

export const ImageWrapper = styled.div`
  ${media.lessThan('medium')`
    width: 100%;
  `}

  .gatsby-image-wrapper {
    border-radius: 6px;
    display: flex;
    width: 120px;
    height: 80px;
    
    body#grid & {
      margin-bottom: 1rem;
    }
    
    ${media.lessThan('medium')`
      margin-bottom: 5px;
      width: 100%;
      height: 200px;
    `}
  }
`