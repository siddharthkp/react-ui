module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    }
  ]
}
