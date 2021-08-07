import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Tags from '../Tags';

import * as S from './styled';

const PostItem = ({
    slug,
    date,
    timeToRead,
    title,
    tags,
    description,
    thumbnailImage
}) => (
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
                {tags && (
                    <Tags tags={tags} isLink={false} />
                )}
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
);

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    date: PropTypes.string,
    timeToRead: PropTypes.number,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array,
    description: PropTypes.string.isRequired,
    thumbnailImage: PropTypes.string.isRequired,
}

export default PostItem;