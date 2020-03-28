import React from 'react'
import { Element } from '@ds-tools/primitives'
import { Stack } from '../stack'
import { Text } from '../text'

const Stat = ({ children, ...props }) => {
  return (
    <Element component="StatContainer" {...props}>
      <Stack direction="vertical" gap={1}>
        {children}
      </Stack>
    </Element>
  )
}

const StatTitle = ({ children, ...props }) => {
  return (
    <Text size={3} weight="500" component="StatTitle" {...props}>
      {children}
    </Text>
  )
}

const StatAmount = ({ children, ...props }) => {
  return (
    <Text size={6} weight="500" component="StatAmount" {...props}>
      {children}
    </Text>
  )
}

const StatDescription = ({ children, ...props }) => {
  return (
    <Text size={2} color="text.subtle" component="StatDescription" {...props}>
      {children}
    </Text>
  )
}

Stat.Title = StatTitle
Stat.Amount = StatAmount
Stat.Description = StatDescription

export { Stat }
