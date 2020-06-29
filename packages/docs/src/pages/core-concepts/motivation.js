import React from 'react'
import { Stack, Element, Text, Link, Image, Button } from 'react-ui'
import { Page, Example, Section, Para, Code } from '../../components'

const Documentation = () => {
  return (
    <>
      <Text
        size={3}
        color="yellows.700"
        marginBottom={16}
        css={{ fontStyle: 'italic' }}
      >
        React UI is a work in progress and in active development. This
        documentation site is built with the library (i know, very meta). If you
        run into bugs or missing pages in the docs, feel free to drop a note on
        the{' '}
        <Link
          href="https://github.com/siddharthkp/react-ui"
          color="yellows.700"
          css={{ textDecoration: 'underline' }}
        >
          GitHub repo.
        </Link>
      </Text>

      <Page title="Motivation" tagline="or why does this project exist?">
        <Section>
          <Para>
            <Text>I'm not a designer. </Text>
          </Para>
          <Para>
            <Text>
              I'd like to be good at design but it has eluded me for a long time
              because I considered it to be a purely creative art form.
            </Text>
          </Para>
          <Para>
            <Text>I couldn't be more wrong.</Text>
          </Para>
          <Para>
            <Text>
              In my attempt to make design more approachable for myself, I
              discovered a few concepts that "just clicked". I have tried to
              bake them into react-ui to make design approachable for more
              developers like myself.
            </Text>
          </Para>
        </Section>
        <Section title="Design concepts">
          <Para>
            There are a few concepts that let you approach design from a systems
            point of view rather than a pure artistic point of view.
          </Para>
          <Para>
            <Text>
              At the core of every well-crafted interface is a set of
              constraints that help create consistency and quality.
            </Text>
            <Text>
              Constraints help build consistent features at a faster pace by
              moving decisions into reusable patterns.
            </Text>
          </Para>

          <Stack as={Para} gap={2} align="flex-start">
            <Text
              size={8}
              variant="subtle"
              css={{
                fontFamily: 'serif',
                lineHeight: 1,
                marginTop: -8,
                fontStyle: 'italic'
              }}
            >
              “
            </Text>
            <Text as="blockquote" css={{ fontStyle: 'italic' }}>
              By using culturally relevant, historically pleasing ratios to
              create modular scales and basing the measurements in our
              compositions on values from those scales, we can achieve a visual
              harmony not found in layouts that use arbitrary, conventional, or
              easily divisible numbers —{' '}
              <Link
                href="https://alistapart.com/article/more-meaningful-typography/"
                target="_blank"
              >
                Tim Brown for A List Apart.
              </Link>
            </Text>
          </Stack>

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
              multiples of 8, in other words, these values are <i>on a scale</i>
              .
            </Text>
            <Text>
              The smallest space is between a label and input field, 1 unit =
              8px. To create diffrentiation between multiple fields, we need
              more space, bumping to the next unit of 2 = 16px does the job.
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
              To be able to carry these concepts in code, we need to work with
              the right abstraction: Components connected to scales
            </Text>
            <Text>
              When building a component, instead of thinking of space or font
              sizes in pixels, you need to be able to think in values from the
              above scales.
            </Text>
          </Para>

          <Para>
            <Text>Let's look at the example below:</Text>
          </Para>

          <Example>
            <Example.Preview css={{ background: 'white' }}>
              <Stack direction="vertical" gap={2}>
                <Image src="/hotel-thumbnail.png" css={{ width: 200 }} />
                <Stack direction="vertical" gap={1}>
                  <Text size={4}>Entire apartment</Text>
                  <Text size={4}>Stunning City Apartment</Text>
                  <Text size={4}>€76 / night</Text>
                </Stack>
              </Stack>
            </Example.Preview>
            <Example.Code>
              {`
              <Text size={4}>Entire apartment</Text>
              <Text size={4}>Stunning City Apartment</Text>
              <Text size={4}>€76 / night</Text>
            `}
            </Example.Code>
          </Example>

          <Para>
            <Text>
              Some of the information that describes the apartment is more
              useful than the rest and should have different visual treatment.
            </Text>
          </Para>

          <Para>
            <Text>
              Instead of finding the perfect pixel values by hit and trial, you
              can use a bigger or smaller value on the <i>font size scale</i> to
              signal the importance of information inside it.
            </Text>
          </Para>

          <Example>
            <Example.Preview css={{ background: 'white' }}>
              <Stack direction="vertical" gap={2}>
                <Image src="/hotel-thumbnail.png" css={{ width: 200 }} />
                <Stack direction="vertical" gap={1}>
                  <Text size={3}>Entire apartment</Text>
                  <Text size={4}>Stunning City Centre Apartment</Text>
                  <Text size={3} weight="semibold">
                    €76 / night
                  </Text>
                </Stack>
              </Stack>
            </Example.Preview>
            <Example.Code>
              {`
              <Text size={3}>Entire apartment</Text>
              <Text size={4}>Stunning City Centre Apartment</Text>
              <Text size={3} weight="semibold">€76 / night</Text>
            `}
            </Example.Code>
          </Example>

          <Para>
            <Text>That looks much better.</Text>
          </Para>
          <Para>
            <Text>
              Now, Let's talk about the space between the image and text, we are
              using a <Code>Stack</Code> component to lay them out:
            </Text>
          </Para>

          <Example>
            <Example.Preview css={{ background: 'white' }}>
              <Stack direction="vertical" gap={2}>
                <Image src="/hotel-thumbnail.png" css={{ width: 200 }} />
                <Stack direction="vertical" gap={1}>
                  <Text size={3}>Entire apartment</Text>
                  <Text size={4}>Stunning City Centre Apartment</Text>
                  <Text size={3} weight="semibold">
                    €76 / night
                  </Text>
                </Stack>
              </Stack>
            </Example.Preview>
            <Example.Code>
              {`
              <Stack direction="vertical" gap={2}>
                <Image src="/hotel-thumbnail.png" />
                
                <Stack direction="vertical" gap={1}>
                  <Text size={3}>Entire apartment</Text>
                  <Text size={4}>Stunning City Centre Apartment</Text>
                  <Text size={3} weight="semibold">
                    €76 / night
                  </Text>
                </Stack>
              </Stack>
            `}
            </Example.Code>
          </Example>

          <Para>
            <Text>
              Notice how the <Code>Stack</Code> uses{' '}
              <i>2 units fom the space</i> scale as the gap between the image
              and the block of text.
            </Text>
            <Text>
              Instead of finding the perfect pixel value with hit and trial, we
              can go up and down that scale to find a value that is creates the
              separation we need and is visually appealing.
            </Text>
          </Para>

          <Example>
            <Example.Preview css={{ background: 'white', overflowX: 'scroll' }}>
              <Stack gap={2}>
                <Stack direction="vertical" gap={2}>
                  <Image src="/hotel-thumbnail.png" css={{ width: 200 }} />
                  <Stack direction="vertical" gap={1}>
                    <Text size={3}>Entire apartment</Text>
                    <Text size={4}>Stunning City Apartment</Text>
                    <Text size={3} weight="semibold">
                      €76 / night
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="vertical" gap={3}>
                  <Image src="/hotel-thumbnail.png" css={{ width: 200 }} />
                  <Stack direction="vertical" gap={1}>
                    <Text size={3}>Entire apartment</Text>
                    <Text size={4}>Stunning City Apartment</Text>
                    <Text size={3} weight="semibold">
                      €76 / night
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="vertical" gap={4}>
                  <Image src="/hotel-thumbnail.png" css={{ width: 200 }} />
                  <Stack direction="vertical" gap={1}>
                    <Text size={3}>Entire apartment</Text>
                    <Text size={4}>Stunning City Apartment</Text>
                    <Text size={3} weight="semibold">
                      €76 / night
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Example.Preview>

            <Example.Code>
              {`
              <Stack gap={2} direction="vertical">
                ...
              </Stack>
              <Stack gap={3} direction="vertical">
                ...
              </Stack>
              <Stack gap={4} direction="vertical">
                ...
              </Stack>
            `}
            </Example.Code>
          </Example>

          <Para>
            <Text>
              Just a few building blocks like <Code>Text</Code> and{' '}
              <Code>Stack</Code> can set you up with the right fundamentals to
              create well designed interfaces.
            </Text>
            <Text>
              But, sometimes, you need to create more custom components by
              composing multiple components. This is where the <Code>css</Code>{' '}
              prop (which is also connected to scales) comes in handy.
            </Text>
            <Text>
              You can access <i>scale values</i> in any component built with the{' '}
              <Code>Element</Code> primitive from React UI.
            </Text>
          </Para>
          <Example>
            <Example.Preview>
              <Stack
                as="nav"
                justify="space-between"
                align="center"
                css={{
                  width: '100%',
                  height: 16,
                  padding: 4,
                  background: 'grays.100',
                  border: '1px solid',
                  borderColor: 'grays.200',
                  boxShadow: 2,
                  borderRadius: 2
                }}
              >
                <Element
                  as="svg"
                  css={{ size: 8 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#259D58"
                  stroke="#259D58"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </Element>

                <Stack gap={4} align="center">
                  <Link variant="subtle" size={3}>
                    Log in
                  </Link>
                  <Button variant="primary">Sign up</Button>
                </Stack>
              </Stack>
            </Example.Preview>
            <Example.Code>{`
            <Stack
              as="nav"
              justify="space-between"
              align="center"
              css={{
                height: 16,               // theme.sizes.16
                padding: 4,               // theme.space.4
                background: 'grays.100',  // theme.colors.grays.100
                border: '1px solid',      
                borderColor: 'grays.200', // theme.colors.grays.200
                borderRadius: 2,          // theme.radii.2
                boxShadow: 2              // theme.shadows.2
              }}
            >
              <Logo css={{ size: 8 }} />
              <Stack gap={4} align="center">
                <Link variant="subtle" size={3}>Log in</Link>
                <Button variant="primary">Sign up</Button>
              </Stack>
            </Stack>
          `}</Example.Code>
          </Example>
          <Para>
            <Link href="/core-concepts/creating-new-components">
              Read more about creating custom components →
            </Link>
          </Para>
        </Section>
        <Section title="Defining the scales">
          <Para>
            <Text>
              React UI follows the plain javascript format defined by the{' '}
              <Link href="https://system-ui.com" target="_blank">
                System UI theme specification
              </Link>
              , which is also used by theme-ui, chakra, modulz and others.
            </Text>
            <Text>
              The theme lets you control the overall design of your project with
              colors, fonts, sizes, spacing, etc.
            </Text>
          </Para>

          <Para>
            <Text>
              You can use any of the{' '}
              <Link
                href="https://github.com/siddharthkp/react-ui/tree/master/packages/react-ui/src/themes"
                target="_blank"
              >
                themes that ship with React UI
              </Link>{' '}
              and customise them to your liking.
            </Text>

            <Text>
              If you already have your brand guidelines, you can use the{' '}
              <Link
                href="https://github.com/siddharthkp/react-ui/blob/master/packages/react-ui/src/themes/base.js"
                target="_blank"
              >
                unopinionated minimal theme
              </Link>{' '}
              as the starting point.
            </Text>
          </Para>
          <Para>
            <Link href="/todo">Read more about defining the theme →</Link>
          </Para>
        </Section>
        <Section title="Other ideas, old and new">
          <Para>
            <Text>
              Other than the above ideas, React UI combines some of our
              industry's best ideas and adds a few new ones to the mix.{' '}
            </Text>
          </Para>
          <Para>
            <Link href="/core-concepts/ideas">
              Read more about the old and new ideas →
            </Link>
          </Para>
        </Section>
      </Page>
    </>
  )
}

export default Documentation

const FontScale = () => {
  const values = ['0px', '10px', '12px', '14px', '16px', '20px', '24px', '32px']

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
