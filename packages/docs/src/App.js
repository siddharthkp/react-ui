import React from 'react'
import { Router, Location, Link as RouterLink } from '@reach/router'

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
  calc
} from 'react-ui'

import * as Pages from './pages'
import './style.css'

const App = () => {
  const [menuVisible, setMenuVisibility] = React.useState(false)
  const [locationKey, setLocationKey] = React.useState()

  React.useEffect(() => {
    setMenuVisibility(false)
  }, [locationKey])

  return (
    <ThemeProvider>
      <Stack
        as="header"
        align="center"
        css={{
          height: 12,
          borderBottom: '1px solid',
          borderColor: 'grays.100'
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
      </Stack>

      <Grid css={{ maxWidth: 1024, marginX: 'auto', color: 'text.body' }}>
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
            paddingX: 16,
            paddingBottom: calc('16 * 2'),
            height: calc('100vh - 12')
          }}
        >
          <Router>
            <Home path="/" />
            <Documentation path="getting-started">
              <Pages.GettingStarted path="/" />
            </Documentation>

            <Documentation path="core-concepts">
              <Pages.CoreConcepts path="/" />
              <Pages.CreatingNewComponents path="/creating-new-components" />
              <Pages.Customisation path="/customisation" />
              <Pages.ThemeSpec path="/theme-specification" />
              <Pages.Layouts path="/layouts" />
            </Documentation>

            <Documentation path="components">
              <Pages.ComponentsIndex path="/" />
              {Object.keys(Pages).map(name => {
                const Page = Pages[name]
                return <Page key={name} path={name} />
              })}
            </Documentation>
          </Router>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App

const CoreConcepts = () => {
  const items = Pages.CoreConcepts.items
  return <NavSection items={items} />
}

const ComponentNav = () => {
  return (
    <>
      <Text size={3} color="text.subtle" marginBottom={3}>
        Building blocks:
      </Text>
      <NavSection
        items={[
          { title: '- Element', path: 'Element' },
          { title: 'Avatar', path: 'Avatar' },
          { title: 'Button', path: 'Button' },
          { title: 'Heading', path: 'Heading' },
          { title: '- Image', path: 'Image' },
          { title: 'Input', path: 'Input' },
          { title: 'Link', path: 'Link' },
          { title: 'Select', path: 'Select' },
          { title: 'Spinner', path: 'Spinner' },
          { title: 'Switch', path: 'Switch' },
          { title: 'Text', path: 'Text' },
          { title: 'Textarea', path: 'Textarea' },
          { title: '- ThemeProvider', path: 'ThemeProvider' }
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
          { title: 'Breadcrumb', path: 'Breadcrumb' },
          { title: '- Card', path: 'Card' },
          { title: 'Form', path: 'Form' },
          { title: 'Menu', path: 'Menu' },
          { title: '- Paragraph', path: 'Paragraph' }
        ]}
      />
    </>
  )
}

const NavSection = ({ items }) => {
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
    >
      {items.map(item => (
        <li key={item.path}>
          <Link variant="subtle" as={RouterLink} to={item.path}>
            {item.title}
          </Link>
        </li>
      ))}
    </Element>
  )
}

const Documentation = props => <Element {...props} />

const Navigation = props => (
  <Column as="aside" {...props}>
    <NavSection
      items={[
        { title: 'Getting started', path: 'getting-started' },
        { title: 'Core concepts', path: 'core-concepts' },
        { title: 'Components', path: 'components' },
        // { title: 'Screencasts', path: 'screencasts' },
        { title: 'Credits', path: 'credits' }
      ]}
    />
    <Router>
      <CoreConcepts path="core-concepts/*" />
      <ComponentNav path="components/*" />
    </Router>
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
    <Stack direction="vertical" gap={10}>
      <Heading>
        React UI comes with a set of components that are{' '}
        <Text color="blues.700">accessible,</Text>{' '}
        <Text color="blues.700">responsive</Text> and{' '}
        <Text color="blues.700">customisable.</Text>
      </Heading>

      <Link
        href="/getting-started"
        css={{
          Text: {
            transitionProperty: 'margin',
            transitionDuration: 4
          },
          ':hover': {
            Text: {
              marginLeft: 2
            }
          }
        }}
      >
        Get started <Text color="text.link">→</Text>
      </Link>
    </Stack>
  )
}
