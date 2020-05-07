import React from 'react'
import {
  Element,
  Avatar,
  Button,
  Checkbox,
  Heading,
  Input,
  Link,
  Radio,
  Select,
  Spinner,
  Switch,
  Text,
  Textarea,
  Stack,
  Grid,
  Row,
  Column,
  Breadcrumb,
  Card,
  Form,
  Paragraph,
  Tooltip
} from 'react-ui'
import { Page, Example, Section, Paragraph as Para } from '../../components'
import { Link as RouterLink } from '@reach/router'
import { AirplaneIcon, AirCanadaLogo } from '../core-concepts/layouts'

const Documentation = () => {
  return (
    <Page title="Components">
      <Para>
        <Text>
          React UI comes with a set of components that are{' '}
          <Text weight="medium">accessible</Text>,{' '}
          <Text weight="medium">responsive</Text> and{' '}
          <Text weight="medium">customisable</Text>.
        </Text>
      </Para>

      <Para>You can import them from the package like this:</Para>

      <Example>
        <Example.Code lang="js">
          {`
            import { Card, Avatar, Stack } from 'react-ui'
          `}
        </Example.Code>
      </Example>

      <Section title="Primitives">
        <ComponentCard name="Element">
          <Element
            as={Stack}
            justify="center"
            align="center"
            css={{
              height: 12,
              width: '144px',
              borderRadius: 1,
              backgroundColor: 'grays.200'
            }}
          >
            <Text variant="subtle" size={3}>
              Base Element
            </Text>
          </Element>
        </ComponentCard>
        <ComponentCard name="ThemeProvider">
          <Stack
            gap={2}
            justify="center"
            align="center"
            css={{
              height: '80%',
              width: '80%',
              border: '2px dashed',
              borderColor: 'grays.200'
            }}
          >
            <Avatar size="small" src="https://github.com/sameen-shi.png" />
            <Element
              as="div"
              css={{
                height: 6,
                width: '96px',
                borderRadius: 1,
                backgroundColor: 'grays.200'
              }}
            />
          </Stack>
        </ComponentCard>
      </Section>

      <Section title="Building blocks">
        <ComponentCard name="Avatar" gap={4}>
          <Avatar size="small" src="https://github.com/sameen-shi.png" />
          <Avatar size="medium" src="https://github.com/sameen-shi.png" />
          <Avatar size="large" src="https://github.com/sameen-shi.png" />
        </ComponentCard>
        <ComponentCard name="Button" gap={4}>
          <Button>Log in</Button>
          <Button variant="secondary" debug>
            Cancel
          </Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link" css={{ display: ['none', 'flex', 'flex'] }}>
            Reset
          </Button>
        </ComponentCard>
        <ComponentCard name="Checkbox" gap={4}>
          <Checkbox label="Normal" />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Default Checked" checked />
        </ComponentCard>
        <ComponentCard name="Heading" direction="vertical" gap={4}>
          <Heading size="page">Page heading</Heading>
          <Heading size="section" css={{ display: ['none', 'flex', 'flex'] }}>
            Section heading
          </Heading>
          <Heading size="paragraph" css={{ display: ['none', 'flex', 'flex'] }}>
            Paragraph heading
          </Heading>
        </ComponentCard>
        <ComponentCard name="Image">
          <Element
            css={{
              borderRadius: 1,
              height: '100%',
              width: '100%',
              backgroundImage:
                'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          />
        </ComponentCard>
        <ComponentCard name="Input">
          <Stack direction="vertical" gap={2} css={{ width: '280px' }}>
            <Input type="text" placeholder="Please enter your name" />
            <Input type="text" disabled placeholder="This field is disabled" />
            <Input type="text" invalid placeholder="Please enter your name" />
          </Stack>
        </ComponentCard>
        <ComponentCard name="Link" direction="vertical" gap={2}>
          <Link href="https://github.com/siddharthkp/react-ui" target="_blank">
            Open GitHub repository
          </Link>
          <Link
            variant="subtle"
            href="https://github.com/siddharthkp/react-ui"
            target="_blank"
          >
            Open GitHub repository
          </Link>
        </ComponentCard>
        <ComponentCard name="Radio" gap={4}>
          <Radio label="Normal" />
          <Radio disabled label="Disabled" />
          <Radio checked label="Default Select" />
        </ComponentCard>
        <ComponentCard name="Select">
          <Stack direction="vertical" gap={2} css={{ width: '280px' }}>
            <Select>
              <option>Please select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
            <Select disabled>
              <option>Disabled, can't touch this</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
            <Select invalid>
              <option>Please select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
          </Stack>
        </ComponentCard>
        <ComponentCard name="Spinner" gap={4}>
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
        </ComponentCard>
        <ComponentCard name="Switch" direction="vertical" gap={2}>
          <Switch />
          <Switch defaultValue={true} />
        </ComponentCard>
        <ComponentCard name="Text" direction="vertical" gap={2}>
          <Text>Text might seem like a boring component</Text>
          <Text variant="subtle">
            but can we incredibly handy with variants
          </Text>
          <Text variant="danger">to quickly express context</Text>
        </ComponentCard>
        <ComponentCard name="Textarea">
          <Stack direction="vertical" gap={2} css={{ width: '400px' }}>
            <Textarea placeholder="Please enter your address" />
          </Stack>
        </ComponentCard>
      </Section>

      <Section title="Layout">
        <ComponentCard name="Stack">
          <Element css={{ width: '500px' }}>
            <Stack
              direction={['vertical', 'horizontal', 'horizontal']}
              align="center"
              gap={4}
            >
              <Stack align="center" gap={2}>
                <AirCanadaLogo />
                <Text size={2} variant="subtle">
                  Air Canada
                </Text>
              </Stack>
              <Stack justify="space-between" marginX="auto">
                <Stack direction="vertical" align="flex-end">
                  <Text size={6}>09:15</Text>
                  <Text size={4} variant="subtle">
                    AMS
                  </Text>
                </Stack>
                <Stack
                  direction="vertical"
                  align="center"
                  css={{ minWidth: '100px', paddingX: 4 }}
                >
                  <Text size={2}>8h 35</Text>
                  <Stack css={{ width: '100%' }} align="center" gap={1}>
                    <Element
                      as="hr"
                      css={{
                        width: '100%',
                        borderBottom: '0.25px solid',
                        borderColor: 'grays.500'
                      }}
                    />
                    <AirplaneIcon />
                  </Stack>
                  <Text size={1} color="greens.700">
                    Direct
                  </Text>
                </Stack>
                <Stack direction="vertical" align="flex-start">
                  <Text size={6}>11:50</Text>
                  <Text size={4} variant="subtle">
                    JFK
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Element>
        </ComponentCard>
        <ComponentCard name="Grid">
          <Grid css={{ width: '100%' }}>
            <Row css={{ height: 20, background: '#EFA6A6' }} />
            <Column
              span={[12, 4, 6]}
              css={{ height: [40, 140, 140], background: '#FAECC2' }}
            />
            <Column
              span={[12, 8, 6]}
              css={{ height: 140, background: '#B7DBF7' }}
            />
          </Grid>
        </ComponentCard>
      </Section>

      <Section title="Molecules">
        <ComponentCard name="Breadcrumb">
          <Breadcrumb>
            <Link href="/components/Breadcrumb">Home</Link>
            <Link href="/components/Breadcrumb">Settings</Link>
            <span>Notifications</span>
          </Breadcrumb>
        </ComponentCard>
        <ComponentCard name="Card">
          <Card>
            <Stack
              direction={['vertical', 'horizontal', 'horizontal']}
              align="center"
              gap={4}
            >
              <Stack align="center" gap={2}>
                <AirCanadaLogo />
                <Text size={2} variant="subtle">
                  Air Canada
                </Text>
              </Stack>
              <Stack justify="space-between" marginX="auto">
                <Stack direction="vertical" align="flex-end">
                  <Text size={6}>09:15</Text>
                  <Text size={4} variant="subtle">
                    AMS
                  </Text>
                </Stack>
                <Stack
                  direction="vertical"
                  align="center"
                  css={{ minWidth: '100px', paddingX: 4 }}
                >
                  <Text size={2}>8h 35</Text>
                  <Stack css={{ width: '100%' }} align="center" gap={1}>
                    <Element
                      as="hr"
                      css={{
                        width: '100%',
                        borderBottom: '0.25px solid',
                        borderColor: 'grays.500'
                      }}
                    />
                    <AirplaneIcon />
                  </Stack>
                  <Text size={1} color="greens.700">
                    Direct
                  </Text>
                </Stack>
                <Stack direction="vertical" align="flex-start">
                  <Text size={6}>11:50</Text>
                  <Text size={4} variant="subtle">
                    JFK
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </ComponentCard>
        <ComponentCard name="Form" css={{ height: '400px' }}>
          <Form css={{ width: '320px' }}>
            <Form.Header as="h2">Update profile details</Form.Header>
            <Form.Field label="Full name" isRequired>
              <Input placeholder="Enter your username" />
            </Form.Field>
            <Form.Field label="Email">
              <Input placeholder="Enter your email" />
            </Form.Field>
            <Form.Field label="Remember me">
              <Switch />
            </Form.Field>
            <Stack gap={2}>
              <Button>Update profile</Button>
              <Button variant="link">Cancel</Button>
            </Stack>
          </Form>
        </ComponentCard>
        <ComponentCard name="Menu">
          <Stack direction="vertical" gap="2px">
            <Button variant="secondary" css={{ width: 0 }}>
              Add label
            </Button>
            <Element
              as="ul"
              css={{
                backgroundColor: 'white',
                color: 'text.body',
                border: '1px solid',
                borderColor: 'grays.200',
                fontSize: 3,
                borderRadius: 2,
                boxShadow: 3,
                paddingY: 0,
                minWidth: '120px',
                overflow: 'auto',
                listStyle: 'none',
                paddingLeft: 0
              }}
            >
              <Element as="li" css={{ paddingY: 2, paddingX: 3 }}>
                Bug
              </Element>
              <Element
                as="li"
                css={{
                  paddingY: 2,
                  paddingX: 3,
                  backgroundColor: 'blues.600',
                  color: 'grays.100'
                }}
              >
                Docs
              </Element>
              <Element as="li" css={{ paddingY: 2, paddingX: 3 }}>
                Help wanted
              </Element>
            </Element>
          </Stack>
        </ComponentCard>
        <ComponentCard name="Paragraph">
          <Paragraph gap={8}>
            <Text>
              While building any interface, you are faced with a dozen decisions
              every minute. At the core of every high quality interface, is a
              set of constraints that help in creating this level of consistency
              and quality.
            </Text>
            <Text>
              Not only do constriants help in consistent features, but they also
              make the decisions and their implementation fast.
            </Text>
          </Paragraph>
        </ComponentCard>
        <ComponentCard name="Tooltip">
          <Tooltip label="Hey, this is the favicon!" INTERNAL_DEBUG_MODE>
            <Avatar size="small" src="https://github.com/sameen-shi.png" />
          </Tooltip>
        </ComponentCard>
      </Section>
    </Page>
  )
}

export default Documentation

const ComponentCard = ({ name, css = {}, ...props }) => {
  return (
    <Link
      as={RouterLink}
      to={`/components/${name}`}
      marginBottom={8}
      css={{ color: 'text.body', ':hover': { color: 'text.body' } }}
    >
      <Text variant="subtle" size={3} marginBottom={2}>
        {name}
      </Text>
      <Stack
        as={Card}
        justify="center"
        align="center"
        css={{
          width: 'auto',
          height: '240px',
          ':hover': {
            backgroundColor: 'grays.100'
          },
          ...css
        }}
        {...props}
      >
        {props.children}
      </Stack>
    </Link>
  )
}
