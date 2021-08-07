import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as S from './styled'

const Tags = ({ tags=[], isLink }) => {
  return (
    <S.Tags>
      {tags.map((tag, i) => (
        <S.TagHolder key={i} color={tag}>
          {isLink ? (
            <Link to={"/search/"}>
              <S.TagItem>{tag}</S.TagItem>
            </Link>
          ) : (<S.TagItem>{tag}</S.TagItem>)
          }
        </S.TagHolder>
      ))}
    </S.Tags>
  )
}

Tags.propTypes = {
  tags: PropTypes.node.isRequired,
  isLink: PropTypes.bool
}

export default Tags