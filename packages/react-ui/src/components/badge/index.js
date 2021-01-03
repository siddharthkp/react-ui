import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './badge.styles'
import { merge } from '../../utils'

const Badge = React.forwardRef(function Button(
  { size, css, ...props },
  ref
) {

  return (
    <Element
      ref={ref}
      as="div"
      component="Badge"
      css={merge(styles.Badge, css)}
      {...props}
    />
  )
})

Badge.propTypes = {
  /** Description of an Badge prop */
  variant: PropTypes.string
}

Badge.defaultProps = {
  variant: 'primary'
}

export { Badge }
