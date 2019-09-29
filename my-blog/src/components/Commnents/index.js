import React from "react"
import ReactDisqusComments from 'react-disqus-comments';
import propTypes from 'prop-types'
//style 
import * as S from "./styled"

const Comments = ({ url, title }) => {
    const completeUrl = `https://filipemarques.dev${url}`

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="filipemarques"
                identifier={completeUrl}
                title={title}
                url={completeUrl}
            />
        </S.CommentsWrapper>

    )
}

Comments.prototype = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}

export default Comments