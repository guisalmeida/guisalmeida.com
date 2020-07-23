import styled from 'styled-components';
import Img from 'gatsby-image';
import media from 'styled-media-query';

export const AvatarWrapper = styled(Img)`
    display: block;
    height: 50vh;
    object-fit: cover;
    object-position: 50% 0;
    width: 100%;

    ${media.lessThan("medium")`
        height: 30vh;
  `}
`;


