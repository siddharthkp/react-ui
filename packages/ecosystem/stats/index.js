import React from 'react'
import { Stack, Text } from 'react-ui'
import styles from './styles'

const Stats = (props) => (
  <Stack direction="vertical" gap={1} component="Stats" {...props} />
)

const Label = (props) => <Text component="StatsLabel" {...props} />

const Value = (props) => <Text component="StatsValue" {...props} />

const Description = (props) => <Text component="StatsDescription" {...props} />

Stats.Label = Label
Stats.Value = Value
Stats.Description = Description

export { Stats, styles }
