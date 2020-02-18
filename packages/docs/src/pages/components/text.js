import React from 'react'
import { ThemeProvider, Link, Text } from 'react-ui'
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
      title="Text"
      tagline="Text is a shortcut to apply styles to a text block"
    >
      <Example>
        <Example.Preview>
          <Text>Text might seem like a boring component.</Text>
        </Example.Preview>
        <Example.Code>
          {`
            <Text>Text might seem like a boring component.</Text>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'size',
              type: 'enum',
              options: ['units on the fontSizes scale'],
              description: 'fontSize for Text',
              default: 'inherit'
            },
            {
              name: 'align',
              type: 'enum',
              options: [
                'left',
                'right',
                'center',
                'justify',
                'inherit',
                'initial'
              ],
              description: 'css alignment property',
              default: 'inherit'
            },
            {
              name: 'variant',
              type: 'enum',
              options: ['default', 'subtle'],
              description: '',
              default: 'default'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Variants">
          <Example.Preview direction="vertical" gap={2}>
            <Text>Text might seem like a boring component</Text>
            <Text variant="subtle">
              but can we incredibly handy with variants
            </Text>
            <Text variant="danger">to quickly express context</Text>
          </Example.Preview>
          <Example.Code>{`
            <Text>Text might seem like a boring component</Text>
            <Text variant="subtle">but can we incredibly handy with variants</Text>
            <Text variant="danger">to quickly express context</Text>
          `}</Example.Code>
        </Example>

        <Example title="Alignment">
          <Example.Preview direction="vertical" gap={2}>
            <Text>left</Text>
            <Text align="center">center</Text>
            <Text align="right">right</Text>
          </Example.Preview>
          <Example.Code>{`
            <Text>left</Text>
            <Text align="center">center</Text>
            <Text align="right">right</Text>
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Customisation">
        <Paragraph>Link uses the following theme properties:</Paragraph>
        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>color</Table.Column>
            <Table.Column span={8}>variants.Text[variant].color</Table.Column>
          </Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            Text: {
              variants: {
                // adds variant success for Link
                // overrides properties it if it already exists
                success: { color: 'greens.700' }
              }
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}> 
            <Text>Text might seem like a boring component</Text>
            <Text variant="subtle">but can we incredibly handy with variants</Text>
            <Text variant="success">to quickly express context</Text>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical" gap={2}>
            <ThemeProvider
              components={{
                Text: {
                  variants: {
                    success: {
                      color: 'greens.700'
                    }
                  }
                }
              }}
            >
              <Text>Text might seem like a boring component</Text>
              <Text variant="subtle">
                but can we incredibly handy with variants
              </Text>
              <Text variant="success">to quickly express context</Text>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
