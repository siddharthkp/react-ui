import React from 'react'
import { Example } from 'react-ui/helpers'

import { Avatar } from 'react-ui'
export default { title: 'Button' }

export const Basic = () => (
  <Example>
    <Avatar src="https://github.com/sameen-shi.png" />
  </Example>
)

export const Sizes = () => (
  <Example>
    <Avatar size="small" src="https://github.com/sameen-shi.png" />
    <Avatar size="medium" src="https://github.com/sameen-shi.png" />
    <Avatar size="large" src="https://github.com/sameen-shi.png" />
  </Example>
)
