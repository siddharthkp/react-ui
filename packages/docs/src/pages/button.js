import React from 'react'
import { ThemeProvider, Button, Link } from 'react-ui'
import {
  Page,
  Section,
  Props,
  Table,
  Badge,
  Example,
  Paragraph
} from '../components'

const Documentation = () => {
  return (
    <Page
      title="Button"
      tagline="A button is a way to ask users for action"
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview>
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
              options: ['primary', 'secondary', 'destructive', 'link'],
              description: '',
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
      </Section>

      <Section title="Customisation">
        <Paragraph>Button uses the following theme properties:</Paragraph>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>

          <Table.Row>
            <Table.Column span={4}>height</Table.Column>
            <Table.Column span={8}>sizes.Button</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>backgroundColor</Table.Column>
            <Table.Column span={8}>
              variants.Button[variant].backgroundColor
            </Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>color</Table.Column>
            <Table.Column span={8}>variants.Button[variant].color</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}>borderColor</Table.Column>
            <Table.Column span={8}>
              variants.Button[variant].borderColor
            </Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}></Table.Column>
            <Table.Column span={8} css={{ fontStyle: 'italic' }}>
              + :hover, :focus, :active states
            </Table.Column>
          </Table.Row>
        </Table>
        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            // overwrite the size for Button
            sizes: { Button: 8 },
            
            // add new variant "warning" on top of
            // existing variants in theme
            variants: {
              Buttons: {
                warning: {
                  backgroundColor: 'yellows.700',
                  color: 'white',
                  borderColor: 'yellows.700',
                  ':hover': {
                    backgroundColor: 'yellows.600',
                    borderColor: 'yellows.600'
                  },
                  ':focus': {
                    backgroundColor: 'yellows.600',
                    borderColor: 'yellows.700'
                  },
                  ':active': {
                    backgroundColor: 'yellows.800',
                    borderColor: 'yellows.800'
                  }
                }, 
                link: {

                }
              }
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}> 
            <Button variant="warning">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview gap={4}>
            <ThemeProvider
              components={{
                sizes: { Button: 8 },
                variants: {
                  Buttons: {
                    warning: {
                      backgroundColor: 'yellows.700',
                      color: 'white',
                      borderColor: 'yellows.700',
                      ':hover': {
                        backgroundColor: 'yellows.600',
                        borderColor: 'yellows.600'
                      },
                      ':focus': {
                        backgroundColor: 'yellows.600',
                        borderColor: 'yellows.700'
                      },
                      ':active': {
                        backgroundColor: 'yellows.800',
                        borderColor: 'yellows.800'
                      }
                    }
                  }
                }
              }}
            >
              <Button variant="warning">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
