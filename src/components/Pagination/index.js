import React from 'react'
import propTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <AniLink
                to={prevPage}
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
            >
                ← página anterior
            </AniLink>
        }

        <p>Página {currentPage} de {numPages || 1}</p>

        {(!isLast && numPages > 1) &&
            <AniLink
                to={nextPage}
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
            >
                proxima página →
            </AniLink>
        }
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
}

export default Pagination