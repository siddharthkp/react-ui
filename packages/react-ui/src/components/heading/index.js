import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './heading.styles'

/** Description of an input */
function Heading({ size, ...props }) {
  return (
    <Element
      as="h1"
      component="Heading"
      baseStyles={styles}
      fontSize={size}
      {...props}
    />
  )
}

Heading.propTypes = {
  /** Description of an Heading prop */
  size: PropTypes.number
}

Heading.defaultProps = {
  size: 6
}

export { Heading }
