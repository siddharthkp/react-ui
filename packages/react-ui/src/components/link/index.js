import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './link.styles'
import { Text } from '../text'

export const Link = ({ ...props }) => {
  return <Text as="a" component="Link" baseStyles={styles.Link} {...props} />
}

Link.propTypes = {
  variant: PropTypes.oneOf(['default', 'subtle'])
}

Link.defaultProps = {
  variant: 'default'
}
