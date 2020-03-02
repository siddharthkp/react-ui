import React from 'react'

import { ThemeProvider, Avatar, Link, Text, merge } from 'react-ui'
import * as light from 'react-ui/themes/light'
import {
  Page,
  Props,
  Example,
  Section,
  Table,
  Para,
  Code
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
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            Please read the docs on{' '}
            <Link href="/core-concepts/customising-components">
              customising components
            </Link>{' '}
            first.
          </Text>
        </Para>

        <Para>
          <Text>Avatar uses the following properties from theme:</Text>
        </Para>

        <Table>
          <Table.Header>
            <Table.Column span={6}>Property</Table.Column>
            <Table.Column span={6}>Theme key</Table.Column>
          </Table.Header>
          <Table.Row>
            <Table.Column span={6}>component name</Table.Column>
            <Table.Column span={6}>Avatar</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={6}>size prop</Table.Column>
            <Table.Column span={6}>theme.sizes.Avatar</Table.Column>
          </Table.Row>
        </Table>

        <Para>
          <Text>
            You can extend the sizes supported by Avatar by extending{' '}
            <Code>theme.sizes.Avatar</Code>:
          </Text>
        </Para>

        <Example>
          <Example.Code lang="js">{`
          import {theme, components} from 'react-ui/themes/base'

          // extend base theme
          theme.sizes.Avatar = {
            xsmall: 5, // reads from theme.sizes.5
            small: 7,
            medium: 9,
            large: 12,
            xlarge: 15
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider theme={theme} components={components}>
            <Avatar size="xsmall" src="https://github.com/sameen-shi.png" />
            <Avatar size="medium" src="https://github.com/sameen-shi.png" />
            <Avatar size="xlarge" src="https://github.com/sameen-shi.png" />
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              theme={merge(light, {
                sizes: {
                  Avatar: {
                    xsmall: 5,
                    small: 7,
                    medium: 9,
                    large: 12,
                    xlarge: 15
                  }
                }
              })}
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
