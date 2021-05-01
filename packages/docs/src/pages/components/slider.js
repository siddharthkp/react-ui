import React from 'react'
import { ThemeProvider, Switch, Slider,Link, Text } from 'react-ui'
import { Page, Props, Example, Section, Table, Para } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Slider"
      tagline="Use Slider to request a range of information from the user"
    >
      <Example>
        <Example.Preview>
          <Slider min="1" max="10" defaultValue="2" />
        </Example.Preview>
        <Example.Code>
          {`
            <Slider min="1" max="10" defaultValue="2" />
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: '+',
              type: 'props of Input "range"',
              description: ''
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Para>
          Slider can be used with{' '}
          <Link href="/components/Form">Form.Field</Link> which adds accessible
          labels and error states.
        </Para>

        <Example>
          <Example.Preview direction="vertical" gap={3}>
            <Slider min="1" max="10" defaultValue="2" />
            <Slider min="1" max="10" disabled />
          </Example.Preview>
          <Example.Code>{`
            <Slider min="1" max="10" defaultValue="2" />
            <Slider min="1" max="10" disabled />
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

        <Para>Slider uses the following theme keys:</Para>

        <Table>
          <Table.Header>
            <Table.Column span={4}>Property</Table.Column>
            <Table.Column span={8}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={4}>backgroundColor</Table.Column>
            <Table.Column span={8}>
              colors.Slider.backgroundTrack, colors.Slider.backgroundThumb
            </Table.Column>
          </Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          components.Slider = {
            colors: {
              backgroundTrack: '#F4CA64',
              backgroundThumb: '#2368A2'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Slider min="1" max="10" />
            <Slider min="1" max="10" defaultValue={3} />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical" gap={2}>
            <ThemeProvider
              components={{
                Slider: {
                  colors: {
                    backgroundTrack: '#F4CA64',
                    backgroundThumb: '#2368A2'
                  }
                }
              }}
            >
              <Slider min="1" max="10" />
              <Slider min="1" max="10" defaultValue={3} />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
