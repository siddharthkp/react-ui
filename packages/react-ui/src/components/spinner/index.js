import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './spinner.styles'
import { merge } from '../../../utils'

export const Spinner = ({ size, ...props }) => (
  <Element
    as="span"
    component="Spinner"
    baseStyles={merge(styles.Spinner, { size: `Spinner.${size}` })}
    {...props}
  />
)

Spinner.propTypes = {
  size: PropTypes.string
}

Spinner.defaultProps = {
  size: 'small'
}
