import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-size: 100%;
    font-family: 'Chakra Petch', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    overflow: ${props => props.$isMenuOpen ? 'hidden' : 'auto'};
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  body.dark {
    --borders: #30363d;
    --texts: #f0f0f3;
    --postColor: #fff;
    --highlight: #9499ff;
    --mediumBackground: #1c1c1c;
    --background: #131313;
    --white: #fff;
    --black: #000;
    --shadow: #fff;
    --shadowHighlight: #fff;
  }
  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #3451b2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
    --shadow: rgba(0,0, 0, 0);
    --shadowHighlight: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    border-left: 1px solid var(--borders);
    background-color: var(--background);
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: var(--borders);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--postColor);	
  }
`
export default GlobalStyles