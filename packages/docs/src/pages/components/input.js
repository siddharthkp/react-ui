import React from 'react'
import { ThemeProvider, Input, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

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
        <Para>
          Inputs can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Para>

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
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Please read the docs on{' '}
            <Link href="/core-concepts/customising-components">
              customising components
            </Link>{' '}
            first.
          </Text>
        </Para>

        <Para>Input uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Input</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>height</Table.Column>
            <Table.Column span={8}>Input.sizes</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { theme, components } from 'react-ui/themes/base'
          
          // overwrite Input styles
          components.Input = {
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
          <ThemeProvider theme={theme} components={components}>
            <Input type="text" placeholder="Please enter your name" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                Input: {
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
              <Input type="text" placeholder="Please enter your name" />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
