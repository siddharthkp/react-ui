import React from 'react'
import PropTypes from 'prop-types'
import { Element } from './input.styles'

/** Description of an input */
function Input(props) {
  return React.createElement(Element, props)
}

Input.propTypes = {
  /** Description of an input prop */
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export { Input }
