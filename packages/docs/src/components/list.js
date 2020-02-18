import React from 'react'
import { Element } from 'react-ui'

export const List = props => {
  return (
    <Element
      as="ul"
      css={{
        paddingLeft: 0,
        listStyle: 'none',
        li: { paddingY: 2 }
      }}
    >
      {props.children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </Element>
  )
}
