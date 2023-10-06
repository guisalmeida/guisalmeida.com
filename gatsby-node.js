const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

//to add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === "MarkdownRemark") {
        // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
        const slug = createFilePath({
            node,
            getNode,
            basePath: "pages",
        })

        // Creates new query'able field with name of 'slug'
        createNodeField({
            node,
            name: "slug",
            value: `/${slug.slice(12)}`,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          category
          date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
          description
          tags
        }
        timeToRead
      }
      next {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
      previous {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}`).then(result => {
        if (result.errors) throw result.errors

        // Create blog posts pages
        const posts = result.data.allMarkdownRemark.edges.filter(obj => obj.node.frontmatter.category !== 'project');
        
        posts.forEach(({ node, next, previous }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: node.fields.slug,
                    previousPost: next,
                    nextPost: previous
                }
            })
        });

        // Create blog post list pages
        const postsPerPage = 6;
        const postsNumPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: postsNumPages }).forEach((_, index) => {
            createPage({
                path: index === 0 ? '/blog/' : `/blog/page/${index + 1}`,
                component: path.resolve(`./src/templates/list.js`),
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    postsNumPages,
                    currentPage: index + 1
                }
            })
        })

        // Create project page
        const projects = result.data.allMarkdownRemark.edges.filter(obj => obj.node.frontmatter.category === 'project');

        projects.forEach(({ node, next, previous }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: node.fields.slug,
                    previousPost: next,
                    nextPost: previous
                }
            })
        });
    });
};