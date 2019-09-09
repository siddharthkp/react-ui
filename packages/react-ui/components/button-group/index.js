import React from 'react'
import { Element } from '@ds-tools/primitives'

// import PropTypes from 'prop-types'

/** Description of a button group */
function ButtonGroup(props) {
  return <Element as="div" component="ButtonGroup" {...props} />
}

ButtonGroup.propTypes = {}

ButtonGroup.defaultProps = {}

export { ButtonGroup }
