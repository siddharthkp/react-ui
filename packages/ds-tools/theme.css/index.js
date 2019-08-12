#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const chokidar = require('chokidar')
const kebabCase = require('lodash.kebabcase')
const uniq = require('lodash.uniq')
const argv = require('yargs-parser')(process.argv.slice(2))

const system = require('./system')
const clearRequire = require('./clear-require')
const {
  flattenNestedStyles,
  getFlatClassName,
  objectToCss
} = require('./cli-utils')

// require('@babel/register')({
//   ignore: /node_modules/,
//   presets: [['@babel/es2015', { modules: false }], '@babel/react']
// })

const themePath = path.join(process.cwd(), 'src/theme/theme.js')
const componentsPath = path.join(process.cwd(), 'src/theme/components.js')
const outputPath = path.join(process.cwd(), 'src/theme/theme.css')

function run() {
  let theme = {}
  try {
    theme = require(themePath)
  } catch (error) {
    console.log(error)
    return
  }

  let styleSheet = ``

  /** Variables */

  let variables = ``

  system.scales.map(function(name) {
    const value = theme[name]
    if (value) append(name, value)
  })

  function append(name, value) {
    if (Array.isArray(value)) {
      value.map(function(each, index) {
        append(`${name}-${index}`, each)
      })
    } else if (typeof value === 'object') {
      // TODO: idek
    } else if (typeof value === 'string') {
      variables += `--${name}: ${value}; \n`
    } else if (typeof value === 'number') {
      // wouldn't work for line-height
      variables += `--${name}: ${value}px; \n`
    }
  }

  styleSheet += `:root { \n ${variables} } \n`

  /** Components */

  const componentNames = Object.keys(theme.components)

  componentNames.forEach(function(name) {
    const className = '.' + name //'.av-' + kebabCase(name)
    const stylesArray = flattenNestedStyles(
      // system.merge(
      // internalStyles[name], // in-built styles
      theme.components[name], // from theme
      // )
      className
    )

    stylesArray.forEach(function({ selector, styles }) {
      const interpolated = system.css(styles)(theme)
      const css = objectToCss(interpolated)

      styleSheet += `${selector} { \n  ${css} \n } \n`
    })
  })

  fs.writeFileSync(outputPath, prettier.format(styleSheet, { parser: 'css' }))
}

if (argv.w)
  chokidar.watch([themePath, componentsPath]).on('all', function(event, path) {
    clearRequire(componentsPath)
    clearRequire(themePath)
    run()
  })
else run()
