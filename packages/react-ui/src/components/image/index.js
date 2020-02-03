import React from 'react'
import { Element } from '@ds-tools/primitives'
import { styles } from './card.styles'

function Image(props) {
  return (
    <Element as="img" baseStyles={styles.Image} component="Image" {...props} />
  )
}

export { Image }
