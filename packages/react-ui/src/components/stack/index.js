import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './stack.styles'

const Stack = props => (
  <Element as="div" component="Stack" baseStyles={styles.Stack} {...props}>
    {props.children}
  </Element>
)

Stack.propTypes = {
  /** Description of the gap prop */
  gap: PropTypes.number,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  justify: PropTypes.string,
  align: PropTypes.string,
  inline: PropTypes.bool
}

Stack.defaultProps = {
  gap: 0,
  direction: 'horizontal',
  inline: false
}

export { Stack }
