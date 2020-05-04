import React from 'react'
import PropTypes from 'prop-types'
import { useId } from '@reach/auto-id'
import { Text } from '../text'
import { Stack } from '../stack'
import { Element } from '../../primitives'
import { merge } from '../../utils'

export const Radio = ({ id, label, disabled, checked, value, ...props }) => {
  const inputId = useId(id)
  return (
    <Stack align="center" gap={2}>
      <Element
        as="input"
        type="radio"
        component="Radio"
        id={inputId}
        value
        disabled={disabled ? disabled : null}
        checked={checked ? checked : null}
        {...props}
      />
      <Text as="label" htmlFor={inputId}>
        {label}
      </Text>
    </Stack>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired
}

Radio.defaultProps = {}
