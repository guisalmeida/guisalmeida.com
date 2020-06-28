
import styled from 'styled-components'
import Img from 'gatsby-image'
import media from "styled-media-query";

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  padding: 5rem 5rem 0;

  ${media.lessThan("medium")`
      padding: 3rem 0 0;
      max-width: 100%;
  `}
`

export const PostImage = styled(Img).attrs({
    alt: 'Imagem de introdução',
    'aria-hidden': 'true'
  })`
    display: block;
    height: 25vh;
    left: calc(-50vw + 50%);
    margin-top: 0;
    object-fit: cover;
    position: relative;
    width: 100vw;
    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
    &:after {
      background-color: rgba(0, 0, 0, .5);
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  `