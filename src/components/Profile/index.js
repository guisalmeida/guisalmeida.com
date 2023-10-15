import React from 'react';
import Avatar from '../Avatar';

import * as S from './styled';

const Profile = ({ title, position, description, isMobileHeader }) => {

    return (
        <S.ProfileContainer $isMobileHeader={isMobileHeader}>
            <S.ProfileLink to="/">
                <Avatar />
                <S.ProfileTitle>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileTitle>
            </S.ProfileLink>

            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileContainer>
    )
};

export default Profile;