import React from 'react'
import PropTypes from 'prop-types'
import { useId } from '@reach/auto-id'

import { styles } from './form.styles'
import { Element } from '../../primitives'
import { Stack } from '../stack'
import { merge } from '../../utils'

const Form = React.forwardRef(function Form({ css, ...props }, ref) {
  return (
    <Element
      ref={ref}
      as="form"
      component="Form"
      css={merge(styles.Form, css)}
      {...props}
    >
      <Stack component="FormStack" direction="vertical" gap={6}>
        {props.children}
      </Stack>
    </Element>
  )
})

Form.propTypes = {}

Form.defaultProps = {}

Form.Header = React.forwardRef(({ css, ...props }, ref) => (
  <Element
    ref={ref}
    as="h1"
    component="FormHeader"
    css={merge(styles.FormHeader, css)}
    {...props}
  />
))

Form.Header.displayName = 'Form.Header'

Form.Header.propTypes = {
  as: PropTypes.string
}

Form.Header.defaultProps = {
  as: 'h1'
}

Form.Label = React.forwardRef(({ css, ...props }, ref) => (
  <Element
    ref={ref}
    as="label"
    component="FormLabel"
    css={merge(styles.FormLabel, css)}
    {...props}
  />
))

Form.Label.displayName = 'Form.Label'

// attach child components to Form
Form.Field = React.forwardRef(({ label, id, required, css, ...props }, ref) => {
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

    // At the same time we should not override any props the child element has
    additionalProps.required = required || child.props.required

    return React.cloneElement(child, { ...additionalProps, ref })
  })

  return (
    <Element
      as="fieldset"
      component="FormField"
      css={merge(styles.FormField, css)}
      {...props}
    >
      <Form.Label htmlFor={inputId}>
        {label} {required ? <span>*</span> : null}
      </Form.Label>
      {children}
    </Element>
  )
})

Form.Field.displayName = 'Form.Field'

Form.Field.propTypes = {
  label: PropTypes.string.required,

  id: PropTypes.string,

  required: PropTypes.bool
}

export { Form }
