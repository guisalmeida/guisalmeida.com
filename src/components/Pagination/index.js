import React from 'react'
import PropTypes from 'prop-types'
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
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
}

export default Pagination