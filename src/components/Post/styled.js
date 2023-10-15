import styled from 'styled-components'
import media from 'styled-media-query'
import { GatsbyImage as Img } from 'gatsby-plugin-image'

export const PostImage = styled(Img).attrs({
  alt: 'Introduction image',
  'aria-hidden': 'true'
})`
  display: block;
  height: 50vh;
  object-fit: cover;
  object-position: 50% 0;
  width: 100%;

  ${media.lessThan("medium")`
    height: 30vh;
  `}
`

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  padding: 5rem 5rem 0;

  ${media.lessThan("medium")`
      padding: 3rem 0 0;
      max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  margin: 1rem auto;

  ${media.lessThan("medium")`
    font-size: 2rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 300;
  font-style: italic;
  color: var(--texts);
  text-align: justify;

  ${media.lessThan("medium")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  color: var(--highlight);
  margin-bottom: 1rem;

  ${media.lessThan("medium")`
    padding: 0 1rem;
  `}
`
