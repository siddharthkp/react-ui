import React from 'react'
import { Stack, Element } from 'react-ui'

export const Divider = () => (
  <Stack marginY={16} justify="center" gap={2}>
    <Element
      as="span"
      css={{
        width: 1,
        height: 1,
        backgroundColor: 'grays.200',
        borderRadius: '50%'
      }}
    />
    <Element
      as="span"
      css={{
        width: 1,
        height: 1,
        backgroundColor: 'grays.200',
        borderRadius: '50%'
      }}
    />
  </Stack>
)
