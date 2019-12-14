import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import css from '@styled-system/css'
import { withTheme } from 'emotion-theming'
import { merge } from '@styled-system/core'

const BaseElement = styled('div')()

const marginProps = [
  'margin',
  'marginX',
  'marginY',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight'
]

function Element({ css: styles, baseStyles, component, theme, ...props }) {
  theme.components = theme.components || {}

  const margins = {}
  Object.keys(props).forEach(prop => {
    if (marginProps.includes(prop)) margins[prop] = props[prop]
  })

  // deep merge with overriding
  const merged = mergeAll(
    baseStyles || {},
    theme.components[component] || {},
    styles || {},
    margins || {}
  )

  // Better classNames for debugging
  merged.label = component
  props['data-component'] = component

  // instead of React.createElement
  return jsx(BaseElement, { css: css(merged), ...props })
}

function mergeAll(a, b, c, d) {
  return merge(merge(merge(a, b), c), d)
}

export default withTheme(Element)
