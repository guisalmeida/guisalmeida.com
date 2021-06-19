import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Comments from '../components/Comments'

import * as S from '../components/Post/styled'

const Post = ({ data }) => {
    const post = data.markdownRemark;
    
    return (
        <Layout>
            <SEO 
                title={post.frontmatter.title} 
                description={post.frontmatter.description} 
                image={`https://guisalmeida.com${post.frontmatter.thumbnailImage.childImageSharp.original.src}`}
            />
            {post.frontmatter.thumbnailImage &&
                <S.PostImage image={post.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} />
            }
            <S.PostHeader>
                {post.frontmatter.category !== 'project' &&
                <S.PostDate>{post.frontmatter.date} - {post.timeToRead} min de leitura</S.PostDate>}
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
            </S.PostHeader>

            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.MainContent>
            <Comments url={post.fields.slug} title={post.frontmatter.title} />
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            frontmatter {
                category
                title
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                thumbnailImage {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                        original {
                            src
                        }
                    }
                }
            }
            html
            timeToRead
        }
    }
`

export default Post;