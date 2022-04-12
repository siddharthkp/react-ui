import React from 'react'

import { ThemeProvider, Alert, Link, Text, Stack } from 'react-ui'

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
      title="Alert"
      tagline="Show a message intended to draw the user's attention"
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Alert variant="warning">This is an important message!</Alert>
        </Example.Preview>
        <Example.Code>
          {`
            <Alert variant="warning">This is an important message!</Alert>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'variant',
              type: 'default | warning | success | destructive | info',
              description: 'Picked from the variants defined in theme',
              default: 'primary'
            },
            {
              name: 'type',
              type: 'polite | asertive',
              description:
                'Controls whether the assistive technology should read immediately ("assertive") or wait until the user is idle ("polite").',
              default: 'polite'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Variants">
          <Example.Preview direction="vertical" gap={4}>
            <Alert variant="default">Just a regular message</Alert>
            <Alert variant="warning">Oh oh, you should pay attention</Alert>
            <Alert variant="success">Kudos! You did the thing!</Alert>
            <Alert variant="destructive">We have bad news</Alert>
            <Alert variant="info">You should probably know this</Alert>
          </Example.Preview>
          <Example.Code>{`
            <Alert variant="default">Just a regular message</Alert>
            <Alert variant="warning">You should pay attention</Alert>
            <Alert variant="success">You did the thing!</Alert>
            <Alert variant="destructive">We have bad news</Alert>
            <Alert variant="info">You should probably know this</Alert>
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

        <Para>Alert uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Alert</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>variant</Table.Column>
            <Table.Column span={8}>components.Alert.variants</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          components.Alert = {
            fontSize: 3,
            borderRadius: 1,
            padding: 4,
            border: '1px solid',
            variants: {
              warning: {
                backgroundColor: 'gold',
                color: 'black',
                borderColor: 'black'
              },
              success: {
                backgroundColor: 'palegreen',
                color: 'darkgreen',
                borderColor: 'darkgreen'
              }
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Alert variant="warning">You should pay attention</Alert>
            <Alert variant="success">You did the thing!</Alert>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical">
            <ThemeProvider
              components={{
                Alert: {
                  fontSize: 3,
                  borderRadius: 1,
                  padding: 4,
                  border: '1px solid',
                  variants: {
                    warning: {
                      backgroundColor: 'gold',
                      color: 'black',
                      borderColor: 'black'
                    },
                    success: {
                      backgroundColor: 'palegreen',
                      color: 'darkgreen',
                      borderColor: 'darkgreen'
                    }
                  }
                }
              }}
            >
              <Stack direction="vertical" gap={4}>
                <Alert variant="warning">You should pay attention</Alert>
                <Alert variant="success">You did the thing!</Alert>
              </Stack>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
