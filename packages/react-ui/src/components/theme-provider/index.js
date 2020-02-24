import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@ds-tools/primitives'
import { merge } from '../../../utils'

// import light from '../../../themes/light'
// import dark from '../../../themes/dark'
import * as base from '../../../themes/base'

const Provider = EmotionThemeProvider

function ThemeProvider({
  theme: propTheme = base.theme,
  components = base.components,
  ...props
}) {
  let theme = { ...propTheme }

  theme = convertArraysToObject(theme)

  theme.components = theme.components || {}
  theme.components = merge(theme.components, components)

  theme.sizes = merge(theme.sizes, getSizesFromComponents(theme.components))

  const variants = merge(theme.variants || {}, components.variants || {})

  const generatedTheme = merge(merge(theme, variants), theme.components)

  // add units if missing
  complainAboutUnits(generatedTheme)

  return (
    <Provider theme={generatedTheme} {...props}>
      {props.children}
    </Provider>
  )
}

export const hasUnits = value => {
  if (typeof value !== 'string') return false
  else if (value.includes('%')) return true
  else if (value.match(/[a-z]/i)) return true
}

const complainAboutUnits = theme => {
  const unitScales = ['space', 'sizes', 'fontSizes', 'borderWidths', 'radii']
  const complainAbout = []

  unitScales.map(name => {
    const scale = theme[name]
    const firstValue = scale && scale[1] // not zeroth

    if (firstValue && !hasUnits(firstValue)) complainAbout.push(name)
  })
  if (complainAbout.length) {
    const joined = complainAbout.join(', ')
    let warning = `Scale values should have units. Found values without units in ${joined}.`
    warning += `\n\n`
    warning += `Example: Instead of 4, use 4px or 0.25rem`
    console.warn(warning)
  }
}

const convertArraysToObject = (theme = {}) => {
  const keys = Object.keys(theme)

  keys.map(key => {
    if (Array.isArray(theme[key])) {
      const obj = {}

      theme[key].forEach((item, index) => {
        obj[index] = item
      })

      theme[key] = obj
    }
  })

  return theme
}

const getSizesFromComponents = (components = {}) => {
  const names = Object.keys(components)
  const sizes = {}

  names.forEach(name => {
    const themeStyles = components[name]
    if (themeStyles.sizes) sizes[name] = themeStyles.sizes
  })

  return sizes
}

export { ThemeProvider }
