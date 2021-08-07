import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Tags from '../Tags'

import * as S from './styled';

const ProjectItem = ({ 
    slug,
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
                <S.ProjectItemDescription>{description}</S.ProjectItemDescription>
                {tags && (
                    <Tags tags={tags} isLink={false} />
                )}
            </S.ProjectItemInfo>
            
        </S.ProjectItemWrapper>
    </S.ProjectItemLink>
);

ProjectItem.propTypes = {
    slug: PropTypes.string.isRequired,
    thumbnailImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array,
    description: PropTypes.string.isRequired,
}

export default ProjectItem;