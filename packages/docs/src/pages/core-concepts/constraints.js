import React from 'react'
import {
  ThemeProvider,
  Avatar,
  Card,
  Stack,
  Text,
  Link,
  Input,
  Form,
  Button
} from 'react-ui'
import * as light from 'react-ui/themes/light'

import {
  Page,
  Example,
  Section,
  Para,
  Code,
  Divider,
  List
} from '../../components'

function Example1(props) {
  return (
    <ThemeProvider tokens={light.tokens} components={light.components}>
      <Example {...props}>
        <Example.Preview
          justify="center"
          css={{
            background:
              'url(https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)',
            backgroundSize: 'cover'
          }}
        >
          <Card
            css={{
              width: 440,
              minWidth: 440,
              borderRadius: 2,
              boxShadow: 0,
              paddingX: 8,
              paddingY: 6
            }}
          >
            <Form
              css={{
                paddingX: 0,
                paddingY: 0,
                FormStack: {
                  '> *:not(:last-child)': {
                    marginBottom: 4
                  }
                },
                FormHeader: {
                  fontSize: 6,
                  fontWeight: 'semibold'
                },
                FormLabel: {
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  height: 4,
                  marginBottom: 2,
                  cursor: 'pointer'
                },
                Input: {
                  height: 12,
                  fontSize: 4,
                  background: 'transparent',
                  borderWidth: '1px',
                  borderColor: '#EBEBEB',
                  ':hover, :focus': {
                    background: 'transparent',
                    borderColor: '#EBEBEB',
                    position: 'relative',
                    zIndex: 2
                  },
                  ':focus': {
                    borderColor: '#008489',
                    borderRight: '1px solid'
                  }
                },
                Button: {
                  backgroundColor: '#ff5a5f',
                  fontWeight: 'semibold',
                  border: 'none',
                  borderRadius: 2,
                  fontSize: 4,
                  height: 12,
                  paddingX: 4,
                  ':hover, :focus': {
                    backgroundColor: '#e74e4b'
                  }
                }
              }}
            >
              <Form.Header>
                Book unique places to stay and things to do.
              </Form.Header>
              <Form.Field label="Where">
                <Input type="text" placeholder="Anyhwere" />
              </Form.Field>
              <Stack>
                <Form.Field label="Check-in">
                  <Input
                    type="text"
                    placeholder="dd/mm/yyy"
                    css={{ borderRightRadius: 0 }}
                  />
                </Form.Field>
                <Form.Field label="Check-out" marginLeft="-1px">
                  <Input
                    type="text"
                    placeholder="dd/mm/yyy"
                    css={{ borderLeftRadius: 0 }}
                  />
                </Form.Field>
              </Stack>
              <Form.Field label="Guests">
                <Input type="text" placeholder="Number of Guests" />
              </Form.Field>
              <Stack justify="flex-end">
                <Button type="button">Search</Button>
              </Stack>
            </Form>
          </Card>
        </Example.Preview>
      </Example>
    </ThemeProvider>
  )
}
function Example2(props) {
  return (
    <ThemeProvider tokens={light.tokens} components={light.components}>
      <Example {...props}>
        <Example.Preview
          justify="center"
          css={{
            background:
              'url(https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)',
            backgroundSize: 'cover'
          }}
        >
          <Card
            css={{
              width: 440,
              minWidth: 440,
              borderRadius: 2,
              boxShadow: 0,
              paddingX: 0,
              paddingY: 0
            }}
          >
            <Stack>
              <Space width={8} />
              <Stack direction="vertical">
                <Space height={6} />
                <Form
                  css={{
                    paddingX: 0,
                    paddingY: 0,
                    FormStack: {
                      '> *:not(:last-child)': {
                        marginBottom: 0
                      }
                    },
                    FormHeader: {
                      fontSize: 6,
                      fontWeight: 'semibold'
                    },
                    FormLabel: {
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      letterSpacing: 1,
                      height: 4,
                      fontSize: 2,
                      marginBottom: 0,
                      cursor: 'pointer'
                    },
                    Input: {
                      height: 12,
                      fontSize: 4,
                      background: 'transparent',
                      borderWidth: '1px',
                      borderColor: '#EBEBEB',
                      ':hover, :focus': {
                        background: 'transparent',
                        borderColor: '#EBEBEB'
                      },
                      ':focus': {
                        borderColor: '#008489',
                        borderRight: '1px solid'
                      }
                    },
                    Button: {
                      backgroundColor: '#ff5a5f',
                      fontWeight: 'semibold',
                      border: 'none',
                      borderRadius: 2,
                      fontSize: 4,
                      height: 12,
                      paddingX: 0,
                      ':hover, :focus': {
                        backgroundColor: '#e74e4b'
                      }
                    }
                  }}
                >
                  <Form.Header>
                    Book unique places to stay and things to do.
                  </Form.Header>
                  <Space height={4} />
                  <Form.Field label="Where">
                    <Space height={2} />
                    <Stack>
                      <Space height={12} />
                      <Input type="text" placeholder="Anyhwere" />
                    </Stack>
                  </Form.Field>
                  <Space height={4} />
                  <Stack>
                    <Form.Field label="Check-in">
                      <Space height={2} hideText />
                      <Stack>
                        <Space height={12} />
                        <Input
                          type="text"
                          placeholder="dd/mm/yyy"
                          css={{
                            borderRightRadius: 0,
                            borderRight: 'none'
                          }}
                        />
                      </Stack>
                    </Form.Field>
                    <Form.Field label="Check-out">
                      <Space height={2} />
                      <Input
                        type="text"
                        placeholder="dd/mm/yyy"
                        css={{ borderLeftRadius: 0 }}
                      />
                    </Form.Field>
                  </Stack>
                  <Space height={4} />
                  <Form.Field label="Guests">
                    <Space height={2} />
                    <Stack>
                      <Space height={12} />
                      <Input type="text" placeholder="Number of Guests" />
                    </Stack>
                  </Form.Field>
                  <Space height={4} />
                  <Stack justify="flex-end">
                    <Space height={12} />
                    <Button type="button">
                      <Space width={2} centered color="button" />
                      Search
                      <Space width={2} centered color="button" />
                    </Button>
                  </Stack>
                  <Space height={6} />
                </Form>
              </Stack>
              <Space width={8} />
            </Stack>
          </Card>
        </Example.Preview>
      </Example>
    </ThemeProvider>
  )
}

const Documentation = () => {
  return (
    <Page title="Constraints Based Design">
      <Section>
        <Para>
          <Text>
            At the core of every high quality interface, is a set of constraints
            that help in creating this level of consistency and quality.
          </Text>
          <Text>
            Constriants help build consistent features at a faster pace by
            moving the decisions into reusable patterns.
          </Text>
        </Para>
        <Para>
          <Text>
            Let's take example of this Airbnb-esque form built with React UI:
          </Text>
        </Para>
        <Example1
          hideCode
          css={{
            minWidth: 480
          }}
        />
        <Para>
          <Text>
            There are a lot of decisions that the folks building this UI had to
            make. Let's look at just one of these:{' '}
            <i>Space between elements.</i>
          </Text>
        </Para>
        <Para>
          <Text>There are two kinds of decisions that are worth noticing:</Text>
        </Para>
        <Para>
          <Text>
            1. Consistency in space - This is one of the qualities of a well
            designed interface.
          </Text>
          <Text css={{ paddingLeft: 5 }}>
            The input and buttons are of the same size, the space between form
            elements is always the same, the space between a label and its
            corresponding form element is the same, etc.
          </Text>
        </Para>
        <Para>
          <Text>
            2. Space on a scale - If you look closely, all of the space units
            are multiples of 8.
          </Text>
          <Text css={{ paddingLeft: 5 }}>
            This design only uses 5 space values:{' '}
            <Code>[8, 16, 24, 32, 48]</Code>. In other words, these values are{' '}
            <i>on a scale</i>.
          </Text>
          <Text css={{ paddingLeft: 5 }}>
            The smallest space is between a label and input field, 1 unit = 8px.
            To create the diffrentiation between multiple fields, we need more
            space, bumping to the next unit of 2 = 16px does the job.
          </Text>
        </Para>
        <Example2
          hideCode
          css={{
            minWidth: 480
          }}
        />
        <Para>
          <Text>
            The idea of picking values only from a scale might feel restrictive
            at first, but very soon, it starts freeing you up to focus on the
            more important details. Try it before you dismiss it.
          </Text>
          <Text>
            React UI ships with a 4 point scale which is great for building
            applications, but feel free to{' '}
            <Link href="/core-concepts/customising-tokens">
              customise the scale
            </Link>{' '}
            this for your use case. If you're building a blog or documentation
            site, you might want to bump it up to more spacious scale.
          </Text>
        </Para>
        <Divider />
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
        <Para>
          <Text>
            To distinguish primary information from secondary, you can pick a
            font sizes that is one level down on the scale.
          </Text>
          <Text size={3} variant="subtle">
            (Bonus points if you also use one level down on the color scale.)
          </Text>
        </Para>
        <Example>
          <Example.Preview css={{ background: 'white' }}>
            <Stack gap={2} align="center">
              <Avatar
                size="medium"
                src="https://avatars0.githubusercontent.com/u/1863771?v=4"
              />
              <Stack direction="vertical">
                <Text size={4} color="grays.800">
                  Sid
                </Text>
                <Text size={3} color="grays.700">
                  @siddharthkp
                </Text>
              </Stack>
            </Stack>
          </Example.Preview>
          <Example.Code>
            {`
              <Text size={4} color="grays.800">Sid</Text>
              <Text size={3} color="grays.700">@siddharthkp</Text>
            `}
          </Example.Code>
        </Example>
        <Divider />
        <Para>
          <Text>
            This concept wasn't introduced by React UI, this idea was introduced
            into libraries under the name of Design Tokens about 6 years ago by{' '}
            <Link href="http://twitter.com/jina">Jina Anne</Link>.
          </Text>
          <Text>
            If you'd like to know more about Design Tokens, consider going
            through these resources:
          </Text>
          <List as="ol">
            <Text>
              <Link href="https://www.youtube.com/watch?v=wDBEc3dJJV8">
                Using Design Tokens with the Lightning Design System
              </Link>
              , talk by Jina Anne
            </Text>
            <Text>
              <Link href="https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421">
                Design Tokens in Design Systems
              </Link>
              , article by Nathan Curtis
            </Text>
          </List>
        </Para>
      </Section>
      <Section>
        <Link
          href="/core-concepts"
          css={{
            Text: {
              position: 'relative',
              left: 0,
              transitionProperty: 'left',
              transitionDuration: 4
            },
            ':hover': {
              Text: {
                left: -8
              }
            }
          }}
        >
          <Text marginRight={1}>←</Text>
          Back to Core Concepts
        </Link>
      </Section>
    </Page>
  )
}

const Space = props => {
  const colors = {
    bg: {
      2: 'blues.200',
      4: 'greens.100',
      6: 'yellows.100',
      8: 'yellows.100',
      12: 'yellows.300',
      button: 'reds.100'
    },
    text: {
      2: 'blues.700',
      4: 'greens.800',
      6: 'yellows.800',
      8: 'yellows.800',
      12: 'yellows.800',
      button: 'reds.800'
    }
  }
  return (
    <Stack
      justify={props.centered ? 'center' : 'flex-end'}
      align="center"
      css={{
        height: props.height,
        width: props.width,
        backgroundColor: colors.bg[props.color || props.height || props.width],
        paddingX: 2
      }}
    >
      <Text
        size={2}
        color={colors.text[props.height || props.width]}
        weight="semibold"
        css={{ zIndex: 2 }}
      >
        {props.hideText ? null : (props.height || props.width) * 4}
      </Text>
    </Stack>
  )
}

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

export default Documentation
