import React from 'react'
import * as SC from '@ds-tools/primitives'
import light from '../../../themes/light'
import { merge } from '../../../utils'

const Provider = SC.ThemeProvider

function ThemeProvider({ theme = light, components = {}, ...props }) {
  // good defaults
  theme.sizes = merge(convertArrayToObject(theme.space), theme.sizes)

  theme.components = theme.components || {}
  theme.components = merge(theme.components, components)

  const variants = theme.variants || {}

  const generatedTheme = merge(theme, variants)

  return React.createElement(Provider, { theme: generatedTheme, ...props })
}

const convertArrayToObject = array => {
  const obj = {}

  array.map((item, index) => {
    obj[index] = item
  })

  return obj
}

export { ThemeProvider }
