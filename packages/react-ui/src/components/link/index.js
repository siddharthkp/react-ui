import React from 'react'
import { Element } from '@ds-tools/primitives'
import { styles } from './link.styles'

export const Link = props => (
  <Element as="a" component="Link" baseStyles={styles} {...props} />
)
