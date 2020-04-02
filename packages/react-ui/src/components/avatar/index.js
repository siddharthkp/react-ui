import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../../primitives'
import { styles } from './avatar.styles'
import { merge } from '../../../utils'

export const Avatar = ({ css, ...props }) => (
  <Element
    as="img"
    component="Avatar"
    css={merge(styles.Avatar, css)}
    {...props}
  />
)

Avatar.propTypes = {
  /** Image url for avatar */
  src: PropTypes.string.isRequired,
  /** size of avatar */
  size: PropTypes.string
}

Avatar.defaultProps = {}
