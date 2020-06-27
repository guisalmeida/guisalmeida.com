import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PostItem from '../PostItem'
import getThemeColor from '../../utils/getThemeColor';

import * as S from '../ListWrapper/styled'
import { Subtitle, BlogLink } from './styled'

const blogListQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2,
      sort: {fields: frontmatter___date, order: DESC},
      filter: {frontmatter: {category: {eq: "blog"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
  
`

const HomeList = () => {
  const allBlogList = useStaticQuery(blogListQuery)
  const list = allBlogList.allMarkdownRemark.edges;

  return (
    <>
      <Subtitle>
        <h3>Últimas do blog</h3>
        <BlogLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to="/blog/"
        >
          Ver todos os posts
        </BlogLink>
      </Subtitle>

      <S.ListWrapper>
        {list.map(({
          node: {
            fields: {
              slug
            },
            frontmatter: {
              background,
              category,
              date,
              description,
              title
            },
            timeToRead
          }
        }, index
        ) => (
            <PostItem
              key={index}
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
    </>
  )
}


export default HomeList;