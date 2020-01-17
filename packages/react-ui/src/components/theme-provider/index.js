import React from 'react'
import {
  ThemeProvider as EmotionThemeProvider,
  useDesigner
} from '@ds-tools/primitives'
import light from '../../../themes/light'
import { merge } from '../../../utils'
import { Designer } from './designer'

const Provider = EmotionThemeProvider

function ThemeProvider({
  theme = light,
  components = {},
  designMode,
  ...props
}) {
  // good defaults
  theme.sizes = merge(convertArrayToObject(theme.space), theme.sizes)

  theme.components = theme.components || {}
  theme.components = merge(theme.components, components)

  const variants = theme.variants || {}

  // designer
  theme.designer = useDesigner(designMode)

  const generatedTheme = merge(theme, variants)

  return (
    <Provider theme={generatedTheme} {...props}>
      {designMode ? <Designer theme={theme} /> : null}
      {props.children}
    </Provider>
  )
}

const convertArrayToObject = array => {
  const obj = {}

  array.map((item, index) => {
    obj[index] = item
  })

  return obj
}

export { ThemeProvider }
