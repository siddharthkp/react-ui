import React from 'react'
import { Element } from '@ds-tools/primitives'
import { styles } from './image.styles'
import { merge } from '../../../utils'

function Image({ width, height, css, ...props }) {
  return (
    <Element
      as="img"
      baseStyles={styles.Image}
      css={merge({ width, height }, css)}
      component="Image"
      {...props}
    />
  )
}

export { Image }
