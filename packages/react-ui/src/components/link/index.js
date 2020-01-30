import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './link.styles'
import { merge } from '../../../utils'
import { Text } from '../text'

export const Link = ({ css, ...props }) => (
  <Text as="a" component="Link" css={merge(styles.Link, css)} {...props} />
)

Link.propTypes = {
  variant: PropTypes.oneOf(['default', 'subtle'])
}

Link.defaultProps = {
  variant: 'default'
}
