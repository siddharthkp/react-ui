import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './form.styles'
import { Element } from '@ds-tools/primitives'

/** Description of an input */
const Form = props => {
  return <Element as="form" component="Form" css={styles.Form} {...props} />
}

Form.propTypes = {
  /** Description of an button prop */
  children: PropTypes.element
}

Form.Header = props => (
  <Element
    as="h1"
    component="FormHeader"
    baseStyles={styles.FormHeader}
    {...props}
  />
)

Form.Header.propTypes = {
  /** Description of an button prop */
  as: PropTypes.string
}

Form.Header.defaultProps = {
  as: 'h1'
}

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
