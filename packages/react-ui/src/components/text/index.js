import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './text.styles'

/** Description of an input */
function Text({ size, align, color, ...props }) {
  return (
    <Element
      as="span"
      component="Text"
      baseStyles={{
        ...styles,
        color,
        fontSize: size || 'inherit',
        textAlign: align
      }}
      {...props}
    />
  )
}

Text.propTypes = {
  /** Description of an Text prop */
  size: PropTypes.number
}

Text.defaultProps = {
  // size: we don't give default for size because we want the html default: inherit
}

export { Text }
