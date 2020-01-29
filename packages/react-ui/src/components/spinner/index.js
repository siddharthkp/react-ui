import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './spinner.styles'
import { merge } from '../../../utils'

export const Spinner = props => (
  <Element
    as="span"
    component="Spinner"
    baseStyles={styles.Spinner}
    {...props}
  />
)

Spinner.propTypes = {
  variant: PropTypes.oneOf(['default', 'inverse'])
}

Spinner.defaultProps = {
  variant: 'default'
}
