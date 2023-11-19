import styled from 'styled-components'
import media from 'styled-media-query'
import transitions from '../../styles/transitions'

export const Tags = styled.div`
  align-items: center;
  color: var(--texts);
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0;
  &:not(:last-child) {
    margin-bottom: .8rem;
  }

  ${media.lessThan("medium")`
    padding: 0 1rem;
    justify-content: center;
  `}
`

export const TagHolder = styled.span.attrs(props => ({
  color: props.color
}))`
  align-items: center;
  display: inline-flex;
  background: var(--borders);
  color: var(--texts);
  padding: .4rem;
  border-radius: 4px;
  margin: 0 0 0.75rem;

  &:focus {
    opacity: 0.8;
  }

  @media (hover: hover){
    &:hover {
      opacity: 0.8;
    }
  }

  &:not(:last-child) {
    margin-right: .4rem;
  }

  > a,
  > span {
    align-items: center;
    text-decoration: none;
    color: var(--texts);
    display: inline-flex;
    transition: ${transitions.COLOR};
    will-change: color;
  }
  
  &[color="javascript"] {
    background: yellow;
    > a,
    > span {
      color: #000;
    }
  }

  &[color="vue"] {
    background: #4fc08d;
    > a,
    > span {
      color: #ffffff;
    }
  }

  &[color="react"] {
    background: #20232a;
    > a,
    > span {
      color: #61dafb;
    }
  }

  &[color="node"] {
    background: #90c53f;
    > a,
    > span {
      color: #333;
    }
  }

  &[color="npm"] {
    background: #CC3838;
    > a,
    > span {
      color: #ffffff;
    }
  }

  &[color="python"] {
    background: #143653;
    > a,
    > span {
      color: yellow;
    }
  }

  &[color="html"] {
    background: #ed5321;
    > a,
    > span {
      color: #fff;
    }
  }

  &[color="css"] {
    background: #3577BF;
    > a,
    > span {
      color: #fff;
    }
  }

  &[color="sass"] {
    background: #CF649A;
    > a,
    > span {
      color: #fff;
    }
  }

  &[color="redux"] {
    background: #764abc;
    > a,
    > span {
      color: #fff;
    }
  }

  &[color="jquery"] {
    background: #2E69AE;
    > a,
    > span {
      color: #fff;
    }
  }

  &[color="terminal"] {
    background: #000;
    > a,
    > span {
      color: green;
    }
  }

  &[color="bootstrap"] {
    background: #563d7c;
    > a,
    > span {
      color: #fff;
    }
  }

  &[color="java"] {
    background: #971800;
    > a,
    > span {
      color: #fff;
    }
  }

  &[color="php"] {
    background: #8993C1;
    > a,
    > span {
      color: #222;
    }
  }

  &[color="typescript"] {
    background: #3178c6;
    > a,
    > span {
      color: #ffffff;
    }
  }
`

export const TagItem = styled.span`
  align-items: center;
  display: inline-flex;
  font-size: .75rem;
  text-transform: uppercase;
  vertical-align: top;
`