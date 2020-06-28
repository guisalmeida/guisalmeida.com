import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Image = ({ filename, alt }) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: { absolutePath: { regex: "/content/assets/" } }) {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            sizes(maxWidth: 240) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
        }
    `)

    const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
    });
    if (!image) return null;
    const imageSizes = image.node.childImageSharp.sizes;

    return (
        <S.ImageWrapper alt={alt} sizes={imageSizes} />
    );
}

export default Image