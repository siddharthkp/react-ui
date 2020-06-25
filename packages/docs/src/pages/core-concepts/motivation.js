import React from 'react'
import { Stack, Text, Link, Image } from 'react-ui'
import { Page, Example, Section, Para, Heading, Code } from '../../components'

const Documentation = () => {
  return (
    <Page title="Motivation">
      <Section>
        <Para>
          <Text>I'm not a designer. </Text>
        </Para>
        <Para>
          <Text>
            I'd like to be good at design but it has eluded me for a long time.
            I considered it a creative art form and not science.
          </Text>
        </Para>
        <Para>
          <Text>
            In my attempt to make design more approachable for myself, I
            discovered a few concepts that "just clicked". I have tried to bake
            them into react-ui to make design approachable for more developers
            like myself.
          </Text>
        </Para>
      </Section>
      <Section title="Design concepts">
        <Para>
          There are a few concepts that let you approach design from a systems
          point of view than a pure art point of view.
        </Para>
        <Para>
          <Text>
            At the core of every well crafted interface is a set of constraints
            that help in creating a certain level of consistency and quality.
          </Text>
          <Text>
            Constraints help build consistent features at a faster pace by
            moving decisions into reusable patterns.
          </Text>
          <Text
            as="blockquote"
            css={{ display: 'inline-block', fontStyle: 'italic' }}
          >
            By using culturally relevant, historically pleasing ratios to create
            modular scales and basing the measurements in our compositions on
            values from those scales, we can achieve a visual harmony not found
            in layouts that use arbitrary, conventional, or easily divisible
            numbers —{' '}
            <Link
              href="https://alistapart.com/article/more-meaningful-typography/"
              target="_blank"
            >
              Tim Brown for A List Apart.
            </Link>
          </Text>
        </Para>

        <Para>
          <Text>Let's take an example of this Airbnb-esque form:</Text>
        </Para>

        <Para>
          <Image src="/space-tip.jpg" />
        </Para>

        <Para>
          <Text>
            Focus on the space between elements. There are two kinds of
            decisions that are worth noticing:
          </Text>
        </Para>
        <Para>
          <Text>1. Consistency in space</Text>
          <Text>
            The input and buttons are of the same size, the space between form
            elements is always the same, the space between a label and its
            corresponding form element is the same, etc.
          </Text>
        </Para>
        <Para>
          <Text>2. The space values are on a scale</Text>
          <Text>
            - If you look closely, this design only uses 5 space values:{' '}
            <Code>[8, 16, 24, 32, 48]</Code>. All of the space units are
            multiples of 8, in other words, these values are <i>on a scale</i>.
          </Text>
          <Text>
            The smallest space is between a label and input field, 1 unit = 8px.
            To create diffrentiation between multiple fields, we need more
            space, bumping to the next unit of 2 = 16px does the job.
          </Text>
        </Para>

        <Para>
          <Text>
            You can promote this idea for all style properties - space, font
            sizes, colors, shadows, etc.
          </Text>
          <Text>For example, these font sizes are on a scale:</Text>
        </Para>
        <Example hideCode>
          <Example.Preview direction="vertical" gap={4}>
            <FontScale />
          </Example.Preview>
        </Example>
      </Section>
      <Section title="Authoring design in Code">
        <Para>
          <Text>
            To be able to represent these concept in code, we need the right the
            right abstractions.
          </Text>
        </Para>
        <Para>
          <Text>1. Tokens / spec</Text>
          <Text>...</Text>
        </Para>
        <Para>
          <Text>2. Components connected to scale </Text>
        </Para>

        <Para>
          <Text>1. Components that connect to scales</Text>

          <Para>
            <Image css={{ width: 'auto' }} src="/fontsize-tip.png" />
          </Para>
        </Para>
        <Para>
          <Text>2. Consistency via composition</Text>
        </Para>
      </Section>
    </Page>
  )
}

export default Documentation

const FontScale = () => {
  const values = [
    '0px',
    '10px',
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '32px',
    '48px',
    '64px',
    '72px'
  ]

  return (
    <Stack direction="vertical" gap={4}>
      {[1, 2, 3, 4, 5, 6, 7].map(size => (
        <Stack align="center" key={size}>
          <Text size={2} css={{ display: 'inline-block', width: 10 }}>
            {size}
          </Text>
          <Text size={size}>{values[size]}</Text>
        </Stack>
      ))}
    </Stack>
  )
}
