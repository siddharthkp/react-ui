import React from 'react'

import { Form, Input, Button, ThemeProvider } from 'react-ui'
import './style.css'

// import theme from './theme/theme.js'
// import './theme/theme.css'

function App() {
  return (
    <ThemeProvider>
      <Form style={{ marginTop: 100 }}>
        <Form.Header as="h2">Create an account</Form.Header>

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
    </ThemeProvider>
  )
}

export default App
