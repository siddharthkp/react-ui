import merge from 'deepmerge'
import { forwardRef } from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import interpolate from './interpolate'
import { useId } from '@reach/auto-id'

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
    component,
    theme,
    ...props
  },
  ref
) {
  const instanceId = useId()

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
    css || {},
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
  props['data-component'] = label

  if (theme.designer) {
    // move to local
    label = label + '_' + instanceId

    if (!theme.designer.stylesCache[label]) {
      theme.designer.setStylesCache(label, merged)
    }
    inlineStyles = merge(inlineStyles, theme.designer.getChanges(label) || {})
    if (theme.designer.selectedElement === label) {
      inlineStyles = merge(inlineStyles, {
        // boxShadow: '#41a0ff 0 0 0px 2px'
      })
    }

    const originalOnClick = props.onClick
    props.onClick = event => {
      if (event && event.stopPropagation) event.stopPropagation()
      if (originalOnClick) originalOnClick(event)
      theme.designer.setSelectedElement(label)
    }
    const originalOnMouseOver = props.onMouseOver
    props.onMouseOver = event => {
      if (event && event.stopPropagation) event.stopPropagation()
      if (originalOnMouseOver) originalOnMouseOver(event)
      event.target.style.originalBoxShadow = event.target.style.boxShadow
      event.target.style.originalBackground =
        event.target.style.backgroundColor || 'transparent'
      event.target.style.originalCursor = event.target.style.cursor

      event.target.style.boxShadow = 'rgba(65, 160, 255, 0.6) 0 0 0px 2px'
      event.target.style.background = 'rgba(65, 160, 255, 0.4)'
      event.target.style.cursor = 'pointer'
    }
    const originalOnMouseOut = props.onMouseOut
    props.onMouseOut = event => {
      if (event && event.stopPropagation) event.stopPropagation()
      if (originalOnMouseOut) originalOnMouseOut(event)
      // if (theme.designer.selectedElement !== label) {
      event.target.style.boxShadow = event.target.style.originalBoxShadow
      event.target.style.background = event.target.style.originalBackground
      event.target.style.cursor = event.target.style.originalCursor
      // }
    }
  }

  // after designer
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

function mergeAll(a, b, c, d) {
  return merge(merge(merge(a, b), c), d)
}

function walk(obj, callback) {
  if (typeof obj === 'object') {
    callback(obj)
    Object.values(obj).map(node => walk(node, callback))
  }
}

export default withTheme(forwardRef(Element))
