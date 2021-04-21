require('dotenv').config();
const queries = require('./src/utils/algolia_queries');

module.exports = {
  siteMetadata: {
    title: `Guilherme Almeida`,
    position: `Desenvolvedor Full Stack JR`,
    description: `Site e blog pessoal com projetos de portfólio e artigos sobre tecnologia.`,
    author: `@guisalmeida`,
    siteUrl: `https://guisalmeida.com`
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // need to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          "gatsby-remark-lazy-load",
          "gatsby-remark-prismjs"
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true, // default: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guilherme Almeida`,
        short_name: `Gui Almeida`,
        start_url: `/`,
        background_color: `#f0f0f3`,
        theme_color: `#f0f0f3`,
        display: `minimal-ui`,
        icon: `src/images/gui-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Chakra Petch\:300,300i,400,400i,700,700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
