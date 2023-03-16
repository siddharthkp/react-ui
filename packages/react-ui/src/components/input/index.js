import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './input.styles'
import { merge } from '../../utils'

/** Description of an input */
const Input = React.forwardRef(function Input({ fullWidth, invalid, css, ...props }, ref) {
  let width = fullWidth ? '100%' : 'auto'

  return (
    <Element
      ref={ref}
      as="input"
      component="Input"
      aria-invalid={invalid}
      css={merge(styles.Input, { width }, css)}
      {...props}
    />
  )
})

Input.propTypes = {
  /** Description of an input prop */
  fullWidth: PropTypes.bool,
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export { Input }
