import React from 'react'
import { Example } from 'react-ui/helpers'

import { Form, Input, Button } from 'react-ui'
export default { title: 'Form' }

export const Basic = () => (
  <Example>
    <Form marginTop={10}>
      <Form.Header as="h1">Create an account</Form.Header>

      <Form.Field label="Full name">
        <Input placeholder="Enter your username" />
      </Form.Field>
      <Form.Field label="Email">
        <Input placeholder="Enter your email" />
      </Form.Field>
      <Form.Field label="Create a password">
        <Input placeholder="Enter a password" />
      </Form.Field>
      <Form.Field>
        <Button>Sign up</Button>
      </Form.Field>
    </Form>
  </Example>
)
