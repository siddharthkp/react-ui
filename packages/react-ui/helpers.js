import React from 'react'
import merge from 'deepmerge'
import get from 'lodash.get'
import { Element as BaseElement } from '@ds-tools/primitives'
import { ThemeProvider } from 'react-ui'
import theme from 'react-ui/themes/light'

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
  return React.createElement(
    ThemeProvider,
    {
      theme: theme,
      ...props
    },
    React.createElement('div', {}, props.children)
  )
}

function concat(...args) {
  return theme => {
    return args.map(token => get(theme, token) || token).join('')
  }
}

export { create, Example, merge, concat }
