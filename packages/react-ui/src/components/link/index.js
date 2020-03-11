import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './link.styles'
import { Text } from '../text'
import { merge } from '../../../utils'

export const Link = ({ css, ...props }) => {
  return (
    <Text as="a" component="Link" css={merge(styles.Link, css)} {...props} />
  )
}

Link.propTypes = {}

Link.defaultProps = {}
