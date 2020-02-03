import React from 'react'
import { Element } from '@ds-tools/primitives'
import { styles } from './card.styles'

function Card(props) {
  return (
    <Element as="div" baseStyles={styles.Card} component="Card" {...props} />
  )
}

export { Card }
