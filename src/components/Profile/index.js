import React from 'react';

import * as S from './styled';

const Profile = ({ title, position, description, isMobileHeader }) => {

    return (
        <S.ProfileContainer $isMobileHeader={isMobileHeader}>
            <S.ProfileLink to="/">
                <S.ProfileTitle>
                    {title}
                </S.ProfileTitle>
            </S.ProfileLink>

            <S.ProfilePosition>{position}</S.ProfilePosition>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileContainer>
    )
};

export default Profile;