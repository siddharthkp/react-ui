import React from 'react'
import {
  ThemeProvider,
  Form,
  Input,
  Select,
  Textarea,
  Switch,
  Stack,
  Button,
  Link
} from 'react-ui'
import {
  Page,
  Props,
  Example,
  Section,
  Table,
  Paragraph,
  Badge
} from '../components'

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
              <Stack>
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
        <Paragraph>
          Breadcrumb has the following customisable elements:
        </Paragraph>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>Form</Table.Row>
          <Table.Row>FormHeader</Table.Row>
          <Table.Row>FormStack</Table.Row>
          <Table.Row>FormField</Table.Row>
          <Table.Row>FormLabel</Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            Input: {
              fontSize: 4,
              ':hover': {
                borderColor: 'greens.400'
              },
              ':focus': {
                borderColor: 'greens.600'
              }
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
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
                Form: {
                  width: '400px',
                  background: 'yellows.100',
                  paddingX: 10,

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
