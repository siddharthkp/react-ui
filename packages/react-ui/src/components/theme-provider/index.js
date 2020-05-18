import React from 'react'
import {
  Element,
  ThemeProvider as EmotionThemeProvider,
  Global,
  interpolate
} from '../../primitives'
import { merge } from '../../utils'

// import * as light from '../../../themes/light'
// import dark from '../../../themes/dark'
import base from '../../themes/base'

const Provider = EmotionThemeProvider

function ThemeProvider({
  tokens = base.tokens,
  components = base.components,
  theme = {}, // as a combined fallback, not recommended but you know
  scoped, // If styles should be scoped rather than global
  ...props
}) {
  // system-ui allows you to define scales as arrays,
  // which is really ergonomic, we convert that to objects
  // for the sake of ease of manipulation
  tokens = convertArraysToObject(tokens)

  complainAboutUnits(tokens)

  tokens.sizes = merge(tokens.sizes, getSizesFromComponents(components))
  tokens.colors = merge(tokens.colors, getColorsFromComponents(components))

  components.Global = merge(
    {
      ':root': {
        '--reach-menu-button': 1,
        '--reach-dialog': 1,
        '--reach-tabs': 1,
        '--reach-tooltip': 1
      }
    },
    components.Global
  )

  // Extract the styles that need that to be scoped to the
  // local ThemeProvider
  const { body, ':root': rootStyles, ...scopedStyles } = components.Global

  const combinedTheme = merge(tokens, { components })
  if (scoped) {
    let warning =
      "This ThemeProvider uses scoped styles. 'body' and ':root' styles from your Global component tokens won't be passed to this."
    warning += `\n\n`
    warning +=
      'To attach scoped styles to this ThemeProvider, use the root of the Global components token'
    console.warn(warning)
  }

  // pass a hint to element
  combinedTheme.defined = true

  /**
   *  Apply global styles only if it's the first ThemeProvider.
   *  Subsequnt ThemeProviders should have scoped: true and will
   *  get rest of the styled scoped to the root
   */

  return (
    <Provider theme={combinedTheme} {...props}>
      {!scoped ? (
        <>
          <Global styles={interpolate(components.Global, combinedTheme)} />
          {props.children}
        </>
      ) : (
        <Element as="div" css={scopedStyles}>
          {props.children}
        </Element>
      )}
    </Provider>
  )
}

export const hasUnits = value => {
  if (typeof value !== 'string') return false
  else if (value.includes('%')) return true
  else if (value.match(/[a-z]/i)) return true
}

const complainAboutUnits = tokens => {
  const unitScales = ['space', 'sizes', 'fontSizes', 'borderWidths', 'radii']
  const complainAbout = []

  unitScales.map(name => {
    const scale = tokens[name]
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

const convertArraysToObject = (tokens = {}) => {
  const keys = Object.keys(tokens)

  keys.map(key => {
    if (Array.isArray(tokens[key])) {
      const obj = {}

      tokens[key].forEach((item, index) => {
        obj[index] = item
      })

      tokens[key] = obj
    }
  })

  return tokens
}

const getSizesFromComponents = (components = {}) => {
  const names = Object.keys(components)
  const sizes = {}

  names.forEach(name => {
    const componentStyles = components[name]
    if (componentStyles.sizes) sizes[name] = componentStyles.sizes
    if (componentStyles.size) sizes[name] = componentStyles.size
  })

  return sizes
}

const getColorsFromComponents = (components = {}) => {
  const names = Object.keys(components)
  const colors = {}

  names.forEach(name => {
    const componentStyles = components[name]
    if (componentStyles.colors) {
      colors[name] = componentStyles.colors
    }
  })

  return colors
}

export { ThemeProvider }
