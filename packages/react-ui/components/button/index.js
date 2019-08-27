import React from 'react'
import { Element } from '@ds-tools/primitives'
import PropTypes from 'prop-types'

/** Description of a button */
function Button(props) {
  return React.createElement(Element, {
    as: 'button',
    component: 'Button',
    ...props
  })
}

Button.propTypes = {
  /** Description of an button prop */
  type: PropTypes.string
}

Button.defaultProps = {
  type: 'submit'
}

export { Button }
