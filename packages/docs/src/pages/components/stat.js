import React from 'react'
import { Link, Text, Stack, Stat } from 'react-ui'
import { Page, Example, Section, Para } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Stat"
      tagline="The Stat component is used to display statistics."
    >
      <Example>
        <Example.Preview>
          <Stat>
            <Stat.Title>Visits</Stat.Title>
            <Stat.Amount>345,670</Stat.Amount>
            <Stat.Description>Last 7 days</Stat.Description>
          </Stat>
        </Example.Preview>
        <Example.Code>
          {`
            <Stat>
              <Stat.Title>Visits</Stat.Title>
              <Stat.Amount>345,670</Stat.Amount>
              <Stat.Description>Last 7 days</Stat.Description>
            </Stat>
          `}
        </Example.Code>
      </Example>

      <Section title="Examples">
        <Para>
          Stat can be combined with <Link href="/components/Stack">Stack</Link>{' '}
          to create stat groups.
        </Para>

        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <Stack gap={16}>
              <Stat>
                <Stat.Title>Likes</Stat.Title>
                <Stat.Amount>345,670</Stat.Amount>
                <Stat.Description>9.05%</Stat.Description>
              </Stat>
              <Stat>
                <Stat.Title>Followers</Stat.Title>
                <Stat.Amount>119,241</Stat.Amount>
                <Stat.Description>13.37%</Stat.Description>
              </Stat>
              <Stat>
                <Stat.Title>Subscribers</Stat.Title>
                <Stat.Amount>103,210</Stat.Amount>
                <Stat.Description>2.87%</Stat.Description>
              </Stat>
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Stack gap={16}>
              <Stat>
                <Stat.Title>Likes</Stat.Title>
                <Stat.Amount>345,670</Stat.Amount>
                <Stat.Description>9.05%</Stat.Description>
              </Stat>
              <Stat>
                <Stat.Title>Followers</Stat.Title>
                <Stat.Amount>119,241</Stat.Amount>
                <Stat.Description>13.37%</Stat.Description>
              </Stat>
              <Stat>
                <Stat.Title>Subscribers</Stat.Title>
                <Stat.Amount>103,210</Stat.Amount>
                <Stat.Description>2.87%</Stat.Description>
              </Stat>
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

        <Para>Stat uses the following theme properties:</Para>

        {/* Not sure how to do this */}
      </Section>
    </Page>
  )
}

export default Documentation
