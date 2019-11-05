import React from 'react'
import { Example } from 'react-ui/helpers'

import { InputGroup, Input, Button } from 'react-ui'
export default { title: 'Input Group' }

export const Simple = () => (
  <Example>
    <InputGroup>
      <Input placeholder="What's your name?" />
      <Button>Click me</Button>
    </InputGroup>
  </Example>
)

export const Combinations = () => (
  <Example>
    <InputGroup marginBottom={2}>
      <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </InputGroup>
    <br />
    <InputGroup marginBottom={2}>
      <Button>Refresh token</Button>
      <Input defaultValue="*******" />
    </InputGroup>
    <br />
    <InputGroup marginBottom={2}>
      <Input placeholder="username" />
      <Input placeholder="password" />
      <Button>Login</Button>
    </InputGroup>
    <br />
    <InputGroup marginBottom={2}>
      <Input defaultValue="*******" />
      <Button>Copy token</Button>
      <Button>Refresh token</Button>
    </InputGroup>
    <br />
    <InputGroup marginBottom={2}>
      <InputGroup.Text>@</InputGroup.Text>
      <Input placeholder="username" />
    </InputGroup>
    <br />
    <InputGroup marginBottom={2}>
      <Input placeholder="username" />
      <InputGroup.Text>@email.com</InputGroup.Text>
    </InputGroup>
  </Example>
)
