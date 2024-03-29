const postsQuery = `{
  posts: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          date_timestamp: date
          date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
          description
          title
          tags
          thumbnailImage {
            relativePath
          }
        }
        excerpt(pruneLength: 5000)
        timeToRead
      }
    }
  }
}`

const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
        ...frontmatter,
        date_timestamp: parseInt(
            (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
        ),
        ...rest
    }))

const queries = [
    {
        query: postsQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        settings: {
            attributesToSnippet: ['excerpt:20']
        }
    },
];

module.exports = queries;