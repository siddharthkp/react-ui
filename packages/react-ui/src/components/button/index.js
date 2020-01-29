import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './button.styles'
import { merge } from '../../../utils'

/** Description of a button */
const Button = props => {
  return (
    <Element
      as="button"
      component="Button"
      baseStyles={styles.Button}
      {...props}
    />
  )
}

Button.propTypes = {
  /** Description of an button prop */
  type: PropTypes.oneOf(['submit', 'button', 'reset'])
  // TODO: static variant prop makes no sense, as variant comes from theme on runtime
  // maybe we should add theme to props and use that here /shrug
  // variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'destructive'])
}

Button.defaultProps = {
  type: 'submit',
  variant: 'primary'
}

export { Button }
