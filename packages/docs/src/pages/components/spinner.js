import React from 'react'
import { ThemeProvider, Spinner, Link, Text, Stack } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page title="Spinner" tagline="Use a spinner to indicate loading states">
      <Example>
        <Example.Preview>
          <Spinner />
        </Example.Preview>
        <Example.Code>
          {`
            <Spinner />
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'size',
              type: 'enum',
              description: 'size of the spinner',
              options: ['small', 'medium', 'large'],
              default: 'small'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Size">
          <Example.Preview align="center" gap={2}>
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
          </Example.Preview>
          <Example.Code>{`
            <Spinner size="small"  />
            <Spinner size="medium" />
            <Spinner size="large"  />
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

        <Para>Spinner uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Spinner</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>size</Table.Column>
            <Table.Column span={8}>components.Spinner.sizes</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>borderColor</Table.Column>
            <Table.Column span={8}>Spinner.borderColor</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>spinning borderColor</Table.Column>
            <Table.Column span={8}>Spinner.borderLeftColor</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          // overwrite spinner styles
          components.Spinner = {
            sizes: { small: 2, medium: 4, large: 6 },
            borderColor: 'blues.100',
            borderLeftColor: 'blues.500'
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Spinner size="medium" />
            <Spinner size="large" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                Spinner: {
                  sizes: { small: 2, medium: 4, large: 6 },
                  borderColor: 'pink',
                  borderLeftColor: 'red'
                }
              }}
            >
              <Stack align="center" gap={4}>
                <Spinner size="medium" />
                <Spinner size="large" />
              </Stack>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
