import React from 'react'
import { ThemeProvider, Spinner, Link } from 'react-ui'
import { Page, Props, Example, Section, Table, Paragraph } from '../components'

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
        <Paragraph>Spinner uses the following theme properties:</Paragraph>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>width + height</Table.Column>
            <Table.Column span={8}>sizes.Spinner</Table.Column>
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

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            sizes: {
              Spinner: {
                small: 4,
                large: 10
              }
            },
            Spinner: {
              borderColor: 'blues.100',
              borderLeftColor: 'blues.500'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Spinner size="small" />
            <Spinner size="large" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview align="center" gap={4}>
            <ThemeProvider
              components={{
                sizes: { Spinner: { small: 4, large: 10 } },
                Spinner: {
                  borderColor: 'blues.100',
                  borderLeftColor: 'blues.500'
                }
              }}
            >
              <Spinner size="small" />
              <Spinner size="large" />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
