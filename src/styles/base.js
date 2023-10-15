import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from './transitions'

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: var(--highlight);

  ${media.lessThan("medium")`
    text-align: center;
  `}
`

export const MainContent = styled.section`
  margin: auto;
  padding: 2rem 5rem;
  border-bottom: 1px solid var(--mediumBackground);

  ${media.lessThan('medium')`
    padding: 0;
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
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0;
    text-align: justify;

    ${media.lessThan('medium')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }

  p {
    margin: 1rem 0;
    color: var(--texts);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2rem 0 1rem;
    color: var(--postColor);
  }

  summary {
    color: var(--postColor);
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 1rem 0;
    color: var(--texts);
  }

  ul[class] {
    padding-left: 0;
  }

  li {
    padding: 0.625rem 0;
    color: var(--texts);
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
    padding: 0 1rem;
    margin: 1rem 0;
    background: var(--borders);
    font-style: italic;

    ${media.lessThan('medium')`
      margin: 1rem;
    `}

    & pre {
      font-style: initial;
    }
  }

  hr {
    border: 1px solid var(--borders);
    margin: 2rem auto;
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
    margin: 1rem 0;

    ${media.lessThan('medium')`
      margin: 1rem;
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

      @media (hover: hover){
        &:hover {
          color: var(--highlight);
        }
      }
    }

    @media (hover: hover){
      &:hover {
        color: var(--highlight);
        text-decoration: underline;
      }
    }
  }

  table {
    font: 100% sans-serif;
    background-color: var(--mediumBackground);
    border-collapse: collapse;
    empty-cells: show;
    border: 1px solid var(--borders);
    margin: 1rem 0 2.4rem 1.6rem;
  }
  
  table th,
  table td {
    text-align: center;
    padding: .5rem;
    border: 1px solid var(--borders);
    color: var(--texts);
  }

  table th {
    font-weight: bold;
  }
  
  table > thead > tr:first-child > th {
    text-align: center;
    color: var(--texts);
    background-color: var(--borders);
  }

  /* fix size of superscript */
  table sup {
    font-size: 75%;
  }

  table > tbody > tr > td:first-child {
    font-weight: bold;
  }

  .table-of-contents {
    p, li {
      margin: 0;
      padding: 0;
    }
  }
`