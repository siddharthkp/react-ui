import React from 'react'
import { ThemeProvider, Breadcrumb, Link } from 'react-ui'
import {
  Table,
  Page,
  Section,
  Props,
  Badge,
  Example,
  Paragraph
} from '../components'

const Documentation = () => {
  return (
    <Page
      title="Breadcrumb"
      tagline="A breadcrumb helps the user identify the hierarchy of page within the
          application."
      badges={[<Badge key={0}>accessible</Badge>]}
    >
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

      <Section title="Props">
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
      </Section>

      <Section title="Examples">
        <Example title="Custom seperator">
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
      </Section>

      <Section title="Customisation">
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
      </Section>
    </Page>
  )
}

export default Documentation
