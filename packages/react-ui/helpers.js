import React from 'react'
import merge from 'deepmerge'
import { Element as BaseElement } from '@ds-tools/primitives'
import { ThemeProvider } from 'react-ui'
import theme from 'react-ui/themes/avocado'

function create(element, Name) {
  const Component = function(props) {
    return React.createElement(BaseElement, {
      as: element,
      component: Name,
      ...props
    })
  }
  Component.displayName = Name
  return Component
}

function Example(props) {
  return <ThemeProvider theme={theme} {...props} />
}

export { create, Example, merge }
