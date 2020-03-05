import React from 'react'
import {
  ThemeProvider,
  Element,
  Breadcrumb,
  Text,
  Link,
  Card,
  Select,
  Stack
} from 'react-ui'
import * as light from 'react-ui/themes/light'
import * as dark from 'react-ui/themes/dark'

import { Page, Example, Section, Para, Code, Table } from '../../components'

const Documentation = () => {
  return (
    <ThemeProvider tokens={light.tokens} components={light.components}>
      <Page title="Customising components">
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            This page talks about customising the look and feel of Components.
            If you want to customise design tokens like colors, space, font
            sizes, etc. at the application level, jump to{' '}
            <Link href="/core-concepts/customising-tokens">
              Customising Design Tokens.
            </Link>
          </Text>
        </Para>
        <Section>
          <Para>
            <Text>
              Your preferred way of customising components will depends on what
              kind of components are you building with React UI.
            </Text>
          </Para>

          <Element
            as="ul"
            css={{
              paddingLeft: 0,
              listStyle: 'none',
              li: { paddingY: 2 }
            }}
          >
            <Para as="li">
              <Text>
                <Link href="#re-export-components">
                  1. Re-export components
                </Link>
              </Text>
              <Text css={{ paddingLeft: 4 }}>
                If you are using React UI as a base for building your own set of{' '}
                <Text css={{ textDecoration: 'underline' }}>
                  opinionated components
                </Text>
                , pick this. This option is great for products with one
                aesthetic and/or for folks building internal component libraries
                for their teams.
              </Text>
            </Para>
            <Para as="li">
              <Link block href="#components-in-theme">
                2. Components in theme
              </Link>
              <Text css={{ paddingLeft: 4 }}>
                This approach is recommended if you are using React UI to build
                a{' '}
                <Text css={{ textDecoration: 'underline' }}>
                  themeable component library
                </Text>{' '}
                or if your application has multiple themes that you'd like to
                control at the global level.
              </Text>
            </Para>
          </Element>
          <Para>
            <Text>
              You can achieve the same results with either option, so you can
              also make also the choice based on the API you like more.
            </Text>
          </Para>
        </Section>

        <Section id="re-export-components" title="1. Re-export components">
          <Para>
            <Text>
              Each component in React UI supports custom styles with the{' '}
              <Code>css</Code> prop.
            </Text>
            <Text>
              You can create your own components that render React UI components
              with the styles you like.
            </Text>
          </Para>
          <Example>
            <Example.Code lang="js">
              {`
              import React from 'react'
              import { Breadcrumb as BaseComponent } from 'react-ui'

              const customStyles = {
                background: 'blues.100',  // from tokens.colors.blues.100
                padding: 2,               // from tokens.space.4
              }
            `}
            </Example.Code>
            <Example.Code lang="jsx">
              {`
              const Breadcrumb = props => {
                return <BaseComponent css={customStyles} {...props} />
              }
            `}
            </Example.Code>
            <Example.Code lang="js">
              {`
              export { Breadcrumb }
            `}
            </Example.Code>
          </Example>

          <Para>
            <Text>
              You can target the internal elements of a component by their{' '}
              <Code>component name</Code>. All React UI components (and their
              sub-elements) have one.
            </Text>
          </Para>
          <Para>
            <Text>
              You can find the name by looking up the documentation page for the
              component.
            </Text>
            <Text>
              Example from the documentation of{' '}
              <Link href="/components/Breadcrumb#Customisation">
                Breadcrumb:
              </Link>
            </Text>
            <Example hideCode>
              <Example.Preview direction="vertical" gap={4}>
                <Para>Breadcrumb has the following customisable elements:</Para>

                <Table>
                  <Table.Header>Name</Table.Header>
                  <Table.Row>Breadcrumb</Table.Row>
                  <Table.Row>BreadcrumbItem</Table.Row>
                  <Table.Row>BreadcrumbSeparator</Table.Row>
                  <Table.Row>Link</Table.Row>
                </Table>
              </Example.Preview>
            </Example>
            <Text size={4} variant="subtle" css={{ fontStyle: 'italic' }}>
              The component name is also attached to the rendered html as a data
              attribute: <Code>data-component</Code> and can be found by
              inspecting the element in developer tools.
            </Text>
          </Para>

          <Example>
            <Example.Code lang="js">
              {`
              import React from 'react'
              import { Breadcrumb as BaseComponent } from 'react-ui'

              const customStyles = {
                background: 'blues.100',      // from tokens.colors.blues.100
                padding: 2,                   // from tokens.space.4


                BreadcrumbSeparator: {
                  color: 'text.subtle'        // from tokens.colors.text.subtle
                },
                Link: {
                  // this will only target Link inside Breadcrumb,
                  // not all Links
                  textDecoration: 'underline' // plain old css :)
                }
              }
            `}
            </Example.Code>
            <Example.Code lang="jsx">
              {`
              const Breadcrumb = props => {
                return <BaseComponent css={customStyles} {...props} />
              }
            `}
            </Example.Code>
            <Example.Code lang="js">
              {`
              export { Breadcrumb }
            `}
            </Example.Code>
          </Example>
        </Section>

        <Section id="components-in-theme" title="2. Components in theme">
          <Para>
            <Text>
              React UI relies on a theme object provided to the ThemeProvider
              that wraps the application.
            </Text>
          </Para>
          <Example>
            <Example.Code lang="js">{`
            import React from 'react'
            import ReactDOM from 'react-dom'
            import { ThemeProvider } from 'react-ui'
            import App from './App'
            import { tokens } from './tokens'
            
          `}</Example.Code>
            <Example.Code lang="jsx">{`
            ReactDOM.render(
              <ThemeProvider tokens={tokens}>
                <App />
              </ThemeProvider>,
              document.getElementById('root')
            )
           `}</Example.Code>
          </Example>

          <Para>
            <Text>
              Along with theme, you can pass a second <Code>components</Code>{' '}
              prop to the <Code>ThemeProvider</Code> to modify{' '}
              <Text css={{ textDecoration: 'underline' }}>
                all instances of a component
              </Text>{' '}
              from the library.
            </Text>
            <Text>
              All React UI components (and their sub-elements) can be identified
              by their <Code>component name</Code>:
            </Text>
          </Para>

          <Example>
            <Example.Code lang="js">{`
          import React from 'react'
          import ReactDOM from 'react-dom'
          import { ThemeProvider } from 'react-ui'
          import App from './App'
          import tokens from './tokens'

          const components = {
            Breadcrumb: {
              background: 'blues.100',  // from tokens.colors.blues.100
              padding: 2,               // from tokens.space.4

              Link: {
                // this will only target Link inside Breadcrumb,
                // not all Links
                textDecoration: 'underline'
              }
            },
            BreadcrumbSeparator: {
              color: 'text.subtle'     // from tokens.colors.text.subtle
            }
          }
        `}</Example.Code>
            <Example.Code lang="jsx">{`
          ReactDOM.render(
            <ThemeProvider
              tokens={tokens}
              components={components}
            >
              <App />
            </ThemeProvider>,
            document.getElementById('root')
          )
        `}</Example.Code>
          </Example>

          <Para>
            <Text>
              You can find the name by looking up the documentation page for the
              component.
            </Text>
            <Text>
              Example from the documentation of{' '}
              <Link href="/components/Breadcrumb#Customisation">
                Breadcrumb:
              </Link>
            </Text>
            <Example hideCode>
              <Example.Preview direction="vertical" gap={4}>
                <Para>Breadcrumb has the following customisable elements:</Para>

                <Table>
                  <Table.Header>Name</Table.Header>
                  <Table.Row>Breadcrumb</Table.Row>
                  <Table.Row>BreadcrumbItem</Table.Row>
                  <Table.Row>BreadcrumbSeparator</Table.Row>
                  <Table.Row>Link</Table.Row>
                </Table>
              </Example.Preview>
            </Example>
            <Text size={4} variant="subtle" css={{ fontStyle: 'italic' }}>
              The component name is also attached to the rendered html as a data
              attribute: <Code>data-component</Code> and can be found by
              inspecting the element in developer tools.
            </Text>
          </Para>
          <Para>
            <Text>
              To make code more manageable, you might want to move the{' '}
              <Code>components</Code> object to a file of it's own or add them
              to the theme file.
            </Text>
          </Para>
          <Para>
            <Text>
              With this approach you can switch between themes by switching the
              tokens and components object passed the <Code>ThemeProvider</Code>
            </Text>
          </Para>

          <Example>
            <Example.Preview>
              <AppWithThemeSwitcher />
            </Example.Preview>
            <Example.Code lang="js">{`
          import React from 'react'
          import ReactDOM from 'react-dom'
          import { ThemeProvider, Select } from 'react-ui'
          import App from './App'
          
          import * as light from './themes/light'
          import * as dark from './themes/light'

          const AppWithThemeSwitcher = () => {
            const themes = { light, dark }
            const [themeName, setThemeName] = React.useState('light')

            const { tokens, components } = themes[themeName] // light or dark

            return (
              <ThemeProvider tokens={tokens} components={components}>
                <Select value={themeName} onChange={e => setThemeName(e.target.value)}>
                  <option>light</option>
                  <option>dark</option>
                </Select>
                <App />
              </ThemeProvider>
            )
          }
        `}</Example.Code>
            <Example.Code lang="jsx">{`
          ReactDOM.render(
            <AppWithThemeSwitcher />,
            document.getElementById('root')
          )
        `}</Example.Code>
          </Example>
        </Section>
      </Page>
    </ThemeProvider>
  )
}

export default Documentation

const AppWithThemeSwitcher = () => {
  const themes = { light, dark }
  const [themeName, setThemeName] = React.useState('light')

  return (
    <Stack direction="vertical" gap={2}>
      <ThemeProvider
        tokens={themes[themeName].tokens}
        components={themes[themeName].components}
      >
        <Select value={themeName} onChange={e => setThemeName(e.target.value)}>
          <option>light</option>
          <option>dark</option>
        </Select>
        <Card
          css={{
            backgroundColor: 'App.background'
          }}
        >
          <Breadcrumb>
            <Link href="/home">Home</Link>
            <Link href="/home">Settings</Link>
            <span>Notifications</span>
          </Breadcrumb>
        </Card>
      </ThemeProvider>
    </Stack>
  )
}
