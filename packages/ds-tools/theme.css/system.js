const uniq = require('lodash.uniq')
const styledSystem = require('styled-system')
const { css } = require('@styled-system/css')
const { merge } = require('@styled-system/core')

const props = styledSystem.compose(
  styledSystem.background,
  styledSystem.border,
  styledSystem.color,
  styledSystem.display,
  styledSystem.flexbox,
  styledSystem.grid,
  styledSystem.layout,
  styledSystem.position,
  styledSystem.shadow,
  styledSystem.space,
  styledSystem.typography,
  styledSystem.colorStyle,
  styledSystem.buttonStyle,
  styledSystem.textStyle
)

const scales = uniq(
  Object.keys(props).map(function(prop) {
    const config = props[prop].config
    if (!config) return
    return config[prop].scale
  })
)

const system = { scales, css, merge }

module.exports = system
