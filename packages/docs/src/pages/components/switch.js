import React from 'react'
import { ThemeProvider, Switch, Link } from 'react-ui'
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
        <Paragraph>
          Switch can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Paragraph>

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
        <Paragraph>Switch uses the following theme keys:</Paragraph>

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
          <Table.Row>
            <Table.Column span={4}>height</Table.Column>
            <Table.Column span={8}>sizes.Spinner</Table.Column>
          </Table.Row>
        </Table>

        <Paragraph>and has the following customisable elements:</Paragraph>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>SwitchContainer</Table.Row>
          <Table.Row>SwitchBackground</Table.Row>
          <Table.Row>SwitchToggle</Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            sizes: { Switch: 4 },
            colors: {
              Switch: {
                // change supported colors
                backgroundOn: 'blues.600',
                backgroundOff: 'blues.300'
              }
            },
            // customise element by name
            SwitchContainer: {
              width: 10
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Switch />
            <Switch defaultValue={true} />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical" gap={2}>
            <ThemeProvider
              components={{
                sizes: { Switch: 4 },
                colors: {
                  Switch: {
                    backgroundOn: 'blues.600',
                    backgroundOff: 'blues.300'
                  }
                },
                SwitchContainer: {
                  width: 10
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
