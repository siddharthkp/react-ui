import React from 'react'
import * as base from 'react-ui/themes/base'
import { ThemeProvider, Link, Text, Menu } from 'react-ui'
import {
  Table,
  Page,
  Section,
  Props,
  Badge,
  Example,
  Para
} from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Menu"
      tagline="Use Menu to "
      badges={[<Badge key={0}>accessible</Badge>]}
    >
      <Para>
        Extends{' '}
        <Link
          href="https://reacttraining.com/reach-ui/menu-button"
          target="_blank"
        >
          reach-ui/menu
        </Link>
        .
      </Para>
      <Example>
        <Example.Preview>
          <Menu>
            <Menu.Button>Home</Menu.Button>
            <Menu.List>
              <Menu.Item onSelect={_ => _}>Home</Menu.Item>
              <Menu.Item onSelect={_ => _}>Search</Menu.Item>
              <Menu.Item onSelect={_ => _}>Trending</Menu.Item>
              <Menu.Item onSelect={_ => _}>Lists</Menu.Item>
            </Menu.List>
          </Menu>
        </Example.Preview>
        <Example.Code>
          {`
            <Menu>
              <Menu.Button>Home</Menu.Button>
              <Menu.List>
                <Menu.Item onSelect={onSelect}>Home</Menu.Item>
                <Menu.Item onSelect={onSelect}>Search</Menu.Item>
                <Menu.Item onSelect={onSelect}>Trending</Menu.Item>
                <Menu.Item onSelect={onSelect}>Lists</Menu.Item>
              </Menu.List>
            </Menu>
          `}
        </Example.Code>
      </Example>

      <Section title="Props: Menu">
        <Props
          props={[
            {
              name: 'children',
              type: 'Menu.Button and Menu.List',
              description: '',
              default: '',
              required: true
            }
          ]}
        />
      </Section>

      <Section title="Props: Menu.Button">
        <Para>
          Extends <Link href="/component/Button">Button</Link>
        </Para>
        <Props
          props={[
            {
              name: '+',
              type: 'props of Button',
              description: '',
              default: 'variant: "secondary"'
            }
          ]}
        />
      </Section>

      <Section title="Props: Menu.List">
        <Props
          props={[
            {
              name: 'children',
              type: '[ Menu.Item ]',
              description: '',
              required: true
            }
          ]}
        />
      </Section>

      <Section title="Props: Menu.Item">
        <Props
          props={[
            {
              name: 'onSelect',
              type: 'function',
              description: '',
              required: true
            },
            {
              name: 'children',
              type: '[ React elements ]',
              description: '',
              required: true
            }
          ]}
        />
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

        <Para>Menu has the following customisable elements:</Para>

        <Table>
          <Table.Header>Name</Table.Header>
          <Table.Row>Button</Table.Row>
          <Table.Row>MenuList</Table.Row>
          <Table.Row>MenuItem</Table.Row>
        </Table>

        <Example>
          <Example.Code lang="js">{`
          import { theme, components } from 'react-ui/themes/base'
          
          components.MenuList = {
            width: 150,
            borderRadius: 1
          }
          
          components.MenuItem = {
            paddingY: 2,
            paddingX: 3,
            '&[data-selected]': {
              backgroundColor: 'green',
              color: 'white'
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Menu>
              <Menu.Button variant="primary">Home</Menu.Button>
              <Menu.List>
                <Menu.Item onSelect={onSelect}>Home</Menu.Item>
                <Menu.Item onSelect={onSelect}>Search</Menu.Item>
                <Menu.Item onSelect={onSelect}>Trending</Menu.Item>
                <Menu.Item onSelect={onSelect}>Lists</Menu.Item>
              </Menu.List>
            </Menu>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview>
            <ThemeProvider
              components={{
                ...base.components,
                MenuList: {
                  width: 150,
                  borderRadius: 1
                },
                MenuItem: {
                  paddingY: 2,
                  paddingX: 3,
                  '&[data-selected]': {
                    backgroundColor: 'green',
                    color: 'white'
                  }
                }
              }}
            >
              <Menu>
                <Menu.Button variant="primary">Home</Menu.Button>
                <Menu.List>
                  <Menu.Item onSelect={_ => {}}>Home</Menu.Item>
                  <Menu.Item onSelect={_ => {}}>Search</Menu.Item>
                  <Menu.Item onSelect={_ => {}}>Trending</Menu.Item>
                  <Menu.Item onSelect={_ => {}}>Lists</Menu.Item>
                </Menu.List>
              </Menu>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
