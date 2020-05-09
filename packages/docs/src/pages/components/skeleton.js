import React from 'react'
import { ThemeProvider, Stack, Skeleton, Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Skeleton"
      tagline="Use a skeleton to hint that some content is on it's way"
    >
      <Example>
        <Example.Preview direction="vertical" gap={2}>
          <Skeleton />
        </Example.Preview>
        <Example.Code>
          {`
            <Skeleton />
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'width',
              type: 'number',
              description: 'width of skeleton',
              default: 200
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Width">
          <Example.Preview>
            <Stack direction="vertical" gap={2}>
              <Skeleton />
              <Skeleton width={120} />
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Skeleton />
            <Skeleton width={120} />
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

        <Para>
          <Text>Avatar uses the following properties from theme:</Text>
        </Para>

        <Table>
          <Table.Header>
            <Table.Column span={6}>Property</Table.Column>
            <Table.Column span={6}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={6}>component name</Table.Column>
            <Table.Column span={6}>Skeleton</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={6}>colors</Table.Column>
            <Table.Column span={6}>
              backgroundColor + highlightColor
            </Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          // extend components
          components.Skeleton = {
            backgroundColor: 'lightgrey',
            highlightColor: 'white',
            height: 4,
            borderRadius: 2,
            animationDuration: 8
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Skeleton />
            <Skeleton width={120} />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical" gap={2}>
            <ThemeProvider
              components={{
                Skeleton: {
                  backgroundColor: 'lightgrey',
                  highlightColor: 'white',
                  height: 4,
                  borderRadius: 2,
                  animationDuration: 8
                }
              }}
            >
              <Skeleton />
              <Skeleton width={120} />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
