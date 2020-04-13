import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './button.styles'
import { merge } from '../../utils'

/** Description of a button */
const Button = React.forwardRef(function Button({ size, css, ...props }, ref) {
  return (
    <Element
      ref={ref}
      as="button"
      component="Button"
      css={merge(styles.Button, { height: 'Button.' + size }, css)}
      {...props}
    />
  )
})

Button.propTypes = {
  /** Description of an button prop */
  type: PropTypes.oneOf(['submit', 'button', 'reset'])
}

Button.defaultProps = {
  type: 'submit',
  size: 'medium',
  variant: 'primary'
}

export { Button }
