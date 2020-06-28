import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from '../components/ListWrapper/styled'
import { MainContent } from '../styles/base';

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges;

    const { currentPage, numPages } = props.pageContext;
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
            <SEO title="Blog" />

            <MainContent>
                <h1>Blog</h1>
            </MainContent>

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
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
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
                        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                        description
                        title
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