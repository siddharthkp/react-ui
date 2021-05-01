import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './textarea.styles'
import { Input } from '../input'
import { merge } from '../../utils'

const Textarea = React.forwardRef(function Textarea({ fullWidth, css, ...props }, ref) {
  let width = fullWidth ? '100%' : 'auto'

  return (
    <Input
      ref={ref}
      as="textarea"
      css={merge(styles.Textarea, { width }, css)}
      component="Textarea"
      {...props}
    />
  )
})

Textarea.propTypes = {
  fullWidth: PropTypes.bool,
  rows: PropTypes.number
}

Textarea.defaultProps = {
  rows: 3
}

export { Textarea }
