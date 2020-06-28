import React from 'react';
import PostItem from '../PostItem';

const Hit = ({ hit }) => {
    return (
        <PostItem
            slug={hit.fields.slug}
            title={hit.title}
            date={hit.date}
            description={hit.description}
            category={hit.category}
            thumbnailImage={hit.thumbnailImage.relativePath}
            timeToRead={hit.timeToRead}
        />
    )
}

export default Hit;