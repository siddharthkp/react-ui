import React from 'react'
import { ThemeProvider, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page title="Link" tagline="Use Links to connect pages with each other">
      <Para>
        Extends <Link href="/components/Text">Text</Link>.
      </Para>
      <Example>
        <Example.Preview>
          <span>
            <Link
              href="https://github.com/siddharthkp/react-ui"
              target="_blank"
            >
              Open GitHub repository
            </Link>
          </span>
        </Example.Preview>
        <Example.Code>
          {`
            <Link href="https://github.com/siddharthkp/react-ui" target="_blank">
              Open GitHub repository
            </Link>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'variant',
              type: 'enum',
              options: ['default', 'subtle'],
              description: '',
              default: 'default'
            },
            {
              name: '+',
              type: 'props of Text',
              description: ''
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Variants">
          <Example.Preview direction="vertical" gap={2}>
            <span>
              <Link
                href="https://github.com/siddharthkp/react-ui"
                target="_blank"
              >
                Open GitHub repository
              </Link>
            </span>
            <span>
              <Link
                variant="subtle"
                href="https://github.com/siddharthkp/react-ui"
                target="_blank"
              >
                Open GitHub repository
              </Link>
            </span>
          </Example.Preview>
          <Example.Code>{`
            <Link href="https://github.com/siddharthkp/react-ui" target="_blank">
              Open GitHub repository
            </Link>
            <Link variant="subtle" href="https://github.com/siddharthkp/react-ui" target="_blank">
              Open GitHub repository
            </Link>
          `}</Example.Code>
        </Example>

        <Para>
          The Link component extends the{' '}
          <Link href="/components/Text">Text</Link> component which means you
          can attach all props of the Text component on a Link.
        </Para>
        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <span>
              <Link
                variant="subtle"
                size={2}
                href="https://github.com/siddharthkp/react-ui"
                target="_blank"
              >
                Open GitHub repository
              </Link>
            </span>
          </Example.Preview>
          <Example.Code>{`
            <Link size={2} variant="subtle" href="https://github.com/siddharthkp/react-ui" target="_blank">
              Open GitHub repository
            </Link>
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
            <Table.Column span={8}>variants.Link[variant].color</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { theme, components } from 'react-ui/themes/base'

          // overwrite Link styles
          components.Link = {
            textDecoration: 'underline',

            variants: {
              default: {
                color: 'blue',
                ':hover': { color: 'darkblue' }
              },
              subtle: {
                color: 'grey',
                ':hover': { color: 'darkblue' }
              }
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}> 
            <Link href="https://github.com/siddharthkp/react-ui" target="_blank">
              Open GitHub repository
            </Link>
            <Link variant="subtle" href="https://github.com/siddharthkp/react-ui" target="_blank">
              Open GitHub repository
            </Link>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical" gap={2}>
            <ThemeProvider
              components={{
                Link: {
                  textDecoration: 'underline',
                  variants: {
                    default: {
                      color: 'blue',
                      ':hover': { color: 'darkblue' }
                    },
                    subtle: {
                      color: 'grey',
                      ':hover': { color: 'darkblue' }
                    }
                  }
                }
              }}
            >
              <span>
                <Link
                  debug
                  href="https://github.com/siddharthkp/react-ui"
                  target="_blank"
                >
                  Open GitHub repository
                </Link>
              </span>
              <span>
                <Link
                  variant="subtle"
                  href="https://github.com/siddharthkp/react-ui"
                  target="_blank"
                >
                  Open GitHub repository
                </Link>
              </span>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
