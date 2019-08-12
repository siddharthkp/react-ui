const kebabCase = require('lodash.kebabcase')

function flattenNestedStyles(styles, className) {
  const stylesArray = []

  const keys = Object.keys(styles)
  keys.forEach(function(key) {
    if (typeof styles[key] === 'object') {
      const nestedClassName = getFlatClassName(key, className)
      stylesArray.push({ selector: nestedClassName, styles: styles[key] })
      delete styles[key]
    }
  })

  stylesArray.unshift({ selector: className, styles })

  return stylesArray
}

function getFlatClassName(selector, className) {
  return selector.replace('&', className)
}

function objectToCss(styles) {
  const propertyNames = Object.keys(styles)
  const cssArray = propertyNames.map(function(key) {
    const property = kebabCase(key)

    let value = styles[key]
    if (value && typeof value === 'number') value += 'px'

    return `${property}: ${value};`
  })

  return cssArray.join('\n    ')
}

module.exports = {
  flattenNestedStyles,
  getFlatClassName,
  objectToCss
}
