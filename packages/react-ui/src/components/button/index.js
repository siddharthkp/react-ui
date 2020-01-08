import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './button.styles'
import { merge } from '../../../utils'

/** Description of a button */
function Button(props) {
  return (
    <Element
      as="button"
      component="Button"
      baseStyles={merge(styles.Button, { variant: `Buttons.${props.variant}` })}
      {...props}
    />
  )
}

Button.propTypes = {
  /** Description of an button prop */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'destructive'])
}

Button.defaultProps = {
  type: 'submit',
  variant: 'primary'
}

export { Button }
