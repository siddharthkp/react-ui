import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './textarea.styles'
import { Input } from '../input'
import { merge } from '../../utils'

function Textarea({ css, ...props }) {
  return (
    <Input
      as="textarea"
      css={merge(styles.Textarea, css)}
      component="Textarea"
      {...props}
    />
  )
}

Textarea.propTypes = {
  rows: PropTypes.number
}

Textarea.defaultProps = {
  rows: 3
}

export { Textarea }
