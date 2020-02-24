import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './avatar.styles'
import { merge } from '../../../utils'

export const Avatar = props => (
  <Element
    as="img"
    component="Avatar"
    baseStyles={merge(styles.Avatar, {
      size: `Avatar.${size}`
    })}
    {...props}
  />
)

Avatar.propTypes = {
  /** Image url for avatar */
  src: PropTypes.string.isRequired,
  /** size of avatar */
  size: PropTypes.string
}

Avatar.defaultProps = {
  // size: 'medium'
}
