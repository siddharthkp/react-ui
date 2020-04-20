import React from 'react'
import PropTypes from 'prop-types'
import { useId } from '@reach/auto-id'
import { Text } from '../text'
import { Stack } from '../stack'
import { Element } from '../../primitives'
import { merge } from '../../utils'

export const Checkbox = ({ id, label, ...props }) => {
  const inputId = useId(id)
  return (
    <Stack align="center" gap={2}>
      <Element
        as="input"
        type="checkbox"
        component="Checkbox"
        id={inputId}
        {...props}
      />
      <Text as="label" htmlFor={inputId}>
        {label}
      </Text>
    </Stack>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired
}

Checkbox.defaultProps = {
  value: false
}
