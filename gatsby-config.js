module.exports = {
  siteMetadata: require("./metadata"),
  plugins: [
    "gatsby-plugin-postcss",
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-manifest',
      options: require("./manifest")
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/docs/",
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
        'data-theme': 'dark'
      }
    },
  ]
};