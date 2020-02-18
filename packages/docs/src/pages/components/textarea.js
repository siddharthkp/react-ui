import React from 'react'
import { ThemeProvider, Textarea, Link } from 'react-ui'
import {
  Page,
  Props,
  Example,
  Section,
  Table,
  Paragraph
} from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Textarea"
      tagline="Use Textarea to request a lot of information from user."
    >
      <Paragraph>
        Extends <Link href="/components/Input">Input</Link>.
      </Paragraph>
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
        <Paragraph>
          Texarea can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Paragraph>

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
        <Paragraph>
          Textarea extends Input and uses the following theme properties:
        </Paragraph>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>color</Table.Column>
            <Table.Column span={8}>colors.text.body</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>placeholder color</Table.Column>
            <Table.Column span={8}>colors.text.subtle</Table.Column>
          </Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            // Textarea extends Input styles
            Input: {
              fontSize: 4,
              ':hover': {
                borderColor: 'greens.400'
              },
              ':focus': {
                borderColor: 'greens.600'
              }
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
                Input: {
                  fontSize: 4,
                  ':hover': {
                    borderColor: 'greens.400'
                  },
                  ':focus': {
                    borderColor: 'greens.600'
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
