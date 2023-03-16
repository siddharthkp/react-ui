import React from 'react'
import { ThemeProvider, Card, Stack, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page title="Card">
      <Example>
        <Example.Preview>
          <Card>content inside</Card>
        </Example.Preview>
        <Example.Code>
          {`
            <Card>content inside</Card>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'fullWidth',
              type: 'boolean',
              description: 'Make card take 100% width of the container',
              default: 'false'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example>
          <Example.Preview>
            <Card>
              <Stack justify="center">
                <Stack justify="space-between" align="center">
                  <Stack direction="vertical" align="flex-end">
                    <Text size={6}>09:15</Text>
                    <Text size={4} variant="subtle">
                      AMS
                    </Text>
                  </Stack>
                  <Stack
                    direction="vertical"
                    align="center"
                    css={{ paddingX: 8 }}
                  >
                    <Text size={2}>8h 35</Text>
                    <Text size={1}>Direct</Text>
                  </Stack>
                  <Stack direction="vertical" align="flex-start">
                    <Text size={6}>11:50</Text>
                    <Text size={4} variant="subtle">
                      JFK
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </Example.Preview>
          <Example.Code>{`
            <Card>
              <Stack justify="center">
                <Stack justify="space-between" align="center">

                  <Stack direction="vertical" align="flex-end">
                    <Text size={6}>09:15</Text>
                    <Text size={4} variant="subtle">AMS</Text>
                  </Stack>

                  <Stack direction="vertical" align="center" css={{ paddingX: 8 }}>
                    <Text size={2}>8h 35</Text>
                    <Text size={1}>Direct</Text>
                  </Stack>

                  <Stack direction="vertical" align="flex-start">
                    <Text size={6}>11:50</Text>
                    <Text size={4} variant="subtle">JFK</Text>
                  </Stack>

                </Stack>
              </Stack>
            </Card>
          `}</Example.Code>
        </Example>

        <Example title="Full width">
          <Example.Preview>
            <Card fullWidth>
              <Stack justify="center">
                <Stack justify="space-between" align="center">
                  <Stack direction="vertical" align="flex-end">
                    <Text size={6}>09:15</Text>
                    <Text size={4} variant="subtle">
                      AMS
                    </Text>
                  </Stack>
                  <Stack
                    direction="vertical"
                    align="center"
                    css={{ paddingX: 8 }}
                  >
                    <Text size={2}>8h 35</Text>
                    <Text size={1}>Direct</Text>
                  </Stack>
                  <Stack direction="vertical" align="flex-start">
                    <Text size={6}>11:50</Text>
                    <Text size={4} variant="subtle">
                      JFK
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </Example.Preview>
          <Example.Code>{`
            <Card fullWidth>
              <Stack justify="center">
                <Stack justify="space-between" align="center">

                  <Stack direction="vertical" align="flex-end">
                    <Text size={6}>09:15</Text>
                    <Text size={4} variant="subtle">AMS</Text>
                  </Stack>

                  <Stack direction="vertical" align="center" css={{ paddingX: 8 }}>
                    <Text size={2}>8h 35</Text>
                    <Text size={1}>Direct</Text>
                  </Stack>

                  <Stack direction="vertical" align="flex-start">
                    <Text size={6}>11:50</Text>
                    <Text size={4} variant="subtle">JFK</Text>
                  </Stack>

                </Stack>
              </Stack>
            </Card>
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

        <Para>Card uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Card</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          components.Card = {
            width: 500,
            background: 'white',
            color: '#000',
            border: '1px solid',
            borderColor: '#EEEEEE',
            padding: 5,
            borderRadius: 2,
            boxShadow: 2
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Card>content inside</Card>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                Card: {
                  width: 500,
                  background: 'white',
                  color: '#000',
                  border: '1px solid',
                  borderColor: '#EEEEEE',
                  padding: 5,
                  borderRadius: 2,
                  boxShadow: 2
                }
              }}
            >
              <Card>content inside</Card>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
