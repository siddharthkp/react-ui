import React from 'react'
import { Stack, Text } from 'react-ui'
import styles from './styles'

const Stats = React.forwardRef(function Stats(props, ref) {
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

Label.displayName = 'Stats.Label'

const Value = React.forwardRef((props, ref) => (
  <Text ref={ref} component="StatsValue" {...props} />
))

Value.displayName = 'Stats.Value'

const Description = React.forwardRef((props, ref) => (
  <Text ref={ref} component="StatsDescription" {...props} />
))

Description.displayName = 'Stats.Description'

Stats.Label = Label
Stats.Value = Value
Stats.Description = Description

export { Stats, styles }
