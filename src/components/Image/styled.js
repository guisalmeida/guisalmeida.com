import styled from "styled-components";
import media from "styled-media-query";
import Img from 'gatsby-image';

export const ImageWrapper = styled(Img)`
  border-radius: 6px;
  display: flex;
  min-width: 120px;
  height: 80px;

  body#grid & {
    margin-bottom: 1rem;
  }
  
  ${media.lessThan('medium')`
    margin-bottom: 5px;
    width: 100%;
    height: 200px;
  `}
`