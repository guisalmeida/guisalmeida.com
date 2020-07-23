import React from 'react';

import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

const Profile = ({ title, position, description, isMobileHeader }) => {

    return (
        <S.ProfileContainer isMobileHeader={isMobileHeader}>
            <S.ProfileLink
                to="/"
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
            >
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