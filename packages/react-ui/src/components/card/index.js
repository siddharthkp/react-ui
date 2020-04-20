import React from 'react'
import { Element } from '../../primitives'
import { styles } from './card.styles'
import { merge } from '../../utils'

const Card = React.forwardRef(function Card({ css, ...props }, ref) {
  return (
    <Element
      ref={ref}
      as="div"
      component="Card"
      css={merge(styles.Card, css)}
      {...props}
    />
  )
})

export { Card }
