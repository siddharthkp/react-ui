import React from 'react'
import { Stack } from 'react-ui'

import { Heading, Tagline } from './typography'

export const Page = ({ title, tagline, badges, ...props }) => (
  <Stack direction="vertical" gap={16}>
    <section>
      <Stack justify="space-between" align="center">
        <Heading>{title}</Heading>
        <span>{badges || null}</span>
      </Stack>
      <Tagline>{tagline}</Tagline>
    </section>
    {props.children}
  </Stack>
)
