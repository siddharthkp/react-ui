import React from 'react'
import { Element } from '../../../primitives'
import { styles } from './image.styles'
import { merge } from '../../../utils'

function Image({ width, height, css, ...props }) {
  return (
    <Element
      as="img"
      css={merge(styles.Image, { width, height }, css)}
      component="Image"
      {...props}
    />
  )
}

export { Image }
