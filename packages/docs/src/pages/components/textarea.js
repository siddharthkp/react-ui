import React from 'react'
import { ThemeProvider, Textarea, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Textarea"
      tagline="Use Textarea to request a lot of information from user."
    >
      <Para>
        Extends <Link href="/components/Input">Input</Link>.
      </Para>
      <Example>
        <Example.Preview>
          <Textarea placeholder="Please enter your address" />
        </Example.Preview>
        <Example.Code>
          {`
            <Textarea placeholder="Please enter your address" />
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'rows',
              type: 'number',
              description: 'Number of rows in textarea (html attribute)'
            },
            {
              name: '+',
              type: 'props of Input',
              description: ''
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Para>
          Texarea can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Para>

        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <Textarea placeholder="Please enter your address" />
            <Textarea disabled placeholder="Please enter your address" />
            <Textarea invalid placeholder="Please enter your address" />
          </Example.Preview>
          <Example.Code>{`
            <Textarea placeholder="Please enter your address" />
            <Textarea disabled placeholder="Please enter your address" />
            <Textarea invalid placeholder="Please enter your address" />
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

        <Para>
          Textarea extends Input and uses the following theme properties:
        </Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Textarea</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>height</Table.Column>
            <Table.Column span={8}>Textarea.sizes</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'
          
          // overwrite Textarea styles
          components.Textarea = {
            sizes: { medium: 10 }, // medium is default size
            fontSize: 4,
            paddingX: 2,
            border: '2px solid',
            borderColor: 'green',
            '::placeholder': {
              color: 'green'
            }
            ':focus': {
              outline: 'none',
              borderColor: 'lightgreen'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Textarea placeholder="Please enter your address" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                Textarea: {
                  sizes: { medium: 10 },
                  fontSize: 4,
                  paddingX: 2,
                  border: '2px solid',
                  borderColor: 'green',
                  '::placeholder': {
                    color: 'green'
                  },
                  ':focus': {
                    outline: 'none',
                    borderColor: 'lightgreen'
                  }
                }
              }}
            >
              <Textarea placeholder="Please enter your address" />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
