import styled from 'styled-components';
import media from "styled-media-query";

export const PaginationWrapper = styled.section`
    align-items: center;
    color: var(--texts);
    display: flex;
    padding: 1.5rem 5rem;
    justify-content: center;
    border-top: 1px solid var(--mediumBackground);

    ${media.lessThan("medium")`
        font-size: .8rem;
        padding: 1rem;
    `}
    
    a {
        color: var(--texts);
        text-decoration: none;
        transition: color 0.5s;

        @media (hover: hover){
            &:hover {
                color: var(--highlight);
            }
        }
    }

    p {
        margin: 0 30px;
    }
`