import React from 'react';
import propTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styled';

const Comments = ({ url, title }) => {
    const completeUrl = `https://guisalmeida.com/${url}`

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="guisalmeida"
                identifier={completeUrl}
                title={title}
                url={completeUrl}
            />
        </S.CommentsWrapper>
    )
};

Comments.propTypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
}

export default Comments;