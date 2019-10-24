import React from 'react'
import PropTypes from 'prop-types'
import { Element, FormField, FormLabel, FormHeader } from './form.styles'

/** Description of an input */
function Form(props) {
  return <Element {...props} />
}

Form.Field = function({ label, children, ...props }) {
  return React.createElement(FormField, props, [
    React.createElement(Form.Label, null, label),
    ...React.Children.toArray(children)
  ])
}

Form.Label = function(props) {
  return React.createElement(FormLabel, props)
}

Form.Header = function(props) {
  return React.createElement(FormHeader, props)
}

Form.propTypes = {}

Form.defaultProps = {}

export { Form }
