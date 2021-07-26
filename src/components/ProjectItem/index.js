import React from 'react';
import propTypes from 'prop-types';
import Image from '../Image/Image';

import * as S from './styled';

const ProjectItem = ({ slug, title, description, thumbnailImage }) => (
    <S.ProjectItemLink to={slug}>
        <S.ProjectItemWrapper>
            <Image filename={thumbnailImage} alt={title} />

            <S.ProjectItemInfo>
                <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
                <S.ProjectItemDescription>{description}</S.ProjectItemDescription>
            </S.ProjectItemInfo>
            
        </S.ProjectItemWrapper>
    </S.ProjectItemLink>
);

ProjectItem.propTypes = {
    slug: propTypes.string.isRequired,
    thumbnailImage: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}

export default ProjectItem;