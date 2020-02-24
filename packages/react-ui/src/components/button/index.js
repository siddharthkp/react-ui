import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './button.styles'
import { merge } from '../../../utils'

/** Description of a button */
const Button = ({ size, ...props }) => {
  return (
    <Element
      as="button"
      component="Button"
      baseStyles={merge(styles.Button, {
        height: `Button.${size}`
      })}
      {...props}
    />
  )
}

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
