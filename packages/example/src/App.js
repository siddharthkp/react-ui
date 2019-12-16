import React from 'react'

import {
  Form,
  Input,
  Link,
  Button,
  Grid,
  Column,
  ThemeProvider
} from 'react-ui'
import { Breadcrumbs } from './breadcrumbs'
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
              Inbox <Badge css={{ cursor: 'pointer' }}>1</Badge>
            </Sidebar.Item>
            <Sidebar.Item href="/starred">
              Starred <Badge variant="starred">5</Badge>
            </Sidebar.Item>
            <Sidebar.Item href="/sent">
              Sent <Badge variant="sent">50</Badge>
            </Sidebar.Item>
            <Sidebar.Item href="/spam">
              Spam <Badge variant="spam">200</Badge>
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
            <Breadcrumbs marginBottom={3}>
              <Link href="/home">Home</Link>
              <Link href="/settings">Settings</Link>
              <span aria-current>Update profile details</span>
            </Breadcrumbs>

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
