import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import css from '@styled-system/css'
import { withTheme } from 'emotion-theming'
import { merge } from '@styled-system/core'

const BaseElement = styled('div')()

/** @jsx jsx */
function Element({ css: styles, internalStyles, component, theme, ...props }) {
  theme.components = theme.components || {}

  const merged = merge(
    merge(
      internalStyles || {}, // internal styles
      theme.components[component] || {} // theme styles
    ),
    styles || {} // prop styles
  )

  // Better classNames for debugging
  merged.label = component

  return <BaseElement css={css(merged)} {...props} />
}

export default withTheme(Element)
