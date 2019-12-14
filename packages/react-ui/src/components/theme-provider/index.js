import React from 'react'
import * as SC from '@ds-tools/primitives'
import light from '../../../themes/light'

const Provider = SC.ThemeProvider

function ThemeProvider({ theme = light, components = {}, ...props }) {
  // initialise
  theme.components = theme.components || {}
  // should be deepmerged?
  theme.components = { ...theme.components, ...components }

  return React.createElement(Provider, { theme, ...props })
}

export { ThemeProvider }
