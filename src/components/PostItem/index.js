import React from 'react';
import propTypes from 'prop-types';
import Image from '../Image/Image';

import * as S from './styled';

const PostItem = ({ slug, date, timeToRead, title, description, thumbnailImage }) => (
    <S.PostItemLink to={slug}>
        <S.PostItemWrapper>
            {thumbnailImage &&
                <Image filename={thumbnailImage} alt={title} />
            }

            <S.PostItemInfo>
            {date &&
                <S.PostItemDate>{date} - {timeToRead} min de leitura</S.PostItemDate>}
                <S.PostItemTitle>{title}</S.PostItemTitle>
                <S.PostItemDescription>{description}</S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
);

PostItem.propTypes = {
    slug: propTypes.string.isRequired,
    date: propTypes.string,
    timeToRead: propTypes.number,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    thumbnailImage: propTypes.string.isRequired,
}

export default PostItem;