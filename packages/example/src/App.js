import React from 'react'

import {
  Form,
  Input,
  Textarea,
  Link,
  Switch,
  Button,
  Grid,
  Column,
  ThemeProvider
} from 'react-ui'
import { Breadcrumb } from 'react-ui'
import { Sidebar, Badge } from './sidebar'
import './style.css'

import theme from './theme/theme.js'
// import './theme/theme.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Column span={2}>
          <Sidebar>
            <Sidebar.Item href="/inbox">
              <span>Inbox</span> <Badge css={{ cursor: 'pointer' }}>1</Badge>
            </Sidebar.Item>
            <Sidebar.Item href="/starred">
              <span>Starred</span> <Badge variant="starred">5</Badge>
            </Sidebar.Item>
            <Sidebar.Item href="/sent">
              <span>Sent</span> <Badge variant="sent">50</Badge>
            </Sidebar.Item>
            <Sidebar.Item href="/spam">
              <span>Spam</span> <Badge variant="spam">200</Badge>
            </Sidebar.Item>
          </Sidebar>
        </Column>

        <Column span={10}>
          <div
            style={{
              width: 400,
              margin: 'auto',
              marginTop: 40
            }}
          >
            <Breadcrumb marginBottom={3}>
              <Link href="/home">Home</Link>
              <Link href="/settings">Settings</Link>
              <span>Update profile details</span>
            </Breadcrumb>

            <Form>
              <Form.Header as="h2">Update profile details</Form.Header>
              <Form.Field label="Full name">
                <Input placeholder="Enter your username" />
              </Form.Field>
              <Form.Field label="Email">
                <Input placeholder="Enter your email" />
              </Form.Field>
              <Form.Field label="Change password">
                <Input placeholder="Enter a password" />
              </Form.Field>
              <Form.Field label="Change password">
                <Textarea placeholder="Enter a password" />
              </Form.Field>
              <Form.Field label="Remember me">
                <Switch defaultOn />
              </Form.Field>
              <Form.Field>
                <Button>Update profile</Button>
              </Form.Field>
            </Form>
          </div>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App
