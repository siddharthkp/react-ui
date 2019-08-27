import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import PropsTable from '../components/props-table'
import './style.css'

export default ({ data }) => {
  const post = data.mdx

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <MDXProvider components={{ PropsTable }}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
