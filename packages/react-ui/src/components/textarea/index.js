import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './textarea.styles'

/** Description of an input */
function Textarea(props) {
  return (
    <Element
      as="textarea"
      component="Textarea"
      baseStyles={styles}
      {...props}
    />
  )
}

Textarea.propTypes = {
  rows: PropTypes.number
}

Textarea.defaultProps = {
  rows: 3
}

export { Textarea }
