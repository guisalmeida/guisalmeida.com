import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Tags from '../Tags'

import * as S from './styled';
import * as Base from '../../styles/base'

const ProjectItem = ({ 
    slug,
    date,
    timeToRead,
    title,
    description,
    tags,
    thumbnailImage
}) => (
    <S.ProjectItemLink to={slug}>
        <S.ProjectItemWrapper>
            <Image filename={thumbnailImage} alt={title} />

            <S.ProjectItemInfo>
                <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
                {date &&
                    <Base.PostItemDate>
                        Posted on {date} - {timeToRead} minutes of reading
                    </Base.PostItemDate>}
                <S.ProjectItemDescription>{description}</S.ProjectItemDescription>
                {tags && (
                    <Tags tags={tags} />
                )}
            </S.ProjectItemInfo>
            
        </S.ProjectItemWrapper>
    </S.ProjectItemLink>
);

ProjectItem.propTypes = {
    slug: PropTypes.string.isRequired,
    date: PropTypes.string,
    timeToRead: PropTypes.number,
    thumbnailImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array,
    description: PropTypes.string.isRequired,
}

export default ProjectItem;