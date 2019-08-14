const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              home
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log('---error---')
    console.log(result.errors)
    console.log('-----------')
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/page.js`),
      context: { slug: node.fields.slug }
    })
  })

  /** default pages */

  /** configure the home page */
  const homePages = result.data.allMdx.edges.filter(({ node }) => {
    return node.frontmatter.home
  })

  let homePage
  if (homePages.length === 1) {
    homePage = homePages[0]
  } else {
    homePage = homePages.find(page => page.node.fields.slug !== '/setup-guide/')
  }

  createPage({
    path: '/',
    component: require.resolve(`./src/templates/page.js`),
    context: { slug: homePage.node.fields.slug }
  })

  createPage({
    path: '/404',
    component: require.resolve(`./src/pages/404`)
  })
  createPage({
    path: '/my-files',
    component: require.resolve(`./src/pages/my-files`)
  })
}
