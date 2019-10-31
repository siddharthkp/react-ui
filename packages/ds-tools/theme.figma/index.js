const fs = require('fs')
const uniq = require('lodash.uniq')
const prettier = require('prettier')
const set = require('just-safe-set')

require('dotenv').config()
const Figma = require('figma-js')
const rgbHex = require('rgb-hex')
const { processFile } = require('figma-transformer')
const argv = require('yargs-parser')(process.argv.slice(2))

const file = argv.file
const token = process.env.FIGMA_TOKEN

const client = Figma.Client({ personalAccessToken: token })

const outputPath = 'theme.js'
const theme = {
  fontSizes: [],
  fontWeights: [],
  lineHeights: [],
  colors: {}
}

async function getTokens() {
  const { data } = await client.file(file)
  const processed = processFile(data)
  setColors(processed)
  setFontSizes(processed)

  postProcess(theme)

  const result = `const theme = ${JSON.stringify(theme, null, 2)}`
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
    const hex = rgbHex(r * 255, g * 255, b * 255)

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
  theme.lineHeights = uniq(theme.lineHeights).sort((a, b) => a - b)
}

getTokens()
