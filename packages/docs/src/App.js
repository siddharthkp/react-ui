import React from 'react'
import { Router, Location, Link as RouterLink } from '@reach/router'
import { Global } from '@emotion/core'
import { interpolate } from '@ds-tools/primitives/interpolate'

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
  Paragraph,
  Avatar,
  Card,
  calc
} from 'react-ui'
import { Page, Section, Example, Divider, useThemeSwitcher } from './components'

import * as Pages from './pages'
import './style.css'

const App = () => {
  const [menuVisible, setMenuVisibility] = React.useState(false)
  const [locationKey, setLocationKey] = React.useState()
  const {
    name,
    tokens,
    components,
    setThemeName,
    ThemeSwitcher
  } = useThemeSwitcher()

  React.useEffect(() => {
    setMenuVisibility(false)
  }, [locationKey])

  return (
    <ThemeProvider tokens={tokens} components={components}>
      <Global
        styles={interpolate(
          {
            body: {
              backgroundColor: 'App.backgroundColor',
              color: 'App.color',
              transition: 'background 500ms, color 500ms'
            }
          },
          tokens
        )}
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
        <ThemeSwitcher name={name} setThemeName={setThemeName} />
      </Stack>

      <Grid
        css={{
          maxWidth: 1024,
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
              <Pages.Constraints path="/constraints-based-design" />
              <Pages.CreatingNewComponents path="/creating-new-components" />
              <Pages.CustomisingComponents path="/customising-components" />
              <Pages.CustomisingTokens path="/customising-tokens" />
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
          { title: 'Button', path: 'Button' },
          { title: 'Heading', path: 'Heading' },
          { title: 'Image', path: 'Image' },
          { title: 'Input', path: 'Input' },
          { title: 'Link', path: 'Link' },
          { title: 'Select', path: 'Select' },
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
          { title: 'Breadcrumb', path: 'Breadcrumb' },
          { title: 'Card', path: 'Card' },
          { title: 'Form', path: 'Form' },
          { title: 'Menu', path: 'Menu' },
          { title: 'Stat', path: 'Stat' },
          { title: 'Paragraph', path: 'Paragraph' }
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
          {item.todo ? (
            <Text variant="subtle" css={{ fontStyle: 'italic' }}>
              todo: {item.title}
            </Text>
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
    <NavSection
      marginBottom={16}
      items={[
        { title: 'Getting started', path: 'getting-started' },
        { title: 'Core concepts', path: 'core-concepts' },
        { title: 'Components', path: 'components' },
        { title: 'Credits', path: 'credits', todo: true }
        // { title: 'Videos', path: 'videos' },
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
        <Link
          href="/getting-started"
          css={{
            Text: {
              transitionProperty: 'margin',
              transitionDuration: 4
            },
            ':hover': {
              Text: { marginLeft: 2 }
            }
          }}
        >
          Get started <Text color="text.link">→</Text>
        </Link>
      </Section>
      <Divider />
      <Section>
        <Example hideCode>
          <Example.Preview
            justify="center"
            css={{ backgroundColor: 'grays.100' }}
          >
            <Card css={{ width: 250 }}>
              <Stack gap={2} align="center">
                <Avatar size="medium" src="https://github.com/sameen-shi.png" />
                <Stack direction="vertical">
                  <Text block>Siddharth</Text>
                  <Text variant="subtle" size={2}>
                    likes CSS
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Example.Preview>
          <Example.Code>{`
            <Card css={{width: 250}}>
              <Stack gap={2} align="center">
                <Avatar size="medium" src="https://github.com/sameen-shi.png" />
                <Stack direction="vertical">
                  <Text>Siddharth</Text>
                  <Text variant="subtle" size={2}>likes CSS</Text>
                </Stack>
              </Stack>
            </Card>
          `}</Example.Code>
        </Example>
        <Example hideCode>
          <Example.Preview
            justify="center"
            css={{ backgroundColor: 'grays.100' }}
          >
            <Card>
              <Stack
                direction={['vertical', 'horizontal', 'horizontal']}
                gap={4}
              >
                <Stack align="center" gap={1}>
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
          </Example.Preview>
          <Example.Code>{`
            <Card>
              <Stack direction={['vertical', 'horizontal', 'horizontal']} gap={4}>
                
                <Stack align="center" gap={1}>
                  <AirCanadaLogo />
                  <Text size={2} variant="subtle">Air Canada</Text>
                </Stack>
                
                <Stack justify="space-between" marginX="auto">
                
                  <Stack direction="vertical" align="flex-end">
                    <Text size={6}>09:15</Text>
                    <Text size={4} variant="subtle">AMS</Text>
                  </Stack>
                  
                  <Stack
                    direction="vertical"
                    align="center"
                    css={{ minWidth: '100px', paddingX: 4 }}
                  >
                    <Text size={2}>8h 35</Text>
                    <Stack css={{ width: '100%' }} align="center" gap={1}>
                      <Divider />
                      <AirplaneIcon />
                    </Stack>
                    <Text size={1} color="greens.700">Direct</Text>
                  </Stack>
                  
                  <Stack direction="vertical" align="flex-start">
                    <Text size={6}>11:50</Text>
                    <Text size={4} variant="subtle">JFK</Text>
                  </Stack>
                
                </Stack>
              
              </Stack>
            </Card>
          `}</Example.Code>
        </Example>
        <Example hideCode>
          <Example.Preview
            justify="center"
            css={{ backgroundColor: 'grays.100' }}
          >
            <Card>
              <Stack marginBottom={3} justify="space-between">
                <Stack gap={2}>
                  <Link href="https://twitter.com/freezydorito">
                    <Avatar
                      size="medium"
                      src="https://twitter-avatar.now.sh/freezydorito"
                    />
                  </Link>
                  <Stack direction="vertical">
                    <Link
                      variant="subtle"
                      weight="semibold"
                      href="https://twitter.com/freezydorito"
                    >
                      laura bananas
                    </Link>
                    <Text size={3} variant="subtle">
                      @freezydorito
                    </Text>
                  </Stack>
                </Stack>
                <Link
                  href="https://twitter.com/freezydorito/status/1223958402281484289"
                  target="_blank"
                >
                  <TwitterIcon />
                </Link>
              </Stack>
              <Paragraph marginBottom={2}>
                <Text>
                  designer: looks nice but can we move the headers 1px up
                </Text>
                <Text>
                  developer: its not that we cant its that then i have to put
                  19px (ugly number) instead of 20px (beautiful number) in the
                  css and that makes me sad
                </Text>
                <Text>designer: ah absolutely understandable carry on</Text>
              </Paragraph>

              <Text size={3} variant="subtle">
                2:16PM · Feb 2, 2020
              </Text>
            </Card>
          </Example.Preview>
          <Example.Code>{`          
            <Card>
              <Stack justify="space-between" marginBottom={3}>
                
                <Stack direction="horizontal" gap={2}>
                  <Link href="https://twitter.com/freezydorito">
                    <Avatar size="medium" src="https://twitter-avatar.now.sh/freezydorito" />
                  </Link>
                  
                  <Stack direction="vertical">
                    <Link variant="subtle" weight="semibold" src="https://twitter.com/freezydorito">
                      laura bananas
                    </Link>
                    <Text size={3} variant="subtle">
                      @freezydorito
                    </Text>
                  </Stack>
                </Stack>

                <Link
                  href="https://twitter.com/freezydorito/status/1223958402281484289"
                  target="_blank"
                >
                  <TwitterIcon />
                </Link>
              </Stack>

              <Paragraph marginBottom={2}>
                <Text>
                  designer: looks nice but can we move the headers 1px up
                </Text>
                <Text>
                  developer: its not that we cant its that then i have to put
                  19px (ugly number) instead of 20px (beautiful number) in the
                  css and that makes me sad
                </Text>
                <Text>designer: ah absolutely understandable carry on</Text>
              </Paragraph>
              
              <Text size={3} variant="subtle">2:16PM · Feb 2, 2020</Text>
              
            </Card>
          `}</Example.Code>
        </Example>
      </Section>
    </Page>
  )
}

const TwitterIcon = () => (
  <svg
    id="Logo_FIXED"
    data-name="Logo — FIXED"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    width="32"
    height="32"
  >
    <path
      fill="#1da1f2"
      d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
    />
  </svg>
)

const AirplaneIcon = () => (
  <svg version="1.1" x="0" y="0" viewBox="0 0 12 12" width="12" height="12">
    <path
      fill="#929FB1"
      d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
    ></path>
  </svg>
)

const AirCanadaLogo = props => (
  <Element
    as="svg"
    x="0px"
    y="0px"
    viewBox="0 0 40 40"
    width="24"
    height="24"
    {...props}
  >
    <g>
      <path
        fill="#D82F2E"
        d="M20.7,27.9c0-1.3,0.7-1.5,1.9-0.8c2.2,1.2,4.6,2.5,4.6,2.5c0.1-0.7,0.7-1.3,2-1c1.2,0.3,2.6,0.6,2.6,0.6   s-0.7-1.7-1.1-2.4c-0.6-1.4,0-2,0.6-2.2c0,0-0.8-0.6-1.4-1c-1.2-0.8-0.9-1.7,0.2-2.2c1.6-0.7,3.6-1.6,3.6-1.6   c-0.6-0.4-1.4-1.4-0.5-2.6c0.8-1.2,2-2.8,2-2.8s-2.2,0-3.6,0c-1.3,0-1.6-1.1-1.6-1.8c0,0-2.1,1.5-3.6,2.5c-1.3,0.9-2.4,0-2.2-1.5   c0.3-2.3,0.6-4.9,0.6-4.9c-0.8,0.5-2.1,0.5-2.7-0.8C21.1,6.2,20,3.9,20,3.9s-1,2.2-1.9,4.1c-0.6,1.3-2,1.3-2.7,0.8   c0,0,0.3,2.6,0.6,4.9c0.2,1.5-1,2.3-2.2,1.5c-1.5-1-3.6-2.5-3.6-2.5c0,0.7-0.3,1.8-1.6,1.8c-1.4,0-3.6,0-3.6,0s1.2,1.7,2,2.8   c0.8,1.2,0.1,2.2-0.5,2.6c0,0,2,0.9,3.6,1.6c1.2,0.5,1.5,1.3,0.2,2.2c-0.6,0.4-1.4,1-1.4,1c0.6,0.2,1.2,0.8,0.6,2.2   c-0.3,0.7-1.1,2.4-1.1,2.4s1.4-0.3,2.6-0.6c1.3-0.3,2,0.3,2,1c0,0,2.3-1.3,4.5-2.5c1.2-0.7,1.9-0.4,1.9,0.8V31c0,1.8-0.3,3.8-1,4.8   C9.8,34.9,2.7,28.1,2.7,19.1C2.7,9.8,10.5,2.2,20,2.2c9.6,0,17.3,7.5,17.3,16.8c0,8.7-6.7,15.8-15.4,16.7v2.3   c10.2-0.9,18.1-9.1,18.1-19C40.1,8.5,31.1,0,20,0C9,0,0,8.5,0,19.1c0,9.3,6.9,17,16.2,18.7c1.6,0.3,2.5,0.5,3.4,1.5   c1-1.8,1.2-5.6,1.2-7.8V27.9z"
      />
    </g>
  </Element>
)
