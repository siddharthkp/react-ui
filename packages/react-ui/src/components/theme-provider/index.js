import React from 'react'
import * as SC from '@ds-tools/primitives'
import light from '../../../themes/light'

const Provider = SC.ThemeProvider

function ThemeProvider(props) {
  return React.createElement(Provider, { theme: light, ...props })
}

export { ThemeProvider }
