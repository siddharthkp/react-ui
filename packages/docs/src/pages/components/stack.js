import React from 'react'
import { Avatar, Link, Stack, Text, Input, Button } from 'react-ui'
import { Page, Props, Para, Example, Section, Badge } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Stack"
      tagline="Use Stack to lay elements horizontally or vertically on the page"
      badges={[<Badge key={0}>Layout</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Stack align="center" gap={2}>
            <Avatar size="small" src="https://github.com/siddharthkp.png" />
            <Text>Siddharth</Text>
          </Stack>
        </Example.Preview>
        <Example.Code>
          {`
            <Stack align="center" gap={2}>
              <Avatar size="small" src="https://github.com/siddharthkp.png" />
              <Text>Siddharth</Text>
            </Stack>
          `}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'direction',
              type: 'enum',
              options: ['vertical', 'horizontal'],
              description: 'direction of stack',
              default: 'horizontal'
            },
            {
              name: 'gap',
              type: 'enum',
              description: 'gap between stack elements',
              options: ['units on the space scale'],
              default: '0'
            },
            {
              name: 'justify',
              type: 'string',
              description: 'short hand for justify-content',
              options: [
                'normal',
                'space-between',
                'space-around',
                'space-evenly',
                'stretch',
                'flex-start',
                'flex-end'
              ],
              default: 'normal'
            },
            {
              name: 'align',
              type: 'string',
              description: 'short hand for align-items',
              options: ['normal', 'center', 'start', 'end'],
              default: 'normal'
            },
            {
              name: 'inline',
              type: 'boolean',
              description: 'switch from flex to inline-flex',
              default: false
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Direction">
          <Example.Preview>
            <Stack direction="vertical" gap={2}>
              <Text as="label" size={3}>
                Username
              </Text>
              <Input type="text" placeholder="Enter your username" />
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Stack direction="vertical" gap={2}>
              <Text as="label" size={3}>Username</Text>
              <Input type="text" placeholder="Enter your username" />
            </Stack>
          `}</Example.Code>
        </Example>

        <Example title="Nested">
          <Example.Preview>
            <Stack align="center" gap={2}>
              <Avatar size="medium" src="https://github.com/siddharthkp.png" />
              <Stack direction="vertical">
                <Text>Siddharth</Text>
                <Link size={2} href="https://github.com/siddharthkp">
                  Open profile
                </Link>
              </Stack>
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Stack align="center" gap={2}>
              <Avatar size="medium" src="https://github.com/siddharthkp.png" />
              <Stack direction="vertical">
                <Text>Siddharth</Text>
                <Link size={2} href="https://github.com/siddharthkp">Open profile</Link>
              </Stack>
            </Stack>
          `}</Example.Code>
        </Example>

        <Example title="Justify">
          <Example.Preview direction="vertical" gap={10}>
            <Stack justify="flex-start" gap={2}>
              <Button>Submit</Button>
              <Button variant="secondary">Cancel</Button>
            </Stack>

            <Stack justify="space-between">
              <Button>Submit</Button>
              <Button variant="secondary">Cancel</Button>
            </Stack>

            <Stack justify="flex-end" gap={2}>
              <Button>Submit</Button>
              <Button variant="secondary">Cancel</Button>
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Stack justify="flex-start" gap={2}>
              <Button>Submit</Button>
              <Button variant="secondary">Cancel</Button>
            </Stack>

            <Stack justify="space-between">
              <Button>Submit</Button>
              <Button variant="secondary">Cancel</Button>
            </Stack>
            
            <Stack justify="flex-end" gap={2}>
              <Button>Submit</Button>
              <Button variant="secondary">Cancel</Button>
            </Stack>
          `}</Example.Code>
        </Example>

        <Example title="Align">
          <Example.Preview direction="vertical" gap={10}>
            <Stack
              align="flex-start"
              css={{
                height: 12,
                backgroundColor: 'App.borderColor',
                color: 'App.color'
              }}
            >
              content
            </Stack>

            <Stack
              align="center"
              css={{
                height: 12,
                backgroundColor: 'App.borderColor',
                color: 'App.color'
              }}
            >
              content
            </Stack>

            <Stack
              align="flex-end"
              css={{
                height: 12,
                backgroundColor: 'App.borderColor',
                color: 'App.color'
              }}
            >
              content
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Stack align="flex-start" css={{ height: 12, backgroundColor: 'blues.100' }}>
              content
            </Stack>
            <Stack align="center" css={{ height: 12, backgroundColor: 'blues.100' }}>
              content
            </Stack>
            <Stack align="flex-end" css={{ height: 12, backgroundColor: 'blues.100' }}>
              content
            </Stack>
          `}</Example.Code>
        </Example>

        <Para>
          <Text>
            Based on the{' '}
            <Link href="https://www.w3.org/TR/css-align-3/#gap-shorthand">
              working draft for flex gap
            </Link>
            , margin on the child element is added to the gap.
          </Text>
        </Para>
        <Example title="Additive margins">
          <Example.Preview direction="vertical" gap={10}>
            <Stack gap={2}>
              <Avatar
                size="small"
                src="https://react-ui.dev/favicon-light.png"
              />
              <Avatar
                size="small"
                marginLeft={2}
                src="https://react-ui.dev/favicon-light.png"
              />
              <Avatar
                size="small"
                src="https://react-ui.dev/favicon-light.png"
              />
            </Stack>
          </Example.Preview>
          <Example.Code>{`
            <Stack gap={2}>
              <Avatar size="small" src="https://react-ui.dev/favicon-light.png" />
              <Avatar marginLeft={2} size="small" src="https://react-ui.dev/favicon-light.png" />
              <Avatar size="small" src="https://react-ui.dev/favicon-light.png" />
            </Stack>
          `}</Example.Code>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
