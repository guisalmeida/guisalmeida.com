import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from '../components/ListWrapper/styled'
import * as Base from '../styles/base';

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges;
    const { currentPage, postsNumPages } = props.pageContext;
    const isFirst = currentPage === 1
    const isLast = currentPage === postsNumPages
    const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    return (
        <Layout>
            <SEO title="Blog" />

            <Base.MainContent>
                <h1>Blog</h1>
            </Base.MainContent>

            <S.ListWrapper>
                {postList.map(({
                    node: {
                        fields: {
                            slug
                        },
                        frontmatter: {
                            category,
                            date,
                            description,
                            title,
                            tags,
                            thumbnailImage: {
                                relativePath
                            }
                        },
                        timeToRead
                    }
                }, index
                ) => {
                    if (category !== "project") {
                        return (
                            <PostItem
                                key={index}
                                slug={slug}
                                date={date}
                                timeToRead={timeToRead}
                                title={title}
                                tags={tags}
                                description={description}
                                thumbnailImage={relativePath}
                            />
                        )
                    }
                    return null
                })}
            </S.ListWrapper>

            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={postsNumPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {category: {eq: "blog"}}}
            sort: {fields: frontmatter___date, order: DESC}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        category
                        date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
                        description
                        title
                        tags
                        thumbnailImage {
                            relativePath
                        }
                    }
                    timeToRead
                }
            }
        }
    }
`

export default BlogList;