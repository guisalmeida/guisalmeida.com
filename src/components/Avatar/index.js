import React from 'react';
import * as S from './styled';
import { StaticImage } from 'gatsby-plugin-image'

const Avatar = () => {
    return (
        <S.AvatarWrapper>
            <StaticImage src="../../images/salt-graphic-design-mh2.jpg" alt="desktop image" />
        </S.AvatarWrapper>
    ) 
};

export default Avatar;