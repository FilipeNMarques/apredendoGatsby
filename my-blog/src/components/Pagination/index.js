import React from "react"
import propTypes from "prop-types"
//Gatsby
import { Link } from "gatsby"

//Style
import * as S from "./styled"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPages, nextPages }) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPages}>← página anterior</Link>
        }
        <p>{currentPage} de {numPages}</p>

        {!isLast &&
            <Link to={nextPages}>proxima página →</Link>
        }
    </S.PaginationWrapper>
)

Pagination.prototype = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPages: propTypes.string,
    nextPages: propTypes.string

}

export default Pagination

