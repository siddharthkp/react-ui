import React from 'react'
// import PropTypes from 'prop-types'

import { styles } from './form.styles'
import styled from '@ds-tools/styled'
import { Element } from '@ds-tools/primitives'

// const Element = styled.form(styles.Form)
const FormField = styled.fieldset(styles.FormField)
const FormHeader = styled.div(styles.FormHeader)

/** Description of an input */
function Form(props) {
  return <Element as="form" css={styles.Form} {...props} />
}

Form.Header = FormHeader

Form.Label = props => (
  <Element
    as="label"
    component="FormLabel"
    baseStyles={styles.FormLabel}
    {...props}
  />
)

Form.Field = function({ label, children, ...props }) {
  return (
    <Element
      as="fieldset"
      component="FormField"
      baseStyles={styles.FormField}
      {...props}
    >
      <Form.Label>{label}</Form.Label>
      {children}
    </Element>
  )
}

Form.propTypes = {}

Form.defaultProps = {}

export { Form }
