import React from 'react'
import { Stack, calc } from 'react-ui'

import { Heading, Tagline } from './typography'
import { Head } from './head'

export const Page = ({ title, tagline, badges, ...props }) => {
  return (
    <>
      <Head title={title} description={tagline} />
      <Stack direction="vertical" gap={16} marginBottom={calc('16 * 2')}>
        {title ? (
          <Stack as="section" direction="vertical" gap={2}>
            <Stack justify="space-between" align="center">
              <Heading>{title}</Heading>

              <span>{badges || null}</span>
            </Stack>
            <Tagline>{tagline}</Tagline>
          </Stack>
        ) : null}
        {props.children}
      </Stack>
    </>

  )
}
