import React from 'react'
import { Example } from 'react-ui/helpers'

import Button from './'

export default { title: 'Button' }

export const text = () => (
  <Example>
    <Button>Hello</Button>
  </Example>
)

export const emoji = () => (
  <Example>
    <Button>😀😎👍💯</Button>
  </Example>
)
