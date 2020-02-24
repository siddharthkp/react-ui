import React from 'react'
import { Stack, calc } from 'react-ui'

import { Heading, Tagline } from './typography'

export const Page = ({ title, tagline, badges, ...props }) => (
  <Stack direction="vertical" gap={16} marginBottom={calc('16 * 2')}>
    {title ? (
      <section>
        <Stack justify="space-between" align="center">
          <Heading>{title}</Heading>

          <span>{badges || null}</span>
        </Stack>
        <Tagline>{tagline}</Tagline>
      </section>
    ) : null}
    {props.children}
  </Stack>
)
