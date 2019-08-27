import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Table from 'react-docgen-props-table'
import keyBy from 'lodash.keyby'

function PropsTable(props) {
  const componentName = props.htmlFor

  const { allComponentMetadata } = useStaticQuery(query)

  const matchingEdge = allComponentMetadata.edges.find(edge => {
    return edge.node.displayName === componentName
  })

  if (matchingEdge) {
    const componentProps = convertArrayToObject(matchingEdge.node.props)

    return <Table props={componentProps} />
  } else {
    return <div>props not found!</div>
  }
}

export default PropsTable

const query = graphql`
  query HeadingQuery {
    allComponentMetadata {
      edges {
        node {
          displayName
          description {
            text
          }
          props {
            name
            type {
              name
              value
              raw
            }
            required
          }
        }
      }
    }
  }
`

function convertArrayToObject(props) {
  return keyBy(props, 'name')
}
