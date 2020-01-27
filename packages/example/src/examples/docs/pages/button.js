import React from 'react'
import { ThemeProvider, Breadcrumb, Button, Link, Stack } from 'react-ui'
import {
  Table,
  Props,
  Badge,
  Example,
  Paragraph,
  Heading,
  Tagline,
  SectionHeading,
  ExampleHeading
} from '../components'

const Documentation = () => {
  return (
    <Stack direction="vertical" gap={16}>
      <section>
        <Stack justify="space-between" align="center">
          <Heading>Button</Heading>
          <Badge>accessible</Badge>
        </Stack>
        <Tagline>A button is a way to ask users for action</Tagline>
      </section>

      <section id="example">
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
      </section>

      <section id="props">
        <SectionHeading>Props</SectionHeading>
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
              options: ['primary', 'secondary', 'link', 'destructive'],
              description: '',
              default: 'primary'
            }
          ]}
        />
      </section>

      <section id="examples">
        <Link href="#examples">
          <SectionHeading>Examples</SectionHeading>
        </Link>
      </section>

      <section id="size">
        <ExampleHeading>Variants</ExampleHeading>
        <Example>
          <Example.Preview gap={4}>
            <Button>Log in</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="link">Reset form</Button>
            <Button variant="destructive">Delete project</Button>
          </Example.Preview>
          <Example.Code>{`
            <Button>Log in</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="link">Reset form</Button>
            <Button variant="destructive">Delete project</Button>
          `}</Example.Code>
        </Example>
      </section>

      <section id="customisation">
        <Link href="#customisation">
          <SectionHeading>Customisation</SectionHeading>
        </Link>
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
            Breadcrumb: {
              backgroundColor: 'blues.100',
              paddingX: 4,
              Link: {
                // this nested selector will only target
                // Link components inside Breadcrumb
                textDecoration: 'underline'
              }
            },
            BreadcrumbSeparator: {
              color: 'blues.200'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Breadcrumb separator=">">
              <Link href="/home">Home</Link>
              <Link href="/home">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                Breadcrumb: {
                  backgroundColor: 'blues.100',
                  paddingX: 4,
                  Link: {
                    textDecoration: 'underline'
                  }
                },
                BreadcrumbSeparator: {
                  color: 'blues.200'
                }
              }}
            >
              <Breadcrumb separator=">">
                <Link href="/home">Home</Link>
                <Link href="/home">Settings</Link>
                <span>Notifications</span>
              </Breadcrumb>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </section>
    </Stack>
  )
}

export default Documentation
