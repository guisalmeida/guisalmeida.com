import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostItem from '../PostItem';

import * as S from '../ListWrapper/styled';
import { Subtitle, BlogLink } from './styled';

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

const HomeList = () => {
  const allBlogList = useStaticQuery(blogListQuery)
  const list = allBlogList.allMarkdownRemark.edges;

  return (
    <>
      <Subtitle>
        <h3>Last posts</h3>
        <BlogLink to="/blog/">
          See all posts
        </BlogLink>
      </Subtitle>

      <S.ListWrapper>
        {list.map(({
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
        ) => (
            <PostItem
              key={index}
              slug={slug}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              tags={tags}
              description={description}
              thumbnailImage={relativePath}
            />
          )
        )}
      </S.ListWrapper>
    </>
  )
}


export default HomeList;