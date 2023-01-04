import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Comments from '../components/Comments'
import Tags from '../components/Tags'

import * as Base from '../styles/base';
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
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostDate>
                    Posted on {post.frontmatter.date} - {post.timeToRead} minutes of reading
                </S.PostDate>
                <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
                <Tags tags={post.frontmatter.tags} isLink={false} />
            </S.PostHeader>

            <Base.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </Base.MainContent>
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
                tags
                date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
                thumbnailImage {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, quality: 100)
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