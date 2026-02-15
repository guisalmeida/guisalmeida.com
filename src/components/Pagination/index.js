import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby";

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPage}>
                ← previous
            </Link>
        }

        <p>Page {currentPage} of {numPages || 1}</p>

        {(!isLast && numPages > 1) &&
            <Link to={nextPage}>
                next →
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