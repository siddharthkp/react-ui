import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function Hello() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const config = data.site
  return <h1>About {config.siteMetadata.title}</h1>
}

export default Hello
