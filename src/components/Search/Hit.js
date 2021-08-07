import React from 'react';
import PostItem from '../PostItem';
import ProjectItem from '../ProjectItem';
import PropTypes from 'prop-types'

const Hit = ({ hit }) => {
    if (hit.category === 'project') {
        return (
            <ProjectItem
                slug={hit.fields.slug}
                title={hit.title}
                tags={hit.tags}
                description={hit.description}
                thumbnailImage={hit.thumbnailImage.relativePath}
            />
        )
    } else {
        return (
            <PostItem
                slug={hit.fields.slug}
                title={hit.title}
                date={hit.date}
                tags={hit.tags}
                description={hit.description}
                category={hit.category}
                thumbnailImage={hit.thumbnailImage.relativePath}
                timeToRead={hit.timeToRead}
            />
        )
    }
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired
}

export default Hit;