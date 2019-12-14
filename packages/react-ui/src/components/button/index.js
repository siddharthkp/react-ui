import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './button.styles'
import { Element } from '@ds-tools/primitives'

/** Description of a button */
function Button(props) {
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
}

Button.defaultProps = {
  type: 'submit'
}

export { Button }
