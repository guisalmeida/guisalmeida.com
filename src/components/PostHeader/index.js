import React from 'react'
// import PropTypes from 'prop-types'

import * as S from './styled'

const PostHeader = ({
    thumbnailImage,
    date,
    timeToRead,
    title,
    description
}) => (
        <S.PostHeader>
            {/* {thumbnailImage && (
                <S.PostImage fluid={thumbnailImage.childImageSharp.fluid} />
            )} */}
            {date &&
            <S.PostDate>{date} - {timeToRead} min de leitura</S.PostDate>}
            <S.PostTitle>{title}</S.PostTitle>
            <S.PostDescription>{description}</S.PostDescription>
        </S.PostHeader>
)

// PostHeader.propTypes = {
//     date: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     thumbnailImage: PropTypes.object,
//     timeToRead: PropTypes.number
// }

export default PostHeader;