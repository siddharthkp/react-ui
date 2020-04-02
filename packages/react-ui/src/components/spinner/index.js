import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../../primitives'
import { styles } from './spinner.styles'
import { merge } from '../../../utils'

export const Spinner = ({ css, ...props }) => (
  <Element
    as="span"
    component="Spinner"
    css={merge(styles.Spinner, css)}
    {...props}
  />
)

Spinner.propTypes = {}

Spinner.defaultProps = {}
