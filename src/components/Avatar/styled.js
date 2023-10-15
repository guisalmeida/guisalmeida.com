import styled from 'styled-components';
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    margin: 0 auto;
    object-fit: cover;
    overflow: hidden;

    ${media.lessThan("medium")`
        height: 2rem;
        width: 2rem;
        margin: 0 1rem 0 0;
        padding: 0;
    `}
`;