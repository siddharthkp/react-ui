import React from 'react'
import { ThemeProvider, Input, Link } from 'react-ui'
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
      title="Input"
      tagline="Use Input to request information from the user"
    >
      <Example>
        <Example.Preview>
          <Input type="text" placeholder="Please enter your name" />
        </Example.Preview>
        <Example.Code>
          {`
            <Input type="text" placeholder="Please enter your name" />
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'type',
              type: 'string',
              description:
                'type of avatar, example: text, password, number, etc.',
              default: 'text'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Paragraph>
          Inputs can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Paragraph>

        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <Input type="text" placeholder="Please enter your name" />
            <Input type="password" defaultValue="super_secret_password" />
            <Input type="text" disabled placeholder="Please enter your name" />
            <Input type="text" invalid placeholder="Please enter your name" />
          </Example.Preview>
          <Example.Code>{`
            <Input type="text" placeholder="Please enter your name" />
            <Input type="password" defaultValue="super_secret_password" />
            <Input type="text" disabled placeholder="Please enter your name" />
            <Input type="text" invalid placeholder="Please enter your name" />
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Customisation">
        <Paragraph>Input uses the following theme properties:</Paragraph>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>height</Table.Column>
            <Table.Column span={8}>sizes.Input</Table.Column>
          </Table.Row>
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
            // add to theme.sizes 
            sizes: { Input: 12 },
            // add Input component styles
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
            <Input type="text" placeholder="Please enter your name" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                sizes: { Input: 12 },
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
              <Input type="text" placeholder="Please enter your name" />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
