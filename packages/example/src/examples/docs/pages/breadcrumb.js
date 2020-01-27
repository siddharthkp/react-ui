import React from 'react'
import { ThemeProvider, Breadcrumb, Element, Link, Stack } from 'react-ui'
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
          <Heading>Breadcrumb</Heading>

          <Badge>accessible</Badge>
        </Stack>
        <Tagline>
          A breadcrumb helps the user identify the hierarchy of page within the
          application.
        </Tagline>
      </section>

      <section id="example">
        <Example>
          <Example.Preview>
            <Breadcrumb>
              <Link href="/home">Home</Link>
              <Link href="/home">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </Example.Preview>
          <Example.Code>
            {`
              <Breadcrumb>
                <Link href="/home">Home</Link>
                <Link href="/home">Settings</Link>
                <span>Notifications</span>
              </Breadcrumb>
            `}
          </Example.Code>
        </Example>
      </section>

      <section id="props">
        <SectionHeading>Props</SectionHeading>
        <Props
          props={[
            {
              name: 'children',
              type: '[ React elements ]',
              description: 'url of image to use as avatar',
              default: ''
            },
            {
              name: 'separator',
              type: 'React element',
              description: 'size of the avatar',
              default: '"/"'
            }
          ]}
        />
      </section>

      <section id="examples">
        <Link href="#examples">
          <Heading
            as="h2"
            css={{ fontSize: 5, fontWeight: 'normal', color: 'text.body' }}
          >
            Examples
          </Heading>
        </Link>
      </section>

      <section id="size">
        <ExampleHeading>Custom seperator</ExampleHeading>
        <Example>
          <Example.Preview>
            <Breadcrumb separator=">">
              <Link href="/home">Home</Link>
              <Link href="/home">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </Example.Preview>
          <Example.Code>{`
            <Breadcrumb separator=">">
              <Link href="/home">Home</Link>
              <Link href="/home">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          `}</Example.Code>
        </Example>
      </section>

      <section id="customisation">
        <Link href="#customisation">
          <SectionHeading>Customisation</SectionHeading>
        </Link>

        <Paragraph>
          Breadcrumb has the following customisable elements:
        </Paragraph>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>Breadcrumb</Table.Row>
          <Table.Row>BreadcrumbItem</Table.Row>
          <Table.Row>BreadcrumbSeparator</Table.Row>
          <Table.Row>Link</Table.Row>
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
