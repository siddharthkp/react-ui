import React from 'react'
import PropTypes from 'prop-types'
import { useId } from '@reach/auto-id'
import { Text } from '../text'
import { Stack } from '../stack'
import { Element } from '../../primitives'
import { styles } from './checkbox.styles'
import { merge } from '../../utils'

export const Checkbox = ({ id, label, checked, disabled, ...props }) => {
  const inputId = useId(id)
  return (
    <Stack align="center" gap={2}>
      <Element
        as="input"
        type="checkbox"
        component="Checkbox"
        checked={checked ? checked : null}
        disabled={disabled ? disabled : null}
        id={inputId}
        {...props}
        css={merge(styles.Checkbox, css)}
      />
      <Text as="label" htmlFor={inputId}>
        {label}
      </Text>
    </Stack>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
}

Checkbox.defaultProps = {
  value: false
}
