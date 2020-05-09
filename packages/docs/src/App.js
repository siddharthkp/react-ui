import React from 'react'
import { Router, Location, Link as RouterLink } from '@reach/router'
import { Global } from '@emotion/core'

import {
  ThemeProvider,
  Heading,
  Element,
  Grid,
  Column,
  Button,
  Stack,
  Link,
  Text,
  Menu,
  calc,
  merge,
  version
} from 'react-ui'

import * as base from 'react-ui/themes/base'
import * as light from 'react-ui/themes/light'
import * as dark from 'react-ui/themes/dark'
import { components as themeComponents } from './theme-components'

import { Page, Section, Divider, List } from './components'

import * as Pages from './pages'
import './style.css'

const themes = { base, light, dark }

const App = () => {
  const [menuVisible, setMenuVisibility] = React.useState(false)
  const [locationKey, setLocationKey] = React.useState()

  const [theme, setTheme] = React.useState('light')

  document.querySelector('#favicon').href = `favicon-${theme}.png`

  React.useEffect(() => {
    setMenuVisibility(false)
  }, [locationKey])

  const components = merge(themes[theme].components, themeComponents)

  return (
    <ThemeProvider tokens={themes[theme].tokens} components={components}>
      <Global
        styles={{
          body: { transition: 'background 500ms, color 500ms' }
        }}
      />
      <Stack
        as="header"
        justify="space-between"
        align="center"
        css={{
          height: 12,
          borderBottom: '1px solid',
          borderColor: 'App.borderColor',
          paddingRight: 2
        }}
        marginBottom={12}
      >
        <Button
          variant="link"
          css={{
            color: 'text.body',
            visibility: ['visible', 'visible', 'hidden']
          }}
          onClick={() => setMenuVisibility(!menuVisible)}
        >
          <MenuIcon />
        </Button>
        <div>
          <Text variant="subtle" size={3}>
            v{version}
          </Text>
          <Menu>
            <Menu.Button variant="link" style={{ paddingRight: 1 }}>
              <Text marginRight={1} css={{ textTransform: 'capitalize' }}>
                Theme: {theme}
              </Text>
              {chevron}
            </Menu.Button>
            <Menu.List>
              <Menu.Item onSelect={_ => setTheme('base')}>Base</Menu.Item>
              <Menu.Item onSelect={_ => setTheme('light')}>Light</Menu.Item>
              <Menu.Item onSelect={_ => setTheme('dark')}>Dark</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </Stack>
      <Grid
        css={{
          maxWidth: '1024px',
          marginX: 'auto',
          color: 'text.body'
        }}
      >
        <Location>
          {({ location }) => {
            setLocationKey(location.key)

            return (
              <>
                <Navigation
                  id="desktop-navigation"
                  span={[0, 0, 3]}
                  css={{
                    height: calc('100vh - 12'),
                    paddingLeft: 8
                  }}
                />

                <Navigation
                  id="mobile-navigation"
                  span={[menuVisible ? 12 : 0, menuVisible ? 12 : 0, 0]}
                  css={{ paddingLeft: 8 }}
                />
              </>
            )
          }}
        </Location>

        <Column
          as="main"
          span={[12, 12, 9]}
          css={{
            paddingX: [8, 16, 16],
            paddingBottom: calc('16 * 2'),
            height: calc('100vh - 12')
          }}
        >
          <Router>
            <ScrollToTop path="/">
              <Home path="/" />
              <Documentation path="getting-started">
                <Pages.GettingStarted path="/" />
              </Documentation>

              <Documentation path="core-concepts">
                <Pages.CoreConcepts path="/" />
                <Pages.Ideas path="/ideas" />
                <Pages.Constraints path="/constraints-based-design" />
                <Pages.CreatingNewComponents path="/creating-new-components" />
                <Pages.CustomisingComponents path="/customising-components" />
                <Pages.CustomisingTokens path="/customising-tokens" />
                <Pages.IntegratingWithReachUI path="/integrating-with-reach-ui" />
                <Pages.Layouts path="/layouts" />
              </Documentation>

              <Documentation path="components">
                <Pages.ComponentsIndex path="/" />
                {Object.keys(Pages).map(name => {
                  const Page = Pages[name]
                  return <Page key={name} path={name} />
                })}
              </Documentation>

              <Documentation path="changelog">
                <Pages.Changelog path="/" />
              </Documentation>

              <Documentation path="ecosystem">
                <Pages.EcosystemIndex path="/" />
                {Object.keys(Pages).map(name => {
                  const Page = Pages[name]
                  return <Page key={name} path={name} />
                })}
              </Documentation>
            </ScrollToTop>
          </Router>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App

const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

const CoreConcepts = () => {
  const items = Pages.CoreConcepts.items
  return <NavSection items={items} />
}

const ComponentNav = () => {
  return (
    <>
      <Text size={3} color="text.subtle" marginBottom={3}>
        Primitives:
      </Text>
      <NavSection
        items={[
          { title: 'Element', path: 'Element' },
          { title: 'ThemeProvider', path: 'ThemeProvider' }
        ]}
      />
      <Text size={3} color="text.subtle" marginBottom={3}>
        Building blocks:
      </Text>
      <NavSection
        items={[
          { title: 'Avatar', path: 'Avatar' },
          { title: 'Checkbox', path: 'Checkbox' },
          { title: 'Button', path: 'Button' },
          { title: 'Heading', path: 'Heading' },
          { title: 'Image', path: 'Image' },
          { title: 'Input', path: 'Input' },
          { title: 'Link', path: 'Link' },
          { title: 'Select', path: 'Select' },
          { title: 'Skeleton', path: 'Skeleton' },
          { title: 'Spinner', path: 'Spinner' },
          { title: 'Switch', path: 'Switch' },
          { title: 'Text', path: 'Text' },
          { title: 'Textarea', path: 'Textarea' }
        ]}
      />
      <Text size={3} color="text.subtle" marginBottom={3}>
        Layout:
      </Text>
      <NavSection
        items={[
          { title: 'Stack', path: 'Stack' },
          { title: 'Grid', path: 'Grid' }
        ]}
      />
      <Text size={3} color="text.subtle" marginBottom={3}>
        Molecules:
      </Text>
      <NavSection
        items={[
          { title: 'Alert', path: 'Alert' },
          { title: 'Breadcrumb', path: 'Breadcrumb' },
          { title: 'Card', path: 'Card' },
          { title: 'Dialog', path: 'Dialog' },
          { title: 'Form', path: 'Form' },
          { title: 'Menu', path: 'Menu' },
          { title: 'Paragraph', path: 'Paragraph' },
          { title: 'Tooltip', path: 'Tooltip' }
        ]}
      />
    </>
  )
}

const NavSection = ({ items, ...props }) => {
  return (
    <Element
      as="ul"
      marginTop={0}
      marginBottom={8}
      css={{
        listStyle: 'none',
        fontSize: 3,
        paddingLeft: 0,
        li: {
          paddingY: 2
        }
      }}
      {...props}
    >
      {items.map(item => (
        <li key={item.path}>
          {item.external ? (
            <Link href={item.path} target="_blank">
              {item.title}
            </Link>
          ) : (
            <Link as={RouterLink} to={item.path}>
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </Element>
  )
}

const Documentation = props => <Element {...props} />

const Navigation = props => (
  <Column as="aside" {...props}>
    <Element>
      <NavSection
        marginBottom={16}
        items={[
          { title: 'Getting started', path: 'getting-started' },
          { title: 'Core concepts', path: 'core-concepts' },
          { title: 'Components', path: 'components' },
          // { title: 'Ecosystem', path: 'ecosystem' },
          {
            title: 'GitHub',
            path: 'https://github.com/siddharthkp/react-ui',
            external: true
          },
          {
            title: 'Changelog',
            path: 'changelog'
          }
          // { title: 'Videos', path: 'videos' },
        ]}
      />

      <Router>
        <CoreConcepts path="core-concepts/*" />
        <ComponentNav path="components/*" />
      </Router>
    </Element>
  </Column>
)

const MenuIcon = props => (
  <Element
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </Element>
)

const Home = props => {
  return (
    <Page>
      <Section>
        <Heading>
          React UI comes with a set of components that are{' '}
          <Text color="blues.700">accessible,</Text>{' '}
          <Text color="blues.700">responsive</Text> and{' '}
          <Text color="blues.700">customisable.</Text>
        </Heading>
      </Section>
      <Section>
        <List>
          <Text>Start here:</Text>
          <Link href="/core-concepts/ideas">
            Read old and new ideas in React UI →
          </Link>
          <Link href="/components">Explore the components →</Link>
          <Link href="https://codesandbox.io/s/react-ui-template-302iq">
            Try out React UI on CodeSandbox →
          </Link>
        </List>
      </Section>
      <Divider />
    </Page>
  )
}

const chevron = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)
