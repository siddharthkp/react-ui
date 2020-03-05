import React from 'react'
import { Element } from 'react-ui'

export const List = props => {
  return (
    <Element
      as="ul"
      css={{
        paddingLeft: props.as === 'ol' ? 5 : 0,
        listStyle: props.as === 'ol' ? 'decimal' : 'none',
        li: { paddingY: 2 }
      }}
      {...props}
    >
      {props.children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </Element>
  )
}
