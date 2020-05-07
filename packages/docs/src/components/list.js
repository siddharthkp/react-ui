import React from 'react'
import { Element, merge } from 'react-ui'

export const List = ({ css, ...props }) => {
  return (
    <Element
      as="ul"
      component="List"
      css={merge(
        {
          paddingLeft: props.as === 'ol' ? 5 : 0,
          listStyle: props.as === 'ol' ? 'decimal' : 'none',
          li: { paddingY: 2 }
        },
        css
      )}
      {...props}
    >
      {React.Children.map(props.children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </Element>
  )
}
