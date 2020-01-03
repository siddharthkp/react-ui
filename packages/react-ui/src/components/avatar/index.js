import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './avatar.styles'
import { merge } from '../../../utils'

export const Avatar = ({ size, ...props }) => (
  <Element
    as="img"
    component="Avatar"
    baseStyles={merge(styles.Avatar, {
      height: `Avatar.${size}`,
      width: `Avatar.${size}`
    })}
    {...props}
  />
)

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Avatar.defaultProps = {
  size: 'small'
}
