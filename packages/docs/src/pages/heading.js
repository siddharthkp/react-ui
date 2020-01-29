import React from 'react'
import { ThemeProvider, Avatar, Heading, Link } from 'react-ui'
import { Page, Props, Example, Section, Table, Paragraph } from '../components'

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
        <Example title="Size">
          <Example.Preview direction="vertical" gap={2}>
            <Heading size={8}>Size 8</Heading>
            <Heading size="page">Size 8</Heading>

            <Heading size={7}>Size 7</Heading>
            <Heading size="section">Size 7</Heading>

            <Heading size={6}>Size 6</Heading>
            <Heading size="paragraph">Size 6</Heading>
          </Example.Preview>
          <Example.Code>{`
            <Heading size={8}>Page Heading</Heading>
            <Heading size={7}>Section Heading</Heading>
            <Heading size={6}>Paragraph Heading</Heading>
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Customisation">
        <Paragraph>Avatar uses the following theme properties:</Paragraph>

        <Table>
          <Table.Header>
            <Table.Column span={3}>Property</Table.Column>
            <Table.Column span={3}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={3}>size</Table.Column>
            <Table.Column span={3}>sizes.Avatar</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={3}>borderColor</Table.Column>
            <Table.Column span={3}>Avatar.borderColor</Table.Column>
          </Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            sizes: {
              Avatar: {
                xsmall: 5,
                small: 7,
                medium: 9,
                large: 12,
                xlarge: 15
              }
            },
            Avatar: {
              borderColor: 'blues.200'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Avatar size="xsmall" src="https://github.com/sameen-shi.png" />
            <Avatar size="medium" src="https://github.com/sameen-shi.png" />
            <Avatar size="xlarge" src="https://github.com/sameen-shi.png" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                sizes: { Avatar: { xsmall: 5, xlarge: 15 } },
                Avatar: {
                  borderColor: 'blues.200'
                }
              }}
            >
              <Avatar size="xsmall" src="https://github.com/sameen-shi.png" />
              <Avatar size="medium" src="https://github.com/sameen-shi.png" />
              <Avatar size="xlarge" src="https://github.com/sameen-shi.png" />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
