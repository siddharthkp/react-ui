import React from 'react'
import { ThemeProvider, Select, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page title="Select" tagline="Use Select to request selection from a list">
      <Para>
        Extends <Link href="/components/Input">Input</Link>.
      </Para>
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
        <Para>
          Select can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Para>

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
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Please read the docs on{' '}
            <Link href="/core-concepts/customising-components">
              customising components
            </Link>{' '}
            first.
          </Text>
        </Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>height</Table.Column>
            <Table.Column span={8}>Select.sizes</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Select</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            Select: {
              sizes: { small: 6, medium: 8, large: 10 },
              fontSize: 3,
              borderRadius: 1,
              paddingX: 2,

              border: '2px solid',
              borderColor: 'green',
              ':focus': {
                borderColor: 'darkgreen'
              },
              '&[aria-invalid]': {
                borderColor: 'red'
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
                Select: {
                  sizes: { small: 6, medium: 8, large: 10 },
                  fontSize: 3,
                  borderRadius: 1,
                  paddingX: 2,

                  border: '2px solid',
                  borderColor: 'green',
                  ':focus': {
                    borderColor: 'darkgreen'
                  },
                  '&[aria-invalid]': {
                    borderColor: 'red'
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
