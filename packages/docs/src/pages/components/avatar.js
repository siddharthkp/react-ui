import React from 'react'
import { ThemeProvider, Avatar, Link } from 'react-ui'
import {
  Page,
  Props,
  Example,
  Section,
  Table,
  Paragraph
} from '../../components'

const Documentation = () => {
  return (
    <Page title="Avatar" tagline="Avatar can be used to represent a user.">
      <Example>
        <Example.Preview>
          <Avatar size="large" src="https://github.com/sameen-shi.png" />
        </Example.Preview>
        <Example.Code>
          {`<Avatar
              size="large"
              src="https://github.com/sameen-shi.png"
            />`}
        </Example.Code>
      </Example>

      <Section title="Props">
        <Props
          props={[
            {
              name: 'src',
              type: 'string',
              description: 'url of image to use as avatar',
              default: ''
            },
            {
              name: 'size',
              type: 'enum',
              description: 'size of the avatar',
              options: ['small', 'medium', 'large'],
              default: 'small'
            }
          ]}
        />
      </Section>

      <Section title="Examples">
        <Example title="Size">
          <Example.Preview>
            <Avatar size="small" src="https://github.com/sameen-shi.png" />
            <Avatar size="medium" src="https://github.com/sameen-shi.png" />
            <Avatar size="large" src="https://github.com/sameen-shi.png" />
          </Example.Preview>
          <Example.Code>{`
            <Avatar size="small"  src="https://github.com/sameen-shi.png" />
            <Avatar size="medium" src="https://github.com/sameen-shi.png" />
            <Avatar size="large"  src="https://github.com/sameen-shi.png" />
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Customisation">
        <Paragraph>Avatar uses the following theme properties:</Paragraph>

        <Table>
          <Table.Header>
            <Table.Column span={3}>Property</Table.Column>
            <Table.Column span={3}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={3}>size</Table.Column>
            <Table.Column span={3}>sizes.Avatar</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={3}>borderColor</Table.Column>
            <Table.Column span={3}>Avatar.borderColor</Table.Column>
          </Table.Row>
        </Table>

        <Paragraph>
          Read more about <Link href="/todo">customizing components</Link> here.
        </Paragraph>

        <Example>
          <Example.Code lang="js">{`
          const components = {
            sizes: {
              Avatar: {
                xsmall: 5,
                small: 7,
                medium: 9,
                large: 12,
                xlarge: 15
              }
            },
            Avatar: {
              borderColor: 'blues.200'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Avatar size="xsmall" src="https://github.com/sameen-shi.png" />
            <Avatar size="medium" src="https://github.com/sameen-shi.png" />
            <Avatar size="xlarge" src="https://github.com/sameen-shi.png" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                sizes: { Avatar: { xsmall: 5, xlarge: 15 } },
                Avatar: {
                  borderColor: 'blues.200'
                }
              }}
            >
              <Avatar size="xsmall" src="https://github.com/sameen-shi.png" />
              <Avatar size="medium" src="https://github.com/sameen-shi.png" />
              <Avatar size="xlarge" src="https://github.com/sameen-shi.png" />
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
