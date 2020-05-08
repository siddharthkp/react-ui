import React from 'react'
import ReachAlert from '@reach/alert'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './alert.styles'
import { merge } from '../../utils'

export const Alert = React.forwardRef(function Alert({ css, ...props }, ref) {
  return (
    <Element
      ref={ref}
      as={ReachAlert}
      component="Alert"
      css={merge(styles.Alert, css)}
      {...props}
    />
  )
})

Alert.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.oneOf(['polite', 'assertive'])
}

Alert.defaultProps = {
  variant: 'default',
  type: 'polite'
}
