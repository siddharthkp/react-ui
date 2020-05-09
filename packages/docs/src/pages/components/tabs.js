import React from 'react'

import { ThemeProvider, Link, Text, Tabs, Stack } from 'react-ui'

import {
  Page,
  Props,
  Example,
  Section,
  Table,
  Para,
  Badge
} from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Tabs"
      tagline="Tabs are great for splitting information into sections to make them easy to consume."
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Tabs>
            <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
            <Tabs.Tab label="Tab 2">
              You can render anything you want here
            </Tabs.Tab>
            <Tabs.Tab label="Tab 3">Third tabs the charm!</Tabs.Tab>
          </Tabs>
        </Example.Preview>
        <Example.Code>
          {`
            <Tabs>
              <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
              <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
              <Tabs.Tab label="Tab 3">Third tabs the charm!</Tabs.Tab>
            </Tabs>
          `}
        </Example.Code>
      </Example>

      <Section title="Props: Tabs">
        <Props
          props={[
            {
              name: 'children',
              type: '[Tabs.Tab]',
              description: '',
              default: '',
              required: true
            }
          ]}
        />
      </Section>

      <Section title="Props: Tab">
        <Props
          props={[
            {
              name: 'label',
              type: 'string | React Element',
              description: '',
              default: '',
              required: true
            },
            {
              name: 'children',
              type: 'React Element',
              description: '',
              default: '',
              required: true
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Basic">
          <Example.Preview>
            <Tabs>
              <Tabs.Tab label="Primary">This is tab 1</Tabs.Tab>
              <Tabs.Tab label="Updates">
                You can render anything you want here
              </Tabs.Tab>
              <Tabs.Tab label="Forums">Third tabs the charm!</Tabs.Tab>
            </Tabs>
          </Example.Preview>
          <Example.Code>{`
             <Tabs>
              <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
              <Tabs.Tab label="Tab 2">
                You can render anything you want here
              </Tabs.Tab>
              <Tabs.Tab label="Tab 3">Third tabs the charm!</Tabs.Tab>
            </Tabs>
          `}</Example.Code>
        </Example>

        <Example title="Custom element as label">
          <Example.Preview>
            <Tabs>
              <Tabs.Tab
                label={
                  <Stack as="span" inline align="center" gap={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>
                    <Text>Primary</Text>
                  </Stack>
                }
              >
                This is tab 1
              </Tabs.Tab>
              <Tabs.Tab
                label={
                  <Stack as="span" inline align="center" gap={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <Text>Updates</Text>
                  </Stack>
                }
              >
                You can render anything you want here
              </Tabs.Tab>
              <Tabs.Tab
                label={
                  <Stack as="span" inline align="center" gap={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <Text>Forums</Text>
                  </Stack>
                }
              >
                Third tabs the charm!
              </Tabs.Tab>
            </Tabs>
          </Example.Preview>
          <Example.Code>{`
             <Tabs>
              <Tabs.Tab 
                label={
                  <Stack as="span" inline align="center" gap={2}>
                    <svg>...</svg>
                  </Stack>
                }
              >
                This is tab 1
              </Tabs.Tab>
              <Tabs.Tab 
                label={
                  <Stack as="span" inline align="center" gap={2}>
                    <svg>...</svg>
                  </Stack>
                }
              >
                You can render anything you want here
              </Tabs.Tab>
              <Tabs.Tab 
                label={
                  <Stack as="span" inline align="center" gap={2}>
                    <svg>...</svg>
                  </Stack>
                }
              >
                Third tabs the charm!
              </Tabs.Tab>
            </Tabs>
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Customisation">
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Please read the docs on{' '}
            <Link href="/core-concepts/customising-components">
              customising components
            </Link>{' '}
            first.
          </Text>
        </Para>

        <Para>Menu has the following customisable elements:</Para>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>Tabs</Table.Row>
          <Table.Row>TabList</Table.Row>
          <Table.Row>Tab</Table.Row>
          <Table.Row>TabPanels</Table.Row>
          <Table.Row>TabPanel</Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          components.TabList = {
            borderColor: 'grey'
          }
          components.Tab = {
            outline: 'none',
            fontSize: 3,
            height: 8,
            color: 'text.body',
            ':hover': {
              color: 'text.link'
            },
            '&[data-selected]': {
              color: 'text.link'
            }
          }
          components.TabPanel = {
            fontSize: 3,
            paddingY: 4,
            outline: 'none'
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Tabs>
              <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
              <Tabs.Tab label="Tab 2">
                You can render anything you want here
              </Tabs.Tab>
              <Tabs.Tab label="Tab 3">Third tabs the charm!</Tabs.Tab>
            </Tabs>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical" gap={4}>
            <ThemeProvider
              components={{
                TabList: {
                  borderColor: 'grey'
                },
                Tab: {
                  outline: 'none',
                  fontSize: 3,
                  height: 8,
                  color: 'text.body',
                  ':hover': {
                    color: 'text.link'
                  },
                  '&[data-selected]': {
                    color: 'text.link'
                  }
                },
                TabPanel: {
                  fontSize: 3,
                  paddingY: 4,
                  outline: 'none'
                }
              }}
            >
              <Tabs>
                <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
                <Tabs.Tab label="Tab 2">
                  You can render anything you want here
                </Tabs.Tab>
                <Tabs.Tab label="Tab 3">Third tabs the charm!</Tabs.Tab>
              </Tabs>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
