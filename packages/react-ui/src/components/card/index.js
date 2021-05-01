import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../primitives'
import { styles } from './card.styles'
import { merge } from '../../utils'

const Card = React.forwardRef(function Card({ fullWidth, css, ...props }, ref) {
  let width = fullWidth ? '100%' : 'auto'

  return (
    <Element
      ref={ref}
      as="div"
      component="Card"
      css={merge(styles.Card, { width }, css)}
      {...props}
    />
  )
})

Card.propTypes = {
  /** Description of an card prop */
  fullWidth: PropTypes.bool
}

export { Card }
