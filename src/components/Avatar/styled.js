import styled from 'styled-components'
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
    .gatsby-image-wrapper {
      display: block;
      height: 50vh;
      object-fit: cover;
      object-position: 50% 0;
      width: 100%;
  
      ${media.lessThan("medium")`
          height: 30vh;
      `}
    }
`;


