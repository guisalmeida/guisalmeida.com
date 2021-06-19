import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import * as S from './styled'

const Image = ({ filename, alt }) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: { absolutePath: { regex: "/static/assets/img/" } }) {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
            }
        }
    `)

    const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
    });
    if (!image) {
        return null;
    }    
    const gatsbyImageData = image.node.childImageSharp.gatsbyImageData;
    return (
        <S.ImageWrapper>
            <Img alt={alt} image={gatsbyImageData} />
        </S.ImageWrapper>
    );
}

export default Image