import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../input/'
import { styles, caret } from './select.styles'
import { merge, mergeFns } from '../../utils'

/**
 * We do a tiny dance to make selects look like they have a placeholder
 * just like an Input does. We do this by attaching an onChange handler
 * It's useful to note that we use mergeFns so that we don't override a
 * potential onChange from props
 * */
const usePlaceholder = props => {
  const [placeholderStyles, setPlaceholderStyles] = React.useState(
    props.defaultValue || props.value ? {} : { color: 'text.subtle' }
  )

  const onChange = function(event) {
    setPlaceholderStyles(event.target.value ? {} : { color: 'text.subtle' })
  }

  return { placeholderStyles, onChange }
}

const Select = React.forwardRef(function Select({ fullWidth, css, ...props }, ref) {
  const { placeholderStyles, onChange } = usePlaceholder(props)
  let width = fullWidth ? '100%' : 'auto'

  return (
    <Input
      ref={ref}
      as="select"
      component="Select"
      css={merge(merge(styles.Select, placeholderStyles), { width }, css)}
      {...props}
      onChange={mergeFns(onChange, props.onChange)}
    />
  )
})

Select.propTypes = {
  /** Description of an select prop */
  fullWidth: PropTypes.bool
}

Select.defaultProps = {}

Select.caret = caret
export { Select }
