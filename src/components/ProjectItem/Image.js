import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Image = ({ filename, alt }) => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile(filter: { absolutePath: { regex: "/static/assets/img/" } }) {
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
        `}

        render = { data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(filename)
            })
            if (!image) {
                return null
            }

            const imageSizes = image.node.childImageSharp.sizes

            return <S.ImageWrapper alt={alt} sizes={imageSizes} />
        }}
    />
)

export default Image