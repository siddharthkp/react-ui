import React from 'react'

import {
  Form,
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
  ThemeProvider
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

            <Menu>
              <Sidebar.Item
                as={Menu.Button}
                css={{
                  display: ['block', 'block'],
                  marginX: 2,
                  paddingRight: 4,
                  backgroundImage: `url(${Select.caret})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '96% 50%'
                }}
              >
                {selectedLabel}
              </Sidebar.Item>
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
          </Sidebar>
        </Column>

        <Column span={[12, 9]}>
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
              <Form.Field>
                <Button marginBottom={2}>Update profile</Button>
                <Button margin={2} variant="secondary">
                  Update profile
                </Button>
                <Button margin={2} variant="link">
                  Update profile
                </Button>
                <Button margin={2} variant="destructive">
                  Update profile
                </Button>
              </Form.Field>
            </Form>
          </div>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App
