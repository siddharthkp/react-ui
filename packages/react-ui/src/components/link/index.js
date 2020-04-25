import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './link.styles'
import { Text } from '../text'
import { merge } from '../../utils'

export const Link = React.forwardRef(function Link({ css, ...props }, ref) {
  return (
    <Text
      ref={ref}
      as="a"
      component="Link"
      css={merge(styles.Link, css)}
      {...props}
    />
  )
})

Link.propTypes = {}

Link.defaultProps = {}
