import delve from 'dlv'
import merge from 'deepmerge'
import facepaint from 'facepaint'

export function interpolate(styles = {}, theme) {
  let filledStyles = {}
  const label = styles.label

  for (let key in styles) {
    let value = styles[key]

    if (Array.isArray(value)) {
      // responsive styles
      const breakpoints = theme.breakpoints
      if (!breakpoints) continue

      // facepaint takes array of breakpoints not object
      const mq = facepaint(
        Object.values(breakpoints).map(
          breakpoint => `@media (min-width: ${breakpoint})`
        ),
        { overlap: true }
      )

      const values = value // renaming to keep grammar easy to understand
      const responsiveValues = values.map(v => get(key, v, theme, label))
      const responsiveStyles = mq({ [key]: responsiveValues })[0]

      filledStyles = merge(filledStyles, responsiveStyles)
    } else if (typeof value === 'object') {
      // recursively interpolate
      filledStyles[key] = interpolate(value, theme)
    } else {
      filledStyles[key] = get(key, value, theme, label)
    }

    /**
     * The order of styles is important for css in shorthands
     * so { borderColor: 'blue', border: '1px solid' }
     * will not pick up borderColor, instead it will use the
     * missing value from the shorthand
     *
     * If we break the shorthand into its values, we don't face this
     * problem
     */
    if (borderValues.includes(key) && value !== 'none') {
      const borderStyles = {}

      const [borderWidth, borderStyle, borderColor] = value.split(' ')
      if (borderWidth) borderStyles[key + 'Width'] = borderWidth
      if (borderStyle) borderStyles[key + 'Style'] = borderStyle
      if (borderColor) borderStyles[key + 'Color'] = borderColor

      filledStyles = merge(filledStyles, borderStyles)

      delete filledStyles[key]
    }

    if (key === 'variant') {
      const variantStyles = delve(theme.components, value)

      const interpolated = interpolate(variantStyles, theme)
      const isDefaultVariant = value === label + '.variants.default'

      if (isDefaultVariant) filledStyles = merge(interpolated, filledStyles)
      else filledStyles = merge(filledStyles, interpolated)

      delete filledStyles.variant
    }
  }

  // TODO: this should happen in the get function, this is
  // too late to set it.
  // expand shortcuts like paddingX, size, etc.
  filledStyles = replaceShortcuts(filledStyles)

  return filledStyles
}

function replaceShortcuts(styles) {
  for (let key in styles) {
    let value = styles[key]

    if (typeof value === 'object') {
      value = replaceShortcuts(value)
    }

    if (shortcuts[key]) {
      shortcuts[key].forEach(realKeys => (styles[realKeys] = value))
      delete styles[key]
    }
  }

  return styles
}

function interpolateFactory(styles) {
  return function(theme) {
    return interpolate(styles, theme)
  }
}

// recursively resolve tokens
export function get(key, value, theme, label) {
  let scaleName = scales[key]
  const scale = theme[scaleName]

  // if scale doesn't exist, there's nothing to do here
  if (!scale) return value
  if (typeof value === 'undefined') return

  /** a value can be one of the following
   * a) css value
   * b) a scale token
   * c) reference to another token
   * d) a function
   */

  let scaleValue

  // scale can be an array or object
  if (typeof value === 'number') scaleValue = scale[value]
  else if (typeof value === 'function') scaleValue = value(theme)
  // delve uses dot.notation to resolve deep inside an object
  else scaleValue = delve(scale, value)

  // if the value doesn't exist on the scale, it must be a) css value
  if (!scaleValue) {
    if (
      scalesWithPixelUnits.includes(scaleName) &&
      value !== 0 &&
      value !== '0' &&
      !hasUnits(value) // if it has units, we assume explicit intent
    ) {
      showPixelFallbackWarning(key, value, scaleName, scale, label)
    } else if (
      scaleName === 'colors' &&
      !['transparent', 'inherit', 'initial'].includes(value) &&
      !isHexCode(value)
    ) {
      // showColorWarning(key, value, scaleName, scale, label)
    }

    return value
  } else {
    // avoid infinite trap
    if (scaleValue === value) return value
    const nestedScaleValue = get(key, scaleValue, theme, label)

    // if this value exists, it means it was a c) reference to another token
    if (nestedScaleValue) return nestedScaleValue
    // otherwise it was a b) scale token
    else return scaleValue
  }
}

export const hasUnits = value => {
  if (typeof value !== 'string') return false
  else if (value.includes('%')) return true
  else if (value.match(/[a-z]/i)) return true
}

export const isHexCode = value => {
  if (typeof value !== 'string') return false
  else return value.startsWith('#')
}

const showPixelFallbackWarning = (key, value, scaleName, scale, label) => {
  // if a function value is given, we need to first interpolate it
  if (typeof value === 'function') return

  const fallback = value + 'px'
  const fallbacksOnScale = getFallbacksOnScale(scaleName, scale, fallback)
  const keysOnScale = getKeysOnScale(scale).join(', ')

  let warning = `${value} is not a valid token for ${key} in ${label} component, applying ${fallback} as fallback.`
  warning += ` `
  warning += `Please use one of the keys on the '${scaleName}' scale.`
  warning += `\n\n`

  if (fallbacksOnScale.length) {
    if (fallbacksOnScale.length === 1) {
      const expectedValue = fallbacksOnScale[0]
      warning += `${value}px has the index ${expectedValue} on the scale. You can set the value for ${key} to ${expectedValue} to hide this warning.`
    } else {
      const expectedValues = fallbacksOnScale.join(', ')
      warning += `${value}px is on your scale, you can set the value for ${key} to one of { ${expectedValues} } to hide this warning.`
    }
    warning += `\n\n`
  } else {
    warning += `If you are trying to use a custom value not on the scale, you can hide this message by specifying the unit, example: ${value}px or ${value}em`
    warning += `\n\n`
  }

  console.warn(warning)
}

const showColorWarning = (key, value, scaleName, scale, label) => {
  // if a function value is given, we need to first interpolate it
  if (typeof value === 'function') return

  const fallback = value
  const keysOnScale = getKeysOnScale(scale)

  let warning = `${value} is not a valid token for ${key} in ${label} component, applying "${key}: ${fallback}" as fallback.`
  warning += ` `
  warning += `Please use one of the keys on the '${scaleName}' scale.`
  warning += `\n\n`
  warning += `If you are trying to use a custom value not on the scale, you can hide this message by using the hex code for the color, example: #38C172`
  warning += `\n\n`

  // find matching fallbacks in colors to suggest

  console.warn(warning)
}

export function getKeysOnScale(scale) {
  return Object.keys(flattenScale(scale))
}

export function getFallbacksOnScale(scaleName, scale, fallback) {
  const fallbackKeys = []
  const flatScale = flattenScale(scale)

  // TODO: Interpolate flat scale and find all matching nested keys

  for (let key in flatScale) {
    if (flatScale[key] === fallback) fallbackKeys.push(key)
  }
  return fallbackKeys
}

export function flattenScale(scale, prefix) {
  let flatScale = {}
  for (let key in scale) {
    const value = scale[key]
    if (typeof value === 'object') {
      flatScale = merge(flatScale, flattenScale(value, key))
    } else {
      const flatKey = prefix ? prefix + '.' + key : key
      flatScale[flatKey] = value
    }
  }
  return flatScale
}

// copied from @styled-system/css
export const scales = {
  color: 'colors',
  backgroundColor: 'colors',
  background: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  backgroundPosition: 'space',
  backgroundPositionX: 'space',
  backgroundPositionY: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopRadius: 'radii',
  borderBottomRadius: 'radii',
  borderLeftRadius: 'radii',
  borderRightRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  transitionDuration: 'durations',
  animationDuration: 'durations',
  animationDelay: 'durations',
  // svg
  fill: 'colors',
  stroke: 'colors'
}

export const scalesWithPixelUnits = [
  'space',
  'sizes',
  'fontSizes',
  'borderWidths',
  'radii'
]

export const shortcuts = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height'],
  borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
  borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  borderLeftRadius: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  borderRightRadius: ['borderTopRightRadius', 'borderBottomRightRadius']
}

export const borderValues = [
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft'
]

// const shorthands = {
//   // more complex logic here
//   background: () => {},
//   border: () => {}
// }

export default interpolateFactory
