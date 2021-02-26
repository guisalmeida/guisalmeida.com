import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import transitions from '../../styles/transitions'

export const ProjectItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--postColor);
  }
`

export const ProjectItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 5rem;
  width: 100%;
  transition: ${transitions.ALL};

  &:hover {
    background-color: var(--highlight);
  }
  
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

export const ProjectItemInfo = styled.div`
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

export const ProjectItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const ProjectItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`