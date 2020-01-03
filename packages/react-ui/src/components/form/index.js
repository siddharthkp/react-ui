import React from 'react'
import PropTypes from 'prop-types'
import { useId } from '@reach/auto-id'

import { styles } from './form.styles'
import { Element } from '@ds-tools/primitives'
import { Stack } from '../stack'

const Form = props => {
  return (
    <Element as="form" component="Form" css={styles.Form} {...props}>
      <Stack component="FormStack" direction="vertical" gap={6}>
        {props.children}
      </Stack>
    </Element>
  )
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

const FormField = function({ label, id, isRequired, ...props }) {
  const inputId = useId(id)

  const children = React.Children.map(props.children, (child, index) => {
    const additionalProps = {}

    // We only attach id to the first child.
    // This is irrelevant when there is only one form element.
    // When there are multiple elements in the same field, the first one gets focused.
    if (index === 0) additionalProps.id = inputId

    // this one is tricky. We don't really know the intention here if the user
    // wanted to make both fields required or just one of them
    // we assume it's both
    additionalProps.required = isRequired

    return React.cloneElement(child, { ...additionalProps })
  })

  return (
    <Element
      as="fieldset"
      component="FormField"
      baseStyles={styles.FormField}
      {...props}
    >
      <Form.Label htmlFor={inputId}>
        {label} {isRequired ? <span>*</span> : null}
      </Form.Label>
      {children}
    </Element>
  )
}

FormField.propTypes = {
  /** first */
  label: PropTypes.string.isRequired,
  /** second */
  id: PropTypes.string,
  /** third */
  isRequired: PropTypes.bool
}

// attach display name explicitly to make codegen work
FormField.displayName = 'Form.Field'

Form.propTypes = {}

Form.defaultProps = {}

// attach child components to Form
Form.Field = FormField

export { Form }
