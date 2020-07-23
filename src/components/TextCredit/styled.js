import styled from 'styled-components'
import media from 'styled-media-query'

export const TextCredit = styled.p`
    font-size: 0.75rem;
    color: var(--texts);
    line-height: 1.5;

    ${media.lessThan('medium')`
        display: none;
    `}

    span {
        color: red;
        font-size: 1rem;
    }
`