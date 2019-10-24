import React from 'react'
import { Element } from '@ds-tools/primitives'
import PropTypes from 'prop-types'

/** Description of an input */
function Form(props) {
  return React.createElement(Element, {
    as: 'form',
    component: 'Form',
    ...props
  })
}

Form.Field = function(props) {
  return React.createElement(Element, {
    as: 'fieldset',
    component: 'FormField',
    ...props
  })
}

Form.Label = function(props) {
  return React.createElement(Element, {
    as: 'label',
    component: 'FormLabel',
    ...props
  })
}

Form.Header = function(props) {
  return React.createElement(Element, {
    as: 'div',
    component: 'FormHeader',
    ...props
  })
}

Form.propTypes = {}

Form.defaultProps = {}

export { Form }
