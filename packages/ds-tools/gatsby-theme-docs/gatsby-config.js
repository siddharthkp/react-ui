module.exports = {
  siteMetadata: {
    title: `Documentation`
  },
  plugins: [
    'gatsby-theme-sidebar',
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `./`,
        extensions: [`.mdx`, `.md`],
        ignore: [
          `**/public/**/*`,
          `**/.cache/**/*`,
          `**/\.*`, // ignore files starting with a .
          `**/\_*` // ignore files starting with a _
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers'
        ]
      }
    }
  ]
}
