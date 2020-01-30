import React from 'react'
import { ThemeProvider, Link } from 'react-ui'
import { Page, Props, Example, Section, Table, Paragraph } from '../components'

const Documentation = () => {
  return (
    <Page title="Link" tagline="Use Links to connect pages with each other">
      <Paragraph>
        Extends <Link href="/components/Text">Text</Link>.
      </Paragraph>
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

        <Paragraph>
          The Link component extends the{' '}
          <Link href="/components/Text">Text</Link> component which means you
          can attach all props of the Text component on a Link.
        </Paragraph>
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
        <Paragraph>Link uses the following theme properties:</Paragraph>
        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>color</Table.Column>
            <Table.Column span={8}>variants.Link[variant].color</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={4}></Table.Column>
            <Table.Column span={8} css={{ fontStyle: 'italic' }}>
              + :hover, &[aria-selected] state
            </Table.Column>
          </Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            Link: {
              variants: {
                // adds variant subtle for Link
                // overrides properties it if it already exists
                subtle: {
                  color: 'text.subtle',
                  ':hover': {
                    color: 'text.linkHover'
                  },
                  '&[aria-current]': {
                    color: 'text.linkHover'
                  }
                }
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
                  variants: {
                    // adds variant subtle for Link
                    // overrides properties it if it already exists
                    subtle: {
                      color: 'text.subtle',
                      ':hover': {
                        color: 'text.linkHover'
                      },
                      '&[aria-current]': {
                        color: 'text.linkHover'
                      }
                    }
                  }
                }
              }}
            >
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
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
