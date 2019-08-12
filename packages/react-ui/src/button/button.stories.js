import React from 'react'
import { Example } from 'react-ui/helpers'

import { Button } from 'react-ui'
export default { title: 'Button' }

export const Text = () => (
  <Example>
    <Button>Hello</Button>
  </Example>
)

export const Emoji = () => (
  <Example>
    <Button>😀😎👍💯</Button>
  </Example>
)
