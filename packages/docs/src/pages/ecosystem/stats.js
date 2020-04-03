import React from 'react'
import { ThemeProvider, Link, Text, Stack, Avatar, merge } from 'react-ui'
import { Stats, styles as StatsStyles } from 'react-ui-stats'
import { Page, Example, Section, Para, Table } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Stat"
      tagline="The Stat component is used to display statistics."
    >
      <Stack align="center" gap={1}>
        <Avatar size="medium" src="https://github.com/rubenmoya.png" />
        <Text variant="subtle">Built by </Text>
        <Link href="https://github.com/rubenmoya">Rubén Moya</Link>
      </Stack>
      <Example>
        <Example.Preview>
          <Stats>
            <Stats.Label>Visits</Stats.Label>
            <Stats.Value>345,670</Stats.Value>
            <Stats.Description>Last 7 days</Stats.Description>
          </Stats>
        </Example.Preview>
        <Example.Code>
          {`
            <Stats>
              <Stats.Label>Visits</Stats.Label>
              <Stats.Value>345,670</Stats.Value>
              <Stats.Description>Last 7 days</Stats.Description>
            </Stats>
          `}
        </Example.Code>
      </Example>
      <Section title="Examples">
        <Para>
          Stats can be combined with <Link href="/components/Stack">Stack</Link>{' '}
          to create stats groups.
        </Para>

        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <Stack gap={16}>
              <Stats>
                <Stats.Label>Likes</Stats.Label>
                <Stats.Value>345,670</Stats.Value>
                <Stats.Description>9.05%</Stats.Description>
              </Stats>
              <Stats>
                <Stats.Label>Followers</Stats.Label>
                <Stats.Value>119,241</Stats.Value>
                <Stats.Description>13.37%</Stats.Description>
              </Stats>
              <Stats>
                <Stats.Label>Subscribers</Stats.Label>
                <Stats.Value>103,210</Stats.Value>
                <Stats.Description>2.87%</Stats.Description>
              </Stats>
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Stack gap={16}>
              <Stats>
                <Stats.Label>Likes</Stats.Label>
                <Stats.Value>345,670</Stats.Value>
                <Stats.Description>9.05%</Stats.Description>
              </Stats>
              <Stats>
                <Stats.Label>Followers</Stats.Label>
                <Stats.Value>119,241</Stats.Value>
                <Stats.Description>13.37%</Stats.Description>
              </Stats>
              <Stats>
                <Stats.Label>Subscribers</Stats.Label>
                <Stats.Value>103,210</Stats.Value>
                <Stats.Description>2.87%</Stats.Description>
              </Stats>
            </Stack>
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

        <Para>Stats has the following customisable elements:</Para>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>Stats</Table.Row>
          <Table.Row>StatsLabel</Table.Row>
          <Table.Row>StatsValue</Table.Row>
          <Table.Row>StatsDescription</Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'
          import { styles as Stats } from 'react-ui-stats'
          import { merge } from 'react-ui'

          // optional step: customise 3rd party Stats component
          const CustomisedStack = merge(Stack, {
            color: 'text.body',       // reads from tokens.colors.text.body
            
            StatsLabel: {
              textTransform: 'uppercase'
            },
            StatsValue: {
              fontSize: 5,            // reads from tokens.fontSizes.5
            },
            StatsDescription: {
              fontSize: 2,            // reads from tokens.fontSizes.2
              color: 'text.subtle',   // reads from tokens.colors.text.subtle
            }
          })

          // add Stats to component styles
          components.Stats = CustomisedStack
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Stats>
              <Stats.Label>Visits</Stats.Label>
              <Stats.Value>345,670</Stats.Value>
              <Stats.Description>Last 7 days</Stats.Description>
            </Stats>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={merge(StatsStyles, {
                color: 'text.body', // reads from tokens.colors.text.body

                StatsLabel: {
                  textTransform: 'uppercase',
                },
                StatsValue: {
                  fontSize: 5, // reads from tokens.fontSizes.5
                },
                StatsDescription: {
                  fontSize: 2, // reads from tokens.fontSizes.2
                  color: 'text.subtle', // reads from tokens.colors.text.subtle
                },
              })}
            >
              <Stats>
                <Stats.Label>Visits</Stats.Label>
                <Stats.Value>345,670</Stats.Value>
                <Stats.Description>Last 7 days</Stats.Description>
              </Stats>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
