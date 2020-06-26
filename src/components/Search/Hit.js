import React from 'react';
import PostItem from '../PostItem';
// import ProjectItem from "../ProjectItem"

const Hit = ({ hit }) => (
    <PostItem
        slug={hit.fields.slug}
        background={hit.background}
        title={hit.title}
        date={hit.date}
        description={hit.description}
        category={hit.category}
    />
)


export default Hit;