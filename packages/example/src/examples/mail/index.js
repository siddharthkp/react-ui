import React from 'react'

import {
  Form,
  Text,
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
import theme from './theme.js'

function App() {
  const [selectedLabel, selectLabel] = React.useState('Inbox')

  return (
    <ThemeProvider theme={theme} designMode>
      <Grid>
        <Column span={[12, 12, 2]}>
          <Sidebar>
            <Stack
              justify="center"
              marginBottom={4}
              css={{ display: ['none', 'none', 'flex'] }}
            >
              <Avatar
                src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
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

            <Stack
              justify="space-between"
              css={{ display: ['flex', 'flex', 'none'], paddingX: 4 }}
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

        <Column
          span={[12, 12, 10]}
          style={{ backgroundColor: 'App.background' }}
        >
          <Element
            style={{
              height: '100vh',
              paddinY: [5, 5, 10],
              paddingX: [5, 5, 10],
              color: 'text.body'
            }}
          >
            <Breadcrumb marginBottom={3}>
              <Link href="/home">Home</Link>
              <span>{selectedLabel}</span>
            </Breadcrumb>

            <Stack direction="vertical">
              <Grid>
                <Column span={1}>star</Column>
                <Column span={[10, 2, 2]}>
                  <Text>chantastic</Text>
                </Column>
                <Column span={[1, 0, 0]}>
                  <Text>12/20/19</Text>
                </Column>

                <Column span={[12, 8, 8]}>
                  <Text>Stride Your Limp -</Text>
                  <Text color="text.subtle">
                    I don't trust anyone who doesn't walk with a limp —
                    metaphorically, of course. Losing leaves a mark.
                  </Text>
                </Column>
                <Column span={[0, 1, 1]}>12/20/19</Column>
              </Grid>
            </Stack>
          </Element>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App

// <Form>
//               <Form.Header as="h2">Update profile details</Form.Header>
//               <Form.Field label="Full name" isRequired>
//                 <Input placeholder="Enter your username" />
//               </Form.Field>
//               <Form.Field label="Email">
//                 <Input placeholder="Enter your email" />
//               </Form.Field>
//               <Form.Field label="Change password">
//                 <Input placeholder="Enter a password" />
//               </Form.Field>
//               <Form.Field label="Weather">
//                 <Select>
//                   <option value="">What's the weather like?</option>
//                   <option value="hot">Hot</option>
//                   <option value="cold">Cold</option>
//                 </Select>
//               </Form.Field>
//               <Form.Field label="Change password">
//                 <Textarea placeholder="Enter a password" />
//               </Form.Field>
//               <Form.Field label="Remember me">
//                 <Switch />
//               </Form.Field>
//               <Element marginX={6} marginBottom={2}>
//                 <Button>Update profile</Button>
//               </Element>
//             </Form>
