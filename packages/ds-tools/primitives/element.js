import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import interpolate from '@styled-system/css'
import { withTheme } from 'emotion-theming'
import { merge } from '@styled-system/core'

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

function Element({
  css,
  baseStyles,
  style: inlineStyles,
  component,
  theme,
  ...props
}) {
  theme.components = theme.components || {}
  const margins = {}
  Object.keys(props).forEach(prop => {
    if (marginProps.includes(prop)) margins[prop] = props[prop]
  })

  let styles
  if (typeof css === 'function') styles = css(props)
  else styles = css

  // deep merge with overriding
  const merged = mergeAll(
    baseStyles || {},
    theme.components[component] || {},
    styles || {},
    margins || {}
  )

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
  merged.label = component || props.as
  props['data-component'] = component

  // instead of React.createElement
  return jsx(rui, {
    css: interpolate(merged),
    style: interpolate(inlineStyles)(theme),
    ...props
  })
}

function mergeAll(a, b, c, d) {
  return merge(merge(merge(a, b), c), d)
}

function walk(obj, callback) {
  if (typeof obj === 'object') {
    callback(obj)
    Object.values(obj).map(node => walk(node, callback))
  }
}

export default withTheme(Element)
