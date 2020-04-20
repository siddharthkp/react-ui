import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './textarea.styles'
import { Input } from '../input'
import { merge } from '../../utils'

const Textarea = React.forwardRef(function Textarea({ css, ...props }, ref) {
  return (
    <Input
      ref={ref}
      as="textarea"
      css={merge(styles.Textarea, css)}
      component="Textarea"
      {...props}
    />
  )
})

Textarea.propTypes = {
  rows: PropTypes.number
}

Textarea.defaultProps = {
  rows: 3
}

export { Textarea }
