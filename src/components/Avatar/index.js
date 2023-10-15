import React from 'react';
import * as S from './styled';
import { StaticImage } from 'gatsby-plugin-image'

const Avatar = () => {
    return (
        <S.AvatarWrapper>
            <StaticImage src="../../images/profile.jpeg" alt="Profile image" />
        </S.AvatarWrapper>
    ) 
};

export default Avatar;