import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '@ds-tools/primitives'
import { styles } from './spinner.styles'

export const Spinner = props => (
  <Element
    as="span"
    component="Spinner"
    baseStyles={styles.Spinner}
    {...props}
  />
)

Spinner.propTypes = {}

Spinner.defaultProps = {}
