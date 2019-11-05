import React from 'react'
// import PropTypes from 'prop-types'
import { Element, FormField, FormLabel, FormHeader } from './form.styles'

/** Description of an input */
function Form(props) {
  return <Element {...props} />
}

Form.Header = FormHeader
Form.Label = FormLabel

Form.Field = function({ label, children, ...props }) {
  return (
    <FormField {...props}>
      <Form.Label>{label}</Form.Label>
      {children}
    </FormField>
  )
}

Form.propTypes = {}

Form.defaultProps = {}

export { Form }
