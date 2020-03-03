import React from 'react'
import { ThemeProvider, Button, Link, Text } from 'react-ui'
import {
  Page,
  Section,
  Props,
  Table,
  Badge,
  Example,
  Para,
  Code
} from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Button"
      tagline="A button is a way to ask users for action"
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview align="center">
          <Button>Log in</Button>
        </Example.Preview>
        <Example.Code>
          {`
              <Button>Log in</Button>
            `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'type',
              type: 'enum',
              options: ['submit', 'button', 'reset'],
              description: '',
              default: 'submit'
            },
            {
              name: 'variant',
              type: 'enum',
              description: 'defined in theme',
              default: 'primary'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Variants">
          <Example.Preview gap={4}>
            <Button>Log in</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="link">Reset</Button>
          </Example.Preview>
          <Example.Code>{`
            <Button>Log in</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="destructive">Delete project</Button>
            <Button variant="link">Reset form</Button>
          `}</Example.Code>
        </Example>
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Note: The variant "link" should be used sparingly. Because it
            imitates a hyperlink, it does have great focus and active states.
            It's recommended to use it for scenarios where there is already
            ample user feedback after the button is clicked.
          </Text>
        </Para>
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

        <Para>Button uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Button</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>height</Table.Column>
            <Table.Column span={8}>sizes.Button</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>variant</Table.Column>
            <Table.Column span={8}>components.Button.variants</Table.Column>
          </Table.Row>
        </Table>

        <Para>
          <Text>
            You can add your own variants or modify the existing ones in{' '}
            <Code>components.Button.variants</Code>:
          </Text>
        </Para>

        <Example>
          <Example.Code lang="js">{`
          import { theme, components } from 'react-ui/themes/base'

          // overwrite Button sizes
          components.Button.sizes = {
             small: 6, medium: 10
          }
          
          // overwrite Button variants
          // the default variant is primary
          components.Button.variants = {
            primary: {
              backgroundColor: 'green',
              borderColor: 'green',
              color: 'white',
              ':hover':  { backgroundColor: 'darkgreen' },
              ':focus':  { backgroundColor: 'darkgreen' },
              ':active': { backgroundColor: 'seagreen' }
            },
            danger: {
              backgroundColor: 'red',
              borderColor: 'red',
              color: 'white',
              ':hover':  {backgroundColor: 'darkred' },
              ':focus':  {backgroundColor: 'red' },
              ':active': {backgroundColor: 'maroon' }
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider theme={theme} components={components}> 
            <Button>Save</Button>
            <Button variant="danger">Delete</Button>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview gap={4} align="center">
            <ThemeProvider
              components={{
                Button: {
                  sizes: { small: 6, medium: 10 },
                  variants: {
                    primary: {
                      backgroundColor: 'green',
                      borderColor: 'green',
                      color: 'white',
                      ':hover': { backgroundColor: 'seagreen' },
                      ':focus': { backgroundColor: 'green' },
                      ':active': { backgroundColor: 'darkgreen' }
                    },
                    danger: {
                      backgroundColor: 'red',
                      borderColor: 'red',
                      color: 'white',
                      ':hover': { backgroundColor: 'darkred' },
                      ':focus': { backgroundColor: 'red' },
                      ':active': { backgroundColor: 'maroon' }
                    }
                  }
                }
              }}
            >
              <Button variant="primary">Cancel</Button>
              <Button variant="danger" size="small">
                Delete
              </Button>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
