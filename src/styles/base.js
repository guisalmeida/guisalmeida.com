import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from './transitions'

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  padding: 5rem 5rem 0;

  ${media.lessThan('medium')`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.6rem;
  margin: 1rem auto;

  ${media.lessThan('medium')`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.6rem;

  ${media.lessThan('medium')`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.6rem;

  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
`

export const MainContent = styled.section`
  margin: auto;
  padding: 2rem 5rem;

  ${media.lessThan('medium')`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0;

    ${media.lessThan('medium')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
    color: var(--texts);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0 auto 1rem;
    color: var(--postColor);
  }

  summary {
    color: var(--postColor);
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
    color: var(--texts);
  }

  ul[class] {
    padding-left: 0;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    width: 100%;
    max-width: 960px;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan('medium')`
      padding: 0 1rem;
    `}
  }

  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0;
    margin: 1.6rem;
    background: var(--borders);
    font-style: italic;
  }

  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan('medium')`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan('medium')`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;

    ${media.lessThan('medium')`
      font-size: 1.125rem;
    `}
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan('medium')`
      padding: 0;
    `}
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    color: var(--postColor);
    text-decoration: none;
    transition: opacity 0.5s;
    font-weight: 400;

    svg {
      color: var(--postColor);
      transition: ${transitions.ALL};

      &:hover {
        color: var(--highlight);
      }
    }

    &:hover {
      color: var(--highlight);
      text-decoration: underline;
    }
  }

  .table-of-contents {
    p {
      margin: 0;
      padding: 0;
    }
  }
`