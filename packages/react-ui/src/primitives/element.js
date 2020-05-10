import merge from 'deepmerge'
import { forwardRef } from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import interpolate from './interpolate'

const clone = obj => merge(obj, {})

/** Base element (name is prefixed to the component) */
const rui = styled('div')({
  boxSizing: 'border-box'
})

const marginProps = [
  'margin',
  'marginX',
  'marginY',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight'
]

function Element(
  {
    css: cssProp = {},
    style: inlineStyles = {},
    variant = 'default',
    size = 'medium',
    component,
    theme,
    ...props
  },
  ref
) {
  // warn if theme provider is not used
  if (!theme.defined) {
    let warning = `Missing ThemeProvider. Please wrap your application in a ThemeProvider from react-ui`
    warning += `\n\n`
    warning += `Refer to the documentation at: /components/ThemeProvider`
    console.warn(warning)
  }

  let css
  if (typeof cssProp === 'function') css = cssProp(props)
  else css = clone(cssProp)

  let themeStyles = {}
  if (theme.components) themeStyles = clone(theme.components[component])
  if (typeof themeStyles === 'function') themeStyles = themeStyles(props)

  // if variant prop is given, attach the prop to css
  if (
    variant &&
    themeStyles &&
    themeStyles.variants &&
    themeStyles.variants[variant]
  ) {
    css.variant = component + '.variants.' + variant
  }

  if (size && theme.sizes && theme.sizes[component]) {
    const width = css.width || css.size
    const height = css.height || css.size

    let value
    if (typeof theme.sizes[component] !== 'object') {
      // single value, attach to component
      value = theme.sizes[component]
    } else {
      // if its multiple values, attach the corresponding key
      value = theme.sizes[component][size]
    }

    // if the component already has a height / width property,
    // respect that and attach to the other property only
    if (!width && !height) css.size = value
    else {
      if (!width) css.width = value
      if (!height) css.height = value
    }
  }

  let label
  if (component) label = component
  else if (typeof props.as === 'string') label = props.as
  else if (props.as && typeof props.as.displayName === 'string') {
    label = props.as.displayName
  } else {
    // give up
    label = 'Element'
  }

  // reset: by default components should have no margin
  const margins = { margin: 0 }
  // because of the above reset, we have to manually handle overrides
  marginProps.map(m => {
    if (props[m]) margins[m] = props[m]
    if (themeStyles[m]) margins[m] = themeStyles[m]
    if (css[m]) margins[m] = css[m]
    delete props[m]
    delete themeStyles[m]
    delete css[m]
  })

  // deep merge with overriding
  let merged = mergeAll(themeStyles, css, margins)

  /** Allow nested component keys */
  walk(merged, node => {
    const keys = Object.keys(node)
    // capitalized = component name
    const capitalisedKeys = keys.filter(key => /^[A-Z]/.test(key))
    capitalisedKeys.forEach(key => {
      const transformedKey = `[data-component=${key}]`
      node[transformedKey] = node[key]
      delete node[key]
    })
  })

  // Better classNames for debugging
  props['data-component'] = label
  merged.label = label

  // instead of React.createElement
  return jsx(rui, {
    css: interpolate(merged)(theme),
    style: interpolate(inlineStyles)(theme),
    ref,
    ...props
  })
}

function mergeAll(a = {}, b = {}, c = {}) {
  return merge(merge(a, b), c)
}

function walk(obj, callback) {
  if (obj && typeof obj === 'object') {
    callback(obj)
    Object.values(obj).map(node => walk(node, callback))
  }
}

export default withTheme(forwardRef(Element))
