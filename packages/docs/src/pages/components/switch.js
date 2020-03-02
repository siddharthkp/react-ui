import React from 'react'
import { ThemeProvider, Switch, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Input"
      tagline="Use Input to request information from the user"
    >
      <Example>
        <Example.Preview>
          <Switch />
        </Example.Preview>
        <Example.Code>
          {`
            <Switch />
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'value',
              type: 'boolean',
              description: '',
              default: 'false'
            },
            {
              name: 'defaultValue',
              type: 'boolean',
              description: '',
              default: ''
            },
            {
              name: 'onChange',
              type: 'function',
              description: 'function to call when value changes',
              default: ''
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: '',
              default: 'false'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Para>
          Switch can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Para>

        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <Switch />
            <Switch defaultValue={true} />
            <Switch disabled />
          </Example.Preview>
          <Example.Code>{`
            <Switch />
            <Switch defaultValue={true} />
            <Switch disabled />
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

        <Para>Switch uses the following theme keys:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>backgroundColor</Table.Column>
            <Table.Column span={8}>
              colors.Switch.backgroundOff, colors.Switch.backgroundOn
            </Table.Column>
          </Table.Row>
        </Table>

        <Para>and has the following customisable elements:</Para>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>SwitchContainer</Table.Row>
          <Table.Row>SwitchBackground</Table.Row>
          <Table.Row>SwitchToggle</Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { theme, components } from 'react-ui/themes/base'

          components.Switch = {
            colors: {
              backgroundOn: 'blue',
              backgroundOff: 'black'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider theme={theme} components={components}>
            <Switch />
            <Switch defaultValue={true} />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical" gap={2}>
            <ThemeProvider
              components={{
                Switch: {
                  colors: {
                    backgroundOff: 'black',
                    backgroundOn: 'blue'
                  }
                }
              }}
            >
              <Switch />
              <Switch defaultValue={true} />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
