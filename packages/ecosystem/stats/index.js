import React from 'react'
import { Stack, Text } from 'react-ui'
import styles from './styles'

const Stats = React.forwardRef(function Stack(props, ref) {
  return (
    <Stack
      ref={ref}
      direction="vertical"
      gap={1}
      component="Stats"
      {...props}
    />
  )
})

const Label = React.forwardRef((props, ref) => (
  <Text ref={ref} component="StatsLabel" {...props} />
))

const Value = React.forwardRef((props, ref) => (
  <Text ref={ref} component="StatsValue" {...props} />
))

const Description = React.forwardRef((props, ref) => (
  <Text ref={ref} component="StatsDescription" {...props} />
))

Stats.Label = Label
Stats.Value = Value
Stats.Description = Description

export { Stats, styles }
