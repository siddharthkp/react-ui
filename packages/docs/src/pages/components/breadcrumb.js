import React from 'react'
import { ThemeProvider, Breadcrumb, Link, Text } from 'react-ui'
import {
  Table,
  Page,
  Section,
  Props,
  Badge,
  Example,
  Para
} from '../../components'

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
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Please read the docs on{' '}
            <Link href="/core-concepts/customising-components">
              customising components
            </Link>{' '}
            first.
          </Text>
        </Para>

        <Para>Breadcrumb has the following customisable elements:</Para>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>Breadcrumb</Table.Row>
          <Table.Row>BreadcrumbItem</Table.Row>
          <Table.Row>BreadcrumbSeparator</Table.Row>
          <Table.Row>Link</Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'
          
          components.Breadcrumb = {
            backgroundColor: 'skyblue',
            paddingX: 4,
            Link: {
              // this nested selector will only target
              // Link components inside Breadcrumb
              textDecoration: 'underline'
            },
          }

          components.BreadcrumbSeparator = {
            color: 'white'
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
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
                  backgroundColor: 'skyblue',
                  paddingX: 4,
                  Link: {
                    textDecoration: 'underline'
                  }
                },
                BreadcrumbSeparator: {
                  color: 'white'
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
