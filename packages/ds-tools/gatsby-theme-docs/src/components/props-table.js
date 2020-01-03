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

  let componentProps = []

  if (matchingEdge) {
    componentProps = convertArrayToObject(
      pullDescriptionOut(matchingEdge.node.props)
    )

    if (!matchingEdge.node.props.length) {
      // add warning as first row of table
    }

    return <Table id={componentName} props={componentProps} />
  }

  return null
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
            description {
              text
            }
          }
        }
      }
    }
  }
`

function pullDescriptionOut(props) {
  return props.map(prop => {
    if (prop.description && prop.description.text) {
      prop.description = prop.description.text
    }
    return prop
  })
}

function convertArrayToObject(props) {
  return keyBy(props, 'name')
}
