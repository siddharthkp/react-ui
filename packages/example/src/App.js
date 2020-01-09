import React from 'react'

import {
  Form,
  Avatar,
  Input,
  Textarea,
  Select,
  Link,
  Switch,
  Button,
  Grid,
  Column,
  Breadcrumb,
  Stack,
  Menu,
  ThemeProvider,
  Element
} from 'react-ui'
import { Sidebar, Badge } from './sidebar'

import './style.css'
import theme from './theme/theme.js'

function App() {
  const [selectedLabel, selectLabel] = React.useState('Inbox')

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Column span={[12, 3]}>
          <Sidebar>
            <Element css={{ display: ['none', 'block'] }}>
              <Stack justify="center" marginBottom={4}>
                <Avatar
                  src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
                  alt="user avatar"
                  size="large"
                />
              </Stack>

              <Sidebar.Item
                selected={selectedLabel === 'Inbox'}
                onClick={() => selectLabel('Inbox')}
              >
                <span>Inbox</span> <Badge>1</Badge>
              </Sidebar.Item>
              <Sidebar.Item
                selected={selectedLabel === 'Starred'}
                onClick={() => selectLabel('Starred')}
              >
                <span>Starred</span> <Badge variant="starred">5</Badge>
              </Sidebar.Item>
              <Sidebar.Item
                selected={selectedLabel === 'Sent'}
                onClick={() => selectLabel('Sent')}
              >
                <span>Sent</span> <Badge variant="sent">50</Badge>
              </Sidebar.Item>
              <Sidebar.Item
                selected={selectedLabel === 'Spam'}
                onClick={() => selectLabel('Spam')}
              >
                <span>Spam</span> <Badge variant="spam">200</Badge>
              </Sidebar.Item>
            </Element>

            <Stack
              justify="space-between"
              css={{ display: ['flex', 'none'], paddingX: 4 }}
            >
              <Menu>
                <Menu.Button>{selectedLabel}</Menu.Button>
                <Menu.List>
                  <Menu.Item onSelect={() => selectLabel('Inbox')}>
                    <Stack as={Link} justify="space-between">
                      <span>Inbox</span> <Badge>1</Badge>
                    </Stack>
                  </Menu.Item>
                  <Menu.Item onSelect={() => selectLabel('Starred')}>
                    <Stack as={Link} justify="space-between">
                      <span>Starred</span> <Badge variant="starred">5</Badge>
                    </Stack>
                  </Menu.Item>
                  <Menu.Item onSelect={() => selectLabel('Sent')}>
                    <Stack as={Link} justify="space-between">
                      <span>Sent</span> <Badge variant="sent">50</Badge>
                    </Stack>
                  </Menu.Item>
                  <Menu.Item onSelect={() => selectLabel('Spam')}>
                    <Stack as={Link} justify="space-between">
                      <span>Spam</span> <Badge variant="spam">200</Badge>
                    </Stack>
                  </Menu.Item>
                </Menu.List>
              </Menu>

              <Avatar
                src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
                alt="user avatar"
                size="small"
              />
            </Stack>
          </Sidebar>
        </Column>

        <Column span={[12, 9]} style={{ backgroundColor: 'App.background' }}>
          <Element
            style={{
              width: 400,
              margin: 'auto',
              marginY: 40
            }}
          >
            <Breadcrumb marginBottom={3}>
              <Link href="/home">Home</Link>
              <Link href="/settings">Settings</Link>
              <span>Update profile details</span>
            </Breadcrumb>

            <Form>
              <Form.Header as="h2">Update profile details</Form.Header>
              <Form.Field label="Full name" isRequired>
                <Input placeholder="Enter your username" />
              </Form.Field>
              <Form.Field label="Email">
                <Input placeholder="Enter your email" />
              </Form.Field>
              <Form.Field label="Change password">
                <Input placeholder="Enter a password" />
              </Form.Field>
              <Form.Field label="Weather">
                <Select>
                  <option value="">What's the weather like?</option>
                  <option value="hot">Hot</option>
                  <option value="cold">Cold</option>
                </Select>
              </Form.Field>
              <Form.Field label="Change password">
                <Textarea placeholder="Enter a password" />
              </Form.Field>
              <Form.Field label="Remember me">
                <Switch />
              </Form.Field>
              <Element marginX={6} marginBottom={2}>
                <Button>Update profile</Button>
              </Element>
            </Form>
          </Element>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App
