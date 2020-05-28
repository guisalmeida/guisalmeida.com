import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import getThemeColor from '../../utils/getThemeColor';

import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () => {
    const {
        site: {
            siteMetadata: {
                title,
                position,
                description
            }
        }
    } = useStaticQuery(graphql`
            query MySiteMetadata {
                site {
                    siteMetadata {
                        description
                        position
                        title
                    }
                }
            }
    `);

    return (
        <S.ProfileWrapper>
            <S.ProfileLink
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                to="/"
            >
                <Avatar />
                <S.ProfileTitle>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileTitle>
            </S.ProfileLink>

            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
};

export default Profile;