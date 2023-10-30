import React from 'react'
import PropTypes from 'prop-types'
import Tags from '../Tags'

import * as S from './styled'

const PostHeader = ({
    date,
    timeToRead,
    title,
    tags,
    description
}) => (
    <S.PostHeader>
        {date &&
            <S.PostDate>{date} - {timeToRead} min de leitura</S.PostDate>
        }
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
        <Tags tags={tags} />
    </S.PostHeader>
)

PostHeader.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array,
    timeToRead: PropTypes.number
}

export default PostHeader;