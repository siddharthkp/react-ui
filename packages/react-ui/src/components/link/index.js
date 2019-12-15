import React from 'react'
import { Element } from '@ds-tools/primitives'

export const Link = props => (
  <Element
    as="a"
    {...props}
    baseStyles={{
      color: props.href ? 'blues.500' : 'grays.800',
      textDecoration: 'none',
      ':hover': {
        color: props.href ? 'blues.600' : 'grays.800'
      }
    }}
  >
    {props.children}
  </Element>
)
