import React from 'react';
import PostItem from '../PostItem';
import ProjectItem from "../ProjectItem"

const Hit = ({ hit }) => {
    console.log(hit);
    return (
        <PostItem
            slug={hit.fields.slug}
            title={hit.title}
            date={hit.date}
            description={hit.description}
            category={hit.category}
            thumbnailImage={hit.thumbnailImage.relativePath}
        />
    )
}

export default Hit;