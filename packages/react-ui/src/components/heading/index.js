import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './heading.styles'
import { merge } from '../../../utils'

/** Description of an input */
function Heading({ size, ...props }) {
  return (
    <Element
      as="h1"
      component="Heading"
      baseStyles={merge(styles.Heading, {
        fontSize: theme => theme.sizes.Heading[size] || size
      })}
      {...props}
    />
  )
}

Heading.propTypes = {
  /** Description of an Heading prop */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Heading.defaultProps = {
  as: 'h1'
}

export { Heading }
