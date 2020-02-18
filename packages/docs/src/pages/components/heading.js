import React from 'react'
import { ThemeProvider, Heading, Link } from 'react-ui'
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
    <Page title="Heading" tagline="Headings help give the page some structure.">
      <Example>
        <Example.Preview>
          <Heading>Page heading</Heading>
        </Example.Preview>
        <Example.Code>
          {`
            <Heading>Page heading</Heading>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'as',
              type: 'one of',
              options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
              description: 'Semantic HTML element for heading',
              default: '"h1"'
            },
            {
              name: 'size',
              type: 'one of',
              options: [
                'units on the fontSizes scale',
                'units on the sizes.Heading scale'
              ],
              description: 'Font size for heading from theme.fontSizes'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Paragraph>Headings can take their size from two places:</Paragraph>

        <Example title="1. fontSize units from theme:">
          <Example.Preview
            direction="vertical"
            justify="space-between"
            css={{ height: 250 }}
          >
            <Heading size={8}>Size 8</Heading>
            <Heading size={7}>Size 7</Heading>
            <Heading size={6}>Size 6</Heading>
          </Example.Preview>
          <Example.Code>{`
            <Heading size={8}>Size 8</Heading>
            <Heading size={7}>Size 7</Heading>
            <Heading size={6}>Size 6</Heading>
          `}</Example.Code>
        </Example>

        <Example title="2. Decisions from sizes.Heading:">
          <Example.Preview
            direction="vertical"
            justify="space-between"
            css={{ height: 250 }}
          >
            <Heading size="page">Page heading</Heading>
            <Heading size="section">Section heading</Heading>
            <Heading size="paragraph">Paragraph heading</Heading>
          </Example.Preview>
          <Example.Code>{`
            <Heading size="page">Page heading</Heading>
            <Heading size="section">Section heading</Heading>
            <Heading size="paragraph">Paragraph heading</Heading>
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Customisation">
        <Paragraph>Heading uses the following theme properties:</Paragraph>

        <Table>
          <Table.Header>
            <Table.Column span={3}>Property</Table.Column>
            <Table.Column span={9}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={3}>size</Table.Column>
            <Table.Column span={9}>
              theme.fontSizes & sizes.Heading
            </Table.Column>
          </Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const theme= {
            fontSizes: [
              '0px', '12px', '14px', '16px', '24px', '32px', '48px', '64px'
            ]
          }

          const components = {
            sizes: {
              Heading: {
                page: 8,
                section: 6,
                paragraph: 4
              }
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider theme={theme} components={components}>
            <YourApp>
              <Heading size="page">Page heading</Heading>
              <Heading size="section">Section heading</Heading>
              <Heading size="paragraph">Paragraph heading</Heading>
            </YouApp>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview
            direction="vertical"
            justify="space-between"
            css={{ height: 250 }}
          >
            <ThemeProvider>
              <Heading size="page">Page heading</Heading>
              <Heading size="section">Section heading</Heading>
              <Heading size="paragraph">Paragraph heading</Heading>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
