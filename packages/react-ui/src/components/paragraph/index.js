import React from 'react'
import { Stack } from '../stack'
import { merge } from '../../../utils'

function Paragraph({ css, ...props }) {
  return (
    <Stack
      as="p"
      css={merge(
        {
          margin: 0,
          '> span': { display: 'inline-block' }
        },
        css
      )}
      component="Paragraph"
      direction="vertical"
      gap={1}
      component="Paragraph"
      {...props}
    />
  )
}

export { Paragraph }
