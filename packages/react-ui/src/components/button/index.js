import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './button.styles'
import { merge } from '../../utils'

const Button = React.forwardRef(function Button({ size, fullWidth, css, ...props }, ref) {
  let width = fullWidth ? '100%' : 'auto'
  
  return (
    <Element
      ref={ref}
      as="button"
      component="Button"
      css={merge(styles.Button, { width }, css)}
      {...props}
    />
  )
})

Button.propTypes = {
  /** Description of an button prop */
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button', 'reset'])
}

Button.defaultProps = {
  type: 'submit',
  size: 'medium',
  variant: 'primary'
}

export { Button }
