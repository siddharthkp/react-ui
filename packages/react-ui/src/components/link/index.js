import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './link.styles'
import { merge } from '../../../utils'

export const Link = props => (
  <Element
    as="a"
    component="Link"
    baseStyles={merge(styles, {
      variant: `Link.${props.variant}`
    })}
    {...props}
  />
)

Link.defaultProps = {
  variant: 'default'
}

Link.propTypes = {
  variant: PropTypes.oneOf(['default', 'subtle'])
}
