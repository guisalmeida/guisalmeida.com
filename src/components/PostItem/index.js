import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Tags from '../Tags';

import * as S from './styled';
import * as Base from '../../styles/base'

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
                <S.PostItemTitle>{title}</S.PostItemTitle>
                {date &&
                    <Base.PostItemDate>
                        {date} - {timeToRead} minutes of reading
                    </Base.PostItemDate>}
                <S.PostItemDescription>{description}</S.PostItemDescription>
                {tags && (
                    <Tags tags={tags} />
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