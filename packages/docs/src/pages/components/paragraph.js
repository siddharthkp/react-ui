import React from 'react'
import { ThemeProvider, Link, Text, Paragraph } from 'react-ui'
import { Page, Example, Section, Props, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Paragraph"
      tagline="Use a Paragraph to lay text blocks vertically"
    >
      <Example>
        <Example.Preview>
          <Paragraph>
            <Text>
              While building any interface, you are faced with a dozen decisions
              every minute. At the core of every high quality interface, is a
              set of constraints that help in creating this level of consistency
              and quality.
            </Text>
            <Text>
              Not only do constriants help in consistent features, but they also
              make the decisions and their implementation fast.
            </Text>
          </Paragraph>
        </Example.Preview>
        <Example.Code>
          {`
            <Paragraph>
              <Text>
                While building any interface, you are faced with a dozen decisions
                every minute. At the core of every high quality interface, is a
                set of constraints that help in creating this level of consistency
                and quality.
              </Text>
              <Text>
                Not only do constriants help in consistent features, but they also
                make the decisions and their implementation fast.
              </Text>
            </Paragraph>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'children',
              type: '[ Text components ]',
              description: '',
              default: ''
            },
            {
              name: 'gap',
              type: 'number (from theme.space)',
              description: 'gap between Text blocks from theme.space',
              default: '4'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example>
          <Example.Preview>
            <Paragraph gap={8}>
              <Text>
                While building any interface, you are faced with a dozen
                decisions every minute. At the core of every high quality
                interface, is a set of constraints that help in creating this
                level of consistency and quality.
              </Text>
              <Text>
                Not only do constriants help in consistent features, but they
                also make the decisions and their implementation fast.
              </Text>
            </Paragraph>
          </Example.Preview>
          <Example.Code>{`
            <Paragraph gap={8}>
              <Text>
                While building any interface, you are faced with a dozen decisions
                every minute. At the core of every high quality interface, is a
                set of constraints that help in creating this level of consistency
                and quality.
              </Text>
              <Text>
                Not only do constriants help in consistent features, but they also
                make the decisions and their implementation fast.
              </Text>
            </Paragraph>
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

        <Para>Input uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Paragraph</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { theme, components } from 'react-ui/themes/base'
          
          components.Card = {
            textAlign: 'justify',
            hyphens: 'auto'
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider theme={theme} components={components}>
            <Paragraph>
              <Text>
                While building any interface, you are faced with a dozen
                decisions every minute. At the core of every high quality
                interface, is a set of constraints that help in creating this
                level of consistency and quality.
              </Text>
              <Text>
                Not only do constriants help in consistent features, but they
                also make the decisions and their implementation fast.
              </Text>
            </Paragraph>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                Paragraph: {
                  textAlign: 'justify',
                  hyphens: 'auto'
                }
              }}
            >
              <Paragraph>
                <Text>
                  While building any interface, you are faced with a dozen
                  decisions every minute. At the core of every high quality
                  interface, is a set of constraints that help in creating this
                  level of consistency and quality.
                </Text>
                <Text>
                  Not only do constriants help in consistent features, but they
                  also make the decisions and their implementation fast.
                </Text>
              </Paragraph>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
