import React from 'react'
import { Element } from '@ds-tools/primitives'
// import PropTypes from 'prop-types'

/** Description of an input group */
function InputGroup(props) {
  return <Element as="div" component="InputGroup" {...props} />
}

InputGroup.Text = function(props) {
  return <Element as="span" {...props} />
}

InputGroup.propTypes = {}

InputGroup.defaultProps = {}

export { InputGroup }
