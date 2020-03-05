import React from 'react'
import { Element } from '@ds-tools/primitives'
import { styles } from './card.styles'
import { merge } from '../../../utils'

function Card({ css, ...props }) {
  return (
    <Element
      as="div"
      component="Card"
      css={merge(styles.Card, css)}
      {...props}
    />
  )
}

export { Card }
