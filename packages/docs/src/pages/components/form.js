import React from 'react'
import * as base from 'react-ui/themes/base'
import {
  ThemeProvider,
  Form,
  Input,
  Select,
  Textarea,
  Switch,
  Stack,
  Button,
  Link,
  Text
} from 'react-ui'
import {
  Page,
  Props,
  Example,
  Section,
  Table,
  Para,
  Badge
} from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Form"
      tagline="Use Forms a set of information from the user"
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Example>
        <Example.Preview>
          <Form>
            <Form.Field label="Name">
              <Input type="text" placeholder="Please enter your name" />
            </Form.Field>
            <Form.Field label="Favorite fruit">
              <Select>
                <option>Please select an option</option>
                <option value="1">Apple</option>
                <option value="2">Orange</option>
              </Select>
            </Form.Field>
          </Form>
        </Example.Preview>
        <Example.Code>
          {`
            <Form>
              <Form.Field label="Name">
                <Input type="text" placeholder="Please enter your name" />
              </Form.Field>
              <Form.Field label="Favorite fruit">
                <Select>
                  <option>Please select an option</option>
                  <option value="1">Apple</option>
                  <option value="2">Orange</option>
                </Select>
              </Form.Field>
            </Form>
          `}
        </Example.Code>
      </Example>

      <Section title="Props: Form.Field">
        <Props
          props={[
            {
              name: 'label',
              type: 'string',
              description: 'Label for form field, automatically adds id',
              default: ''
            },
            {
              name: 'id',
              type: 'string',
              description:
                'use a custom id instead of automatically generated one',
              default: ''
            },
            {
              name: 'isRequired',
              type: 'boolean',
              description: 'Is this field required',
              default: 'false'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example>
          <Example.Preview direction="vertical" gap={2}>
            <Form>
              <Form.Header as="h2">Update profile details</Form.Header>
              <Form.Field label="Full name" isRequired>
                <Input placeholder="Enter your username" />
              </Form.Field>
              <Form.Field label="Email">
                <Input placeholder="Enter your email" />
              </Form.Field>
              <Form.Field label="Change password">
                <Input placeholder="Enter a password" />
              </Form.Field>
              <Form.Field label="Weather">
                <Select>
                  <option value="">What's the weather like?</option>
                  <option value="hot">Hot</option>
                  <option value="cold">Cold</option>
                </Select>
              </Form.Field>
              <Form.Field label="Address">
                <Textarea placeholder="Enter your address" />
              </Form.Field>
              <Form.Field label="Remember me">
                <Switch />
              </Form.Field>
              <Stack gap={2}>
                <Button>Update profile</Button>
                <Button variant="link">Cancel</Button>
              </Stack>
            </Form>
          </Example.Preview>
          <Example.Code>{`
            <Form>
              <Form.Header as="h2">Update profile details</Form.Header>
              <Form.Field label="Full name" isRequired>
                <Input placeholder="Enter your username" />
              </Form.Field>
              <Form.Field label="Email">
                <Input placeholder="Enter your email" />
              </Form.Field>
              <Form.Field label="Change password">
                <Input placeholder="Enter a password" />
              </Form.Field>
              <Form.Field label="Weather">
                <Select>
                  <option value="">What's the weather like?</option>
                  <option value="hot">Hot</option>
                  <option value="cold">Cold</option>
                </Select>
              </Form.Field>
              <Form.Field label="Address">
                <Textarea placeholder="Enter your address" />
              </Form.Field>
              <Form.Field label="Remember me">
                <Switch />
              </Form.Field>
              <Stack>
                <Button>Update profile</Button>
                <Button variant="link">Cancel</Button>
              </Stack>
            </Form>
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

        <Para>Form has the following customisable elements:</Para>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>Form</Table.Row>
          <Table.Row>FormHeader</Table.Row>
          <Table.Row>FormStack</Table.Row>
          <Table.Row>FormField</Table.Row>
          <Table.Row>FormLabel</Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          components.Form = {
            width: '400px',
            backgroundColor: 'pink',
            paddingX: 10,

            FormHeader: {
              textAlign: 'center'
            },
            FormLabel: {
              textTransform: 'uppercase'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}>
            <Form>
              <Form.Field label="Name">
                <Input type="text" placeholder="Please enter your name" />
              </Form.Field>
              <Form.Field label="Favorite fruit">
                <Select>
                  <option>Please select an option</option>
                  <option value="1">Apple</option>
                  <option value="2">Orange</option>
                </Select>
              </Form.Field>
            </Form>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                ...base.components,
                Form: {
                  width: '400px',
                  backgroundColor: 'pink',
                  padding: 10,

                  FormHeader: {
                    textAlign: 'center'
                  },
                  FormLabel: {
                    textTransform: 'uppercase'
                  }
                }
              }}
            >
              <Form>
                <Form.Header as="h2">Welcome back!</Form.Header>
                <Form.Field label="Name">
                  <Input type="text" placeholder="Please enter your name" />
                </Form.Field>
                <Form.Field label="Favorite fruit">
                  <Select>
                    <option>Please select an option</option>
                    <option value="1">Apple</option>
                    <option value="2">Orange</option>
                  </Select>
                </Form.Field>
              </Form>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
