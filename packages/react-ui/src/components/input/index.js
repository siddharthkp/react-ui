import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './input.styles'
import { merge } from '../../utils'

/** Description of an input */
const Input = React.forwardRef(function Input({ invalid, css, ...props }, ref) {
  return (
    <Element
      ref={ref}
      as="input"
      component="Input"
      aria-invalid={invalid}
      css={merge(styles.Input, css)}
      {...props}
    />
  )
})

Input.propTypes = {
  /** Description of an input prop */
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export { Input }
