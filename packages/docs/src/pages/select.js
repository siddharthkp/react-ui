import React from 'react'
import { ThemeProvider, Select, Link } from 'react-ui'
import { Page, Props, Example, Section, Table, Paragraph } from '../components'

const Documentation = () => {
  return (
    <Page title="Select" tagline="Use Select to request selection from a list">
      <Paragraph>
        Extends <Link href="/components/Input">Input</Link>.
      </Paragraph>
      <Example>
        <Example.Preview>
          <Select>
            <option>Please select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </Example.Preview>
        <Example.Code>
          {`
            <Select>
              <option>Please select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Select>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
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
          Select can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Paragraph>

        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <Select>
              <option>Please select an option</option>
            </Select>
            <Select defaultValue="1">
              <option>Please select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
            <Select disabled>
              <option>Please select an option</option>
            </Select>
            <Select invalid>
              <option>Please select an option</option>
            </Select>
          </Example.Preview>
          <Example.Code>{`
            <Select>
              <option>Please select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
            <Select defaultValue="1">
              <option>Please select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
            <Select disabled>
              <option>Please select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
            <Select invalid>
              <option>Please select an option</option>
              <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            </Select>
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Customisation">
        <Paragraph>
          Select extends Input and uses the following theme properties:
        </Paragraph>

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
            // Select extends Input styles
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
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Select>
              <option>Please select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
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
              <Select>
                <option>Please select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </Select>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
