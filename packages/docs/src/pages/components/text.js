import React from 'react'
import { ThemeProvider, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

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
            },
            {
              name: 'maxWidth',
              type: 'number [unit on tokens.sizes] or string with unit (150px)',
              description: 'Truncates text with ellipses'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Variants">
          <Example.Preview direction="vertical">
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
          <Example.Preview direction="vertical">
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

        <Example title="maxWidth">
          <Example.Preview direction="vertical">
            <Text maxWidth={12}>Truncate beyond max width</Text>
            <Text maxWidth="180px">Truncate beyond max width</Text>
          </Example.Preview>
          <Example.Code>{`
            <Text maxWidth={12}>Truncate beyond max width</Text>
            <Text maxWidth="180px">Truncate beyond max width</Text>
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

        <Para>Link uses the following theme properties:</Para>
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

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          // overwrite Text variants
          components.Text.variants = {
            default: { color: 'black' },
            subtle: { color: 'grey' },
            danger: { color: 'red' },
            success: { color: 'green' }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}> 
            <Text>Text might seem like a boring component</Text>
            <Text variant="subtle">but can we incredibly handy with variants</Text>
            <Text variant="success">to quickly express context</Text>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical">
            <ThemeProvider
              components={{
                Text: {
                  variants: {
                    default: { color: 'black' },
                    subtle: { color: 'grey' },
                    danger: { color: 'red' },
                    success: { color: 'green' }
                  }
                }
              }}
            >
              <Text>Text might seem like a boring component</Text>
              <Text variant="subtle">
                but can we incredibly handy with variants
              </Text>
              <Text variant="danger">to quickly express context</Text>
              <Text variant="success">faster than ever</Text>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
