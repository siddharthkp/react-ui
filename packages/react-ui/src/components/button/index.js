import React from 'react'
// import { Element } from '@ds-tools/primitives'
import PropTypes from 'prop-types'
import { Element } from './button.styles'

/** Description of a button */
function Button(props) {
  return React.createElement(Element, {
    ...props
  })
}

Button.propTypes = {
  /** Description of an button prop */
  type: PropTypes.oneOf(['submit', 'button', 'reset'])
}

Button.defaultProps = {
  type: 'submit'
}

export { Button }
