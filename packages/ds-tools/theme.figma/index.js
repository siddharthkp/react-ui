const fs = require('fs')
const uniq = require('lodash.uniq')
const prettier = require('prettier')
const set = require('just-safe-set')
const pluralize = require('pluralize')
require('dotenv').config()

const Figma = require('figma-js')
const rgbHex = require('rgb-hex')
const { processFile } = require('figma-transformer')
const argv = require('yargs-parser')(process.argv.slice(2))

const file = argv.file
const token = process.env.FIGMA_TOKEN

if (!file) {
  console.log(
    'file not given, please use the --file flag to pass a figma file id'
  )
  process.exit(1)
}

if (!token) {
  console.log('FIGMA_TOKEN not found in .env file')
  process.exit(1)
}

const client = Figma.Client({ personalAccessToken: token })

const outputPath = 'theme.js'
const theme = {
  fontSizes: [0],
  fontWeights: [0],
  lineHeights: [0],
  colors: {}
}

async function getTokens() {
  const { data } = await client.file(file)
  const processed = processFile(data)
  setColors(processed)
  setFontSizes(processed)

  postProcess(theme)

  const result = getFileContents(theme)
  fs.writeFileSync(outputPath, prettier.format(result, { parser: 'babel' }))
}

function setColors(data) {
  const fillStyles = data.shortcuts.STYLE.filter(
    style => style.styleType === 'FILL'
  )

  fillStyles.forEach(fill => {
    const { name, styles } = fill

    if (!styles[0]) return

    const { r, g, b } = styles[0].color
    const hex = '#' + rgbHex(r * 255, g * 255, b * 255)

    const key = getKey(name)
    set(theme.colors, key, hex)
  })
}

function setFontSizes(data) {
  const textStyles = data.shortcuts.STYLE.filter(
    style => style.styleType === 'TEXT'
  )

  textStyles.map(text => {
    const { fontSize, fontWeight, lineHeightPx } = text.typeStyles
    theme.fontSizes.push(fontSize)
    theme.fontWeights.push(fontWeight)
    theme.lineHeights.push(lineHeightPx)
  })
}

function getKey(name) {
  return name
    .toLowerCase()
    .replace(/-/g, '.')
    .replace(/\//g, '.')
    .replace(/ /g, '.')
}

function postProcess() {
  theme.fontSizes = uniq(theme.fontSizes).sort((a, b) => a - b)
  theme.fontWeights = uniq(theme.fontWeights).sort((a, b) => a - b)
  theme.lineHeights = uniq(theme.lineHeights)
    .sort((a, b) => a - b)
    .map(l => Math.round(l * 100) / 100)

  const colorNames = Object.keys(theme.colors)
  const stringColorNames = colorNames.filter(
    name => typeof theme.colors[name] === 'string'
  )
  const objectColorNames = colorNames.filter(
    name => typeof theme.colors[name] !== 'string'
  )
  const colors = {}

  stringColorNames.sort().forEach(name => {
    colors[name] = theme.colors[name]
  })

  objectColorNames.sort().forEach(name => {
    const colorObject = theme.colors[name]
    colors[pluralize(name)] = colorObject
  })

  // TODO: convert color keys to numbers

  theme.colors = colors
}

function getFileContents(theme) {
  return `const theme = ${JSON.stringify(theme, null, 2)}

export default theme
`
}

getTokens()
