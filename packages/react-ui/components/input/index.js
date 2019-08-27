import React from 'react'
import { Element } from '@ds-tools/primitives'
import PropTypes from 'prop-types'

/** Description of an input */
function Input(props) {
  return React.createElement(Element, {
    as: 'input',
    component: 'Input',
    ...props
  })
}

Input.propTypes = {
  /** Description of an input prop */
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export { Input }
