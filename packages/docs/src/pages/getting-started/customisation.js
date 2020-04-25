import React from 'react'
import {
  ThemeProvider,
  Element,
  Breadcrumb,
  Card,
  Stack,
  Text,
  Paragraph,
  Avatar,
  Link
} from 'react-ui'

import { Page, Example, Section, Paragraph as Para } from '../../components'

const Documentation = () => {
  return (
    <Page title="Customisation">
      <Para>
        One of the most important features of React UI is it's customisablility.
      </Para>
      On this page:
      <Element
        as="ul"
        css={{
          paddingLeft: 0,
          listStyle: 'none',
          li: { paddingY: 2, color: 'text.subtle' }
        }}
      >
        <li>
          <Link href="#global">1. Global: At the application level</Link>
        </li>
        <li>
          <Link href="#local">2. Local: At the site of usage</Link>
        </li>
      </Element>
      <Section id="global" title="1. Global: At the application level">
        <Para>
          <Text>
            React UI relies on a theme object provided to the ThemeProvider that
            wraps the application.
          </Text>
          <Text variant="subtle">
            By default it uses one of the themes that ship with React UI.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">{`
            import React from 'react'
            import ReactDOM from 'react-dom'
            import { ThemeProvider } from 'react-ui'
            import App from './App'
            import { tokens } from './theme'
            
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
            The theme lets you control the overall design of your project with
            colors, fonts, sizes, spacing, etc.
          </Text>
          <Text>
            You can use any of the{' '}
            <Link href="/themes">themes that ship with React UI</Link> and
            customise them to your liking.
          </Text>
        </Para>
        <Para>
          <Text>
            If you already have your brand guidelines, you can use the{' '}
            <Link
              href="https://github.com/siddharthkp/react-ui/blob/master/packages/react-ui/src/themes/light.js"
              target="_blank"
            >
              unopinionated minimal theme
            </Link>{' '}
            as the starting point.
          </Text>
          <Text>
            Check out the{' '}
            <Link href="/core-concepts/theme">full theme configuration.</Link>
          </Text>
        </Para>
      </Section>
      <Section>
        <Example title="Contrived Example:">
          <Example.Code lang="js">{`
            // theme.js
            const tokens = {
              space: ['0px', '4px', '8px', '12px', '16px', '20px', '24px', '28px', '32px', '36px', '40px'],
              colors: {
                primary: '#38C172',
                error: '#A20808'
              }
              // ... rest of the theme
            }

            export default theme
          `}</Example.Code>
        </Example>
        You can also add decisions to the same file.
      </Section>
      <Example>
        <Example.Code lang="js">{`
          const components = {
            Breadcrumb: {
              backgroundColor: 'blues.100',
              paddingX: 4
            }
          }
        `}</Example.Code>
        <Example.Code lang="jsx">{`
          <ThemeProvider components={components}>
            <Breadcrumb separator=">">
              <Link href="/home">Home</Link>
              <Link href="/home">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </ThemeProvider>
        `}</Example.Code>
        <Example.Preview>
          <ThemeProvider
            components={{
              Breadcrumb: {
                backgroundColor: 'blues.100',
                paddingX: 4
              }
            }}
          >
            <Breadcrumb separator=">">
              <Link href="/home">Home</Link>
              <Link href="/home">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </ThemeProvider>
        </Example.Preview>
      </Example>
      <Section>
        <Example>
          <Example.Preview
            justify="center"
            css={{ backgroundColor: 'grays.100' }}
          >
            <Card css={{ width: 250 }}>
              <Stack gap={2}>
                <Avatar size="medium" src="https://github.com/sameen-shi.png" />
                <span direction="vertical">
                  <Text block>Siddharth</Text>
                  <Text variant="subtle" size={2}>
                    likes CSS
                  </Text>
                </span>
              </Stack>
            </Card>
          </Example.Preview>
          <Example.Code>{`
            <Card css={{width: 250}}>
              <Stack gap={2}>
                <Avatar size="medium" src="https://github.com/sameen-shi.png" />
                <Stack direction="vertical">
                  <Text>Siddharth</Text>
                  <Text variant="subtle" size={2}>likes CSS</Text>
                </Stack>
              </Stack>
            </Card>
          `}</Example.Code>
        </Example>

        <Example>
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

        {/* <Example>
          <Example.Preview
            justify="center"
            css={{ backgroundColor: 'grays.100' }}
          >
            <Card>
              <Stack direction="vertical" gap={2}>
                <Image
                  src="https://bit.ly/2k1H1t6"
                  css={{
                    borderRadius: 2
                  }}
                />
                <Stack justify="space-between" align="center">
                  <Text
                    size={2}
                    color="reds.600"
                    weight="semibold"
                    css={{ textTransform: 'uppercase' }}
                  >
                    Verified · Cape Town
                  </Text>
                  <Stack align="center" gap={1}>
                    <StarIcon />
                    <Text size={2} weight="semibold" color="yellows.700">
                      4.84
                    </Text>
                  </Stack>
                </Stack>
                <Text size={4} weight="semibold">
                  Modern, Chic Penthouse with Mountain, City & Sea Views
                </Text>
                <Text size={4}>$119/night</Text>
              </Stack>
            </Card>
          </Example.Preview>
          <Example.Code>{`
            <Card>
              <Stack direction="vertical" gap={2}>
                <Image src="https://bit.ly/2k1H1t6" css={{ borderRadius: 2 }} />
                <Stack justify="space-between" align="center">
                  <Text
                    size={2}
                    color="reds.600"
                    weight="semibold"
                    css={{ textTransform: 'uppercase' }}
                  >
                    Verified · Cape Town
                  </Text>
                  <Stack align="center" gap={1}>
                    <StarIcon color="yellows.700" />
                    <Text size={2} weight="semibold" color="yellows.700">4.84</Text>
                  </Stack>
                </Stack>
                <Text size={4} weight="semibold">
                  Modern, Chic Penthouse with Mountain, City & Sea Views
                </Text>
                <Text size={4}>$119/night</Text>
              </Stack>
            </Card>
          `}</Example.Code>
        </Example> */}

        <Example>
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
                
                <Stack gap={2}>
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

// const StarIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="12"
//       height="12"
//       viewBox="0 0 24 24"
//       fill="#CAA53D"
//       stroke="#CAA53D"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//     </svg>
//   )
// }

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
      fill="#898294"
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

export default Documentation
