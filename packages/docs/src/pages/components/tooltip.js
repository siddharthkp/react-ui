import React from 'react'
import * as base from 'react-ui/themes/base'
import { ThemeProvider, Link, Text, Avatar, Tooltip } from 'react-ui'
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
      title="Tooltip"
      tagline=""
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Para>
        <Text>
          Extends{' '}
          <Link
            href="https://reacttraining.com/reach-ui/tooltip"
            target="_blank"
          >
            reach-ui/tooltip
          </Link>
        </Text>
      </Para>
      <Example>
        <Example.Preview>
          <Tooltip label="@sameen-shi">
            <Avatar size="small" src="https://github.com/sameen-shi.png" />
          </Tooltip>
        </Example.Preview>
        <Example.Code>
          {`
            <Tooltip label="@sameen-shi">
              <Avatar size="small" src="https://github.com/sameen-shi.png" />
            </Tooltip>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'label',
              type: 'string',
              description: 'text to show in tooltip',
              default: '',
              required: true
            },
            {
              name: 'children',
              type: 'React element',
              description: '',
              default: '',
              required: true
            }
          ]}
        />
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

        <Para>Tooltip uses the following theme properties:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>component name</Table.Column>
            <Table.Column span={8}>Tooltip</Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'
          
          components.Tooltip = {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: 1,
            boxShadow: 2,
            paddingX: 1,
            paddingY: 1,
            fontSize: 2,
            lineHeight: 1
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Tooltip label="@sameen-shi">
              <Avatar size="small" src="https://github.com/sameen-shi.png" />
            </Tooltip>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              tokens={base.tokens}
              components={{
                ...base.components,
                Tooltip: {
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: 1,
                  boxShadow: 2,
                  paddingX: 1,
                  paddingY: 1,
                  fontSize: 2,
                  lineHeight: 1
                }
              }}
            >
              <Tooltip label="@sameen-shi">
                <Avatar size="small" src="https://github.com/sameen-shi.png" />
              </Tooltip>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
