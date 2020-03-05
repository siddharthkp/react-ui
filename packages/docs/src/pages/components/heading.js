import React from 'react'
import { ThemeProvider, Heading, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

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
        <Para>Headings can take their size from two places:</Para>

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
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Please read the docs on{' '}
            <Link href="/core-concepts/customising-components">
              customising components
            </Link>{' '}
            first.
          </Text>
        </Para>

        <Para>Heading uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={3}>Property</Table.Column>
            <Table.Column span={9}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={3}>size</Table.Column>
            <Table.Column span={9}>tokens.fontSizes</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          /* 
            Scale: 
          */
          const theme = {
            fontSizes: [
              '0px', '12px', '14px', '16px', '24px', '32px', '48px', '64px', '72px'
            ]
          }

          /* 
            Decisions: 
            You can create aliases in scales based on the scale.
          */
          theme.fontSizes.Heading = {
            page: 8, // reads from theme.fontSizes.8
            section: 6,
            paragraph: 4
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
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
