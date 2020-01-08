// github.com/styled-system/styled-system/blob/master/packages/css/src/index.js
import delve from 'dlv'
import merge from 'deepmerge'

function interpolate(styles, theme) {
  let filledStyles = {}

  for (let key in styles) {
    const value = styles[key]

    if (typeof value === 'object') {
      // recursion
      filledStyles[key] = interpolate(value, theme)
    } else {
      let scaleName = scales[key]

      if (scaleName) {
        const scale = theme[scaleName]
        filledStyles[key] = get(value, scale)
      }
    }

    if (key === 'variant') {
      const variantStyles = delve(theme, value)
      const interpolated = interpolate(variantStyles, theme)
      filledStyles = merge(filledStyles, interpolated)
    }

    // expand shortcuts like paddingX, size, etc.
    if (shortcuts[key]) {
      shortcuts[key].forEach(realKeys => {
        filledStyles[realKeys] = filledStyles[key]
      })
      delete filledStyles[key]
    }
  }

  return filledStyles
}

function interpolateFactory(styles) {
  return function(propsOrTheme) {
    let theme
    if (propsOrTheme.theme) theme = theme
    else theme = propsOrTheme

    return interpolate(styles, theme)
  }
}

function getScale(key) {
  let scale
  if (spaceKeys.includes(key)) scale = 'space'
  else if (sizeKeys.includes(key)) scale = 'sizes'
  else if (colorKeys.includes(key)) scale = 'colors'
  else if (key === 'lineHeight') scale = 'lineHeights'
  else if (key === 'fontSize') scale = 'fontSizes'
  else if (key === 'borderRadius') scale = 'radii'
  return scale
}

// recursively resolve tokens
function get(value, scale) {
  // if scale doesn't exist, there's nothing to do here
  if (!scale) return value

  /** a value can be one of the following
   * a) css value
   * b) a scale token
   * c) reference to another token
   */

  let scaleValue

  // scale can be an array or object
  if (typeof value === 'number') scaleValue = scale[value]
  // delve uses dot.notation to resolve deep inside an object
  else scaleValue = delve(scale, value)

  // if the value doesn't exist on the scale, it must be a css value
  if (!scaleValue) return value
  else {
    // avoid infinite trap
    if (scaleValue === value) return value
    const nestedScaleValue = get(scaleValue, scale)

    // if this value exists, it means it was a reference to another token
    if (nestedScaleValue) return nestedScaleValue
    // otherwise it was a scale token
    else return scaleValue
  }
}

// copied from @styled-system/css
const scales = {
  color: 'colors',
  backgroundColor: 'colors',
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
  // svg
  fill: 'colors',
  stroke: 'colors'
}

const shortcuts = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
}

const shorthands = {
  // more complex logic here
  background: () => {},
  border: () => {}
}

export default interpolateFactory
