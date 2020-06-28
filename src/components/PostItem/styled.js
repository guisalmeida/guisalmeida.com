import styled from "styled-components"
import media from "styled-media-query"
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PostImage = styled(Img).attrs({
  alt: 'Thumbnail',
  'aria-hidden': 'true'
})`
  border-radius: 50%;
  height: 100%;
  width:100%;
  object-fit: cover;
`

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 5rem;
  width: 100%;
  
  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;

    ${media.lessThan("medium")`
      align-items: center;
    `}
  }

  ${media.lessThan("medium")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  body#grid & {
    text-align: center;
    margin-left: 0;
  }

  ${media.lessThan("medium")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`