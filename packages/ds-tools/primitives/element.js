import merge from 'deepmerge'
import { forwardRef } from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import interpolate from './interpolate'

/** Base element (name is prefixed to the component) */
const rui = styled('div')()

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
    css: cssProp,
    baseStyles: baseProp,
    style: inlineStyles,
    variant = 'default',
    component,
    theme,
    ...props
  },
  ref
) {
  theme.components = theme.components || {}
  const margins = {}
  Object.keys(props).forEach(prop => {
    if (marginProps.includes(prop)) margins[prop] = props[prop]
  })

  let css
  if (typeof cssProp === 'function') css = cssProp(props)
  else css = cssProp

  let baseStyles
  if (typeof baseProp === 'function') baseStyles = baseProp(props)
  else baseStyles = baseProp

  let label
  if (component) label = component
  else if (typeof props.as === 'string') label = props.as
  else if (props.as && typeof props.as.displayName === 'string') {
    label = props.as.displayName
  } else {
    // give up
    label = 'Element'
  }

  // deep merge with overriding
  let merged = mergeAll(
    baseStyles || {},
    theme.components[component] || {},
    theme[component] || {},
    css || {},
    margins || {}
  )

  // if (props.ya) console.log(merged)

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

  // if variant prop is given, attach the prop to baseStyles
  if (variant) merged.variant = component + '.variants.' + variant

  // Better classNames for debugging
  props['data-component'] = label
  merged.label = label

  // instead of React.createElement
  return jsx(rui, {
    // interpolate twice to alllow tokens inside theme,
    // there is an obvious cost to this which needs to be benchmarked
    // alternate solution is to flatten this in themeprovider

    css: interpolate(merged)(theme),
    style: interpolate(inlineStyles)(theme),
    ref,
    ...props
  })
}

function mergeAll(a, b, c, d, e) {
  return merge(merge(merge(merge(a, b), c), d), e)
}

function walk(obj, callback) {
  if (typeof obj === 'object') {
    callback(obj)
    Object.values(obj).map(node => walk(node, callback))
  }
}

export default withTheme(forwardRef(Element))
