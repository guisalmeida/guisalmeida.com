import React from 'react'
import propTypes from 'prop-types'
import { Link } from "gatsby";

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPage}>
                ← página anterior
            </Link>
        }

        <p>Página {currentPage} de {numPages || 1}</p>

        {(!isLast && numPages > 1) &&
            <Link to={nextPage}>
                proxima página →
            </Link>
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