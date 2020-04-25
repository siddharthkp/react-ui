import React from 'react'
import { Element } from '../../primitives'
import { styles } from './image.styles'
import { merge } from '../../utils'

const Image = React.forwardRef(function Image(
  { width, height, css, ...props },
  ref
) {
  return (
    <Element
      ref={ref}
      as="img"
      css={merge(styles.Image, { width, height }, css)}
      component="Image"
      {...props}
    />
  )
})

export { Image }
