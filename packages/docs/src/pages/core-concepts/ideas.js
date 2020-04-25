import React from 'react'
import {
  Text,
  Link,
  Stack,
  Avatar,
  Card,
  Element,
  Grid,
  Row,
  Column,
  Breadcrumb
} from 'react-ui'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import {
  Page,
  Section,
  Para,
  Example,
  Code,
  List,
  Divider
} from '../../components'
import { AirplaneIcon, AirCanadaLogo } from './layouts'

const Documentation = () => {
  return (
    <Page title="Old and new ideas in React UI">
      <Para>
        <Text>
          React UI combines some of our industry's best ideas and adds a few new
          ones to the mix.
        </Text>
        <Text variant="subtle">
          React UI is a remix of ideas. The credits for introducing these ideas
          are given inline. These are to the best of my knowledge, if any of
          these are miscredited, please reach out to me.
        </Text>
      </Para>
      <Text>On this page:</Text>
      <List>
        <Link href="#Design Tokens">Design Tokens</Link>
        <Link href="#Modular Scales">Modular Scales</Link>
        <Link href="#Theme specification">Theme specification</Link>
        <Link href="#ThemeProvider in React">ThemeProvider in React</Link>
        <Link href="#Styles connected to theme">Styles connected to theme</Link>
        <Link href="#Element primitive">Element primitive</Link>
        <Link href="#Classes, not inline styles">
          Classes, not inline styles
        </Link>
        <Link href="#Component tokens">Component tokens</Link>
        <Link href="#Component selectors">Component selectors</Link>
        <Link href="#Layouts and marginless components">
          Layouts and marginless components
        </Link>
        <Link href="#Stack with gap">Stack with gap</Link>
        <Link href="#Responsive syntax">Responsive syntax</Link>
        <Link href="#Components in themes">Components in themes</Link>
        <Link href="#Variants">Variants</Link>
        <Link href="#Extending the library">Extending the library</Link>
      </List>

      <Section title="Design Tokens" css={{ color: 'yellows.800' }}>
        <Para>
          <Text css={{ fontStyle: 'italic' }}>
            Design tokens are the visual design atoms of the design system —
            specifically, they are named entities that store visual design
            attributes. We use them in place of hard-coded values (such as hex
            values for color or pixel values for spacing) in order to maintain a
            scalable and consistent visual system for UI development — from{' '}
            <Link href="https://twitter.com/jina">Jina Anne</Link> for{' '}
            <Link
              href="https://www.lightningdesignsystem.com/design-tokens/"
              target="_blank"
            >
              Lightning Design System.
            </Link>
          </Text>
        </Para>
        <Example>
          <Example.Code
            lang="scss"
            style={{ borderLeft: '4px solid', borderColor: 'reds.500' }}
          >{`
            /** app/header.scss */

            .header {
              background: #195594;
              height: 40px;
            }
          `}</Example.Code>
        </Example>
        <Example>
          <Example.Code
            lang="scss"
            style={{
              borderLeft: '4px solid',
              borderColor: 'greens.500',
              borderBottom: '1px solid',
              borderBottomColor: 'grays.900'
            }}
          >{`
            /** colors.scss */
            $brand-background-dark: #195594;
            
            /** sizes.scss */
            $size-5: 40px;
          `}</Example.Code>
          <Example.Code
            lang="scss"
            style={{
              borderLeft: '4px solid',
              borderLeftColor: 'greens.500'
            }}
          >{`
            /** app/header.scss */

            .header {
              background: $brand-background-dark;
              height: $size-5;
            }
          `}</Example.Code>
        </Example>
      </Section>
      <Section title="Modular Scales">
        <Para>
          <Text>
            To be able to express your designs with design tokens effectively,
            you first need a good way of defining these tokens.
          </Text>
          <Text css={{ fontStyle: 'italic' }}>
            By using culturally relevant, historically pleasing ratios to create
            modular scales and basing the measurements in our compositions on
            values from those scales, we can achieve a visual harmony not found
            in layouts that use arbitrary, conventional, or easily divisible
            numbers —{' '}
            <Link
              href="https://alistapart.com/article/more-meaningful-typography/"
              target="_blank"
            >
              Tim Brown for A List Apart.
            </Link>
          </Text>
        </Para>
        <Example title="Applied to typography:">
          <Example.Code lang="js">{`
                // 16px base with a 1.125 ratio (major second):
                // optimised for web to avoid poor sub-pixel rendering

                10   * 1.125 = 11.250     ~ 11px
                11   * 1.125 = 12.375     ~ 12.5px
                12.5 * 1.125 = 14.062     ~ 14px
                14   * 1.125 = 15.978     ~ 16px
                16   * 1.125 = 18         ~ 18px
                18   * 1.125 = 20.25      ~ 20px
              `}</Example.Code>
        </Example>
        <Example title="Applied to spacing:">
          <Example.Code lang="js">{`
                // 4 point grid:

                1 * 4 = 4px  or 0.25em
                2 * 4 = 8px  or 0.5em
                3 * 4 = 12px or 0.75em
                4 * 4 = 16px or 1em
                5 * 4 = 20px or 1.25em
                6 * 4 = 24px or 1.5em
                7 * 4 = 28px or 1.75em
                8 * 4 = 32px or 2em
              `}</Example.Code>
        </Example>
        <Link href="/core-concepts/constraints-based-design">
          see example with react-ui →
        </Link>
      </Section>
      <Section title="Theme specification">
        <Para>
          <Text>
            To express design tokens in a way that makes them consumable in a
            javascript framework (React), you'd need an effective way of
            expressing it in javascript. React UI relies on the System UI theme
            specification.
          </Text>
          <Text css={{ fontStyle: 'italic' }}>
            The intent behind this specification is to help make UI components,
            libraries, and tools as interoperable as possible. The theme object
            is intended to be a general purpose format for storing design system
            style values, scales, and/or design tokens. The object itself is not
            coupled to any particular library's implementation and can be used
            in places where sharing common style values in multiple parts of a
            code base is desirable —{' '}
            <Link href="https://system-ui.com">
              System UI Theme Specification
            </Link>
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">{`
            // Tokens

            const tokens = {
              fontSizes: {
                0: 0,
                1: '12px',
                2: '14px',
                3: '16px',
                4: '20px',
                5: '24px',
                6: '32px',
              },
              space: {
                0: 0,
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px'
              },
              colors: {
                white: '#fff',
                blues: {
                  100: '#B7DBF7',
                  300: '#A8D1F2',
                  500: '#3793E0',
                  700: '#2368A2',                
                  900: '#203D54'
                }
              }
            }
            
            // Decisions/Aliases

            tokens.fontSizes.page = 6 // fontSizes.6
            tokens.fontSizes.section = 4 // fontSizes.4
            
            tokens.colors.link = 'blues.500' // colors.blues.500
          `}</Example.Code>
        </Example>
        <Text>
          If you already have your colors, font sizes, etc. in mind, you can use
          the{' '}
          <Link
            href="https://github.com/siddharthkp/react-ui/blob/master/packages/react-ui/src/themes/base.js"
            target="_blank"
          >
            unopinionated base theme
          </Link>{' '}
          as the starting point or use any of the{' '}
          <Link
            href="https://github.com/siddharthkp/react-ui/blob/master/packages/react-ui/src/themes/"
            target="_blank"
          >
            beautiful pre-made themes
          </Link>{' '}
          that ship with React UI and customise them to your liking.
        </Text>
      </Section>
      <Section title="ThemeProvider in React">
        <Para>
          <Text>
            Using tokens to build components in the React landscape can become
            tedious and inflexible.
          </Text>
        </Para>
        <Example>
          <Example.Code
            lang="js"
            style={{ borderLeft: '4px solid', borderColor: 'reds.500' }}
          >{`
            // Header.js
            import styled from 'styled-components'
            import { colors, sizes } from '../../tokens'

            const Header = styled.header\`
              background: \${colors.brand};
              height: \${sizes[5]};
            \`
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            Setting them at the application level will give all components
            access to tokens and make them themeable programmatically.{' '}
            <Code>ThemeProvider</Code>, in it's now popular form, was introduced
            by <Code>styled-components</Code> in 2016.
          </Text>
        </Para>
        <Example>
          <Example.Code
            lang="js"
            style={{
              borderLeft: '4px solid',
              borderColor: 'greens.500'
            }}
          >{`
            // App.js
            import styled, { ThemeProvider } from 'styled-components'
            import tokens from './tokens'
          `}</Example.Code>
          <Example.Code
            style={{
              borderLeft: '4px solid',
              borderColor: 'greens.500',
              borderBottom: '1px solid',
              borderBottomColor: 'grays.900'
            }}
          >{`
            render(
              <ThemeProvider theme={tokens}>
                <Header />
                <Body />
                <Footer />
              </ThemeProvider>
            )
          `}</Example.Code>

          <Example.Code
            lang="js"
            style={{
              borderLeft: '4px solid',
              borderLeftColor: 'greens.500'
            }}
          >{`
            // Header.js
            import styled from 'styled-components'

            const Header = styled.header(({theme}) => \`
              background: \${theme.colors.brand};
              height: \${theme.sizes[5]};
            \`
          `}</Example.Code>
        </Example>
      </Section>
      <Section title="Styles connected to theme">
        <Para>
          <Text>
            Now that we have the concept of consuming tokens inside components
            established, let's look at the API.
          </Text>
          <Text>
            Using object styles instead of template literals is one of the ways,
            which is aesthetically pleasing, but might require breaking an old
            habit.
          </Text>
        </Para>
        <Example>
          <Example.Code
            lang="js"
            style={{
              borderLeft: '4px solid',
              borderLeftColor: 'yellows.600'
            }}
          >{`
            import styled from 'styled-components'

            const Header = styled.header(({theme}) => ({
              backgroundColor: theme.colors.brand,
              height: theme.sizes[5];
            })
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            <Link href="https://styled-system.com">Styled system</Link> offers a{' '}
            <i>smarter</i> API which fetches the value from theme based on the
            css property.
          </Text>
          <Text>
            <Code>color</Code> reads from <Code>theme.colors</Code>, height
            reads from <Code>theme.sizes</Code> and so on.
          </Text>
        </Para>
        <Example>
          <Example.Code
            lang="js"
            style={{
              borderLeft: '4px solid',
              borderLeftColor: 'greens.500'
            }}
          >{`
            import styled from 'styled-components'
            import css from '@styled-system/css'

            const Header = styled.header(css({
              backgroundColor: 'brand', // reads from theme.colors.brand
              height: 5                 // reads from theme.sizes.5
            }))
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            This on the surface, looks like a aesthetic advantage, but there's
            more to the concept. When combined with modular scales using the
            theme specification from above, you get an authoring experience
            which is faster and leads to great looking interfaces.
          </Text>
          <Link href="/core-concepts/constraints-based-design">
            read more about it here →
          </Link>
        </Para>
      </Section>
      <Section title="Element primitive">
        <Para>
          <Text>
            Every React UI element is built on top of a base{' '}
            <Code>Element</Code> which gives them access to{' '}
            <Link href="/components/Element">common props</Link> - the most
            interesting of which is the <Code>css</Code> prop.
          </Text>
          <Text>
            It is heavily inspired from the Box component in{' '}
            <Link href="https://rebassjs.org/box">Rebass</Link> and the
            Component Component from{' '}
            <Link href="https://reacttraining.com/reach-ui/component-component">
              Reach UI.
            </Link>
          </Text>
        </Para>
        <Example>
          <Example.Code
            lang="js"
            style={{
              borderLeft: '4px solid',
              borderLeftColor: 'greens.500'
            }}
          >{`
            import { Element } from 'react-ui'

            const Header = props => (
              <Element
                as="header"
                css={{ background: 'brand', height: 5 }}
                component="Header"
                {...props}
              />
            )
          `}</Example.Code>
        </Example>
        <Link href="/components/Element">
          Jump to documentation for Element →
        </Link>
      </Section>
      <Section title="Classes, not inline styles">
        <Para>
          <Text>
            Even though we <i>author styles</i> on the component, they are not
            attached to the component directly as inline styles. Instead, the
            css prop is replaced with a <Code>className</Code> on runtime.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">{`
          import { Element } from 'react-ui'

          const Header = props => (
            <Element
              as="header"
              css={{ background: 'brand', height: 5 }}
              {...props}
            />
          )
          `}</Example.Code>
          <Example.Code lang="html">{`
            <!-- renders to: -->

            <style>
              .css-e1hb-header {
                background: #195594;
                height: 40px;
              }
            </style>
            
            <header class="css-e1hb-header">
              this is the content inside the header
            </header>
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            It's hard to attribute this idea of replacing styles with a
            generated className to a single author/library, it was most probably{' '}
            <Link href="https://github.com/cssinjs/jss">
              JSS by Oleg Isonen
            </Link>{' '}
            in 2014.
          </Text>
          <Text>
            {' '}
            React UI uses <Link href="http://emotion.sh/">Emotion</Link> under
            the hood to benefit from this feature.
          </Text>
        </Para>
      </Section>
      <Section title="Component tokens">
        <Para>
          <Text>
            <Link href="https://twitter.com/sarah_federman">
              Sarah Federman
            </Link>{' '}
            introduced me the idea to me in her talk. It's popular amongst
            design systems that support multiple platforms like{' '}
            <Link href="https://www.lightningdesignsystem.com/design-tokens/">
              Salesforce's Lightning
            </Link>{' '}
            and <Link href="https://spectrum.adobe.com/">Adobe's Spectrum</Link>{' '}
            .
          </Text>
        </Para>
        <TwitterTweetEmbed tweetId={'1164365159269167104'} />

        <Para>
          <Text>
            It inspired first class support for customising component styles
            across applications (which is literally the case for an open source
            component library)
          </Text>
        </Para>
      </Section>

      <Section title="Component selectors">
        <Para>
          <Text>
            Because Emotion preprocesses the styles before inserting them on the
            page, it is able to support nested styles. Nested styles aren't a
            new concept of course, they date as far back as 2006 with{' '}
            <Link href="http://sass-lang.com/">Sass</Link>.
          </Text>
          <Text>
            Because Emotion preprocesses the styles before inserting them on the
            page, it is able to support nested styles.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">{`
            import { Element } from 'react-ui'

            const Header = props => (
              <Element
                as="header"
                css={{ 
                  background: 'brand',
                  height: 5,
                  
                  // psedo selector
                  ':hover': { background: 'brandHover' },
                  
                  // child selector
                  a: { color: 'link' }
                }}
                {...props}
              />
            )
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            Being able to refer to nested selectors just like SCSS is great, but
            in a component driven application, you also need a way to reference
            components.
          </Text>
          <Text>
            The following API was introduced by styled-components v2 in 2017:
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">{`
            import styled from 'styled-components'
            import Link from '../components/Link'

            const Header = styled.header(({theme}) => \`
              background: \${theme.colors.brand};
              height: \${theme.sizes[5]};

              // only affects Link inside Header
              \${Link} {
                color: \${theme.colors.link};
              }
            \`
          
            // or in object notation with the example from above:

            const Header = styled.header(css({
              backgroundColor: 'brand', 
              height: 5,
              
              // only affects Link inside Header
              [Link]: {
                color: 'link';
              }
            }))
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            In React UI, you can reference components by their "component name"
            (as mentioned in{' '}
            <Link href="/components/Element#component">Element docs.</Link>)
          </Text>
          <Text>
            This works by using data attributes and is inspired by the{' '}
            <Link href="https://reacttraining.com/reach-ui/styling/#element-selectors">
              styling approach in Reach UI.
            </Link>
          </Text>
        </Para>
        <Example>
          <Example.Code
            lang="js"
            style={{
              borderLeft: '4px solid',
              borderColor: 'greens.500'
            }}
          >{`
            import { Element } from 'react-ui'

            const Header = props => (
              <Element
                as="header"
                css={{ 
                  background: 'brand', height: 5,
                  
                  // only affects Link inside Header
                  Link: { 
                    color: 'link'
                  }
                }}
                {...props}
              />
            )
          `}</Example.Code>
        </Example>
      </Section>
      <Section title="Layouts and marginless components">
        <Para>
          <Text>
            A reusable component should not have margin or any other positioning
            baked inside it. The responsibility of laying out elements falls on
            the parent.
          </Text>
          <Text>
            Personally, I've always attributed this idea of separating concerns
            back to{' '}
            <Link href="https://github.com/stubbornella/oocss/wiki">
              OOCSS by Nicole Sullivan (2009)
            </Link>{' '}
            and{' '}
            <Link href="https://bradfrost.com/blog/post/atomic-web-design/">
              Atomic Design by Brad Frost (2013)
            </Link>{' '}
            (and quick shout out to{' '}
            <Link href="https://twitter.com/andresgalante">Andres</Link> for
            opening my eyes to the power of layout components)
          </Text>
        </Para>
        <Para>
          <Text>
            With React UI, using it's Layout components is the way to go.
            <Code>Stack</Code> is probably the one you'd use a lot.
          </Text>
        </Para>
        <Example>
          <Example.Preview>
            <Stack align="center" gap={2}>
              <Avatar size="medium" src="https://github.com/siddharthkp.png" />
              <Text>Siddharth</Text>
            </Stack>
          </Example.Preview>
          <Example.Code>
            {`
              <Stack align="center" gap={2}>
                <Avatar size="small" src="https://github.com/siddharthkp.png" />
                <Text>Siddharth</Text>
              </Stack>
            `}
          </Example.Code>
        </Example>
        <Para>
          <Text>
            By nesting Stacks together along with <Code>gap</Code> and the
            responsive syntax, you can create complex layouts really fast with a
            small API surface.
          </Text>
          <Text variant="subtle" size={3}>
            (Try resizing the browser window to see this in effect. If you're on
            mobile, try switching to landscape mode)
          </Text>
        </Para>

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
                <Stack justify="center" align="center" gap={2}>
                  <AirCanadaLogo />
                  <Text size={2} variant="subtle">
                    Air Canada
                  </Text>
                </Stack>
                <Stack justify="space-between" align="center" marginX="auto">
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
                    <Stack align="center" gap={1}>
                      <svg
                        width="40"
                        height="1"
                        viewBox="0 0 40 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="0"
                          x2="40"
                          y2="0"
                          stroke="#AEBECD"
                          strokeWidth="3"
                        />
                      </svg>

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
                
                <Stack justify="center" align="center" gap={2}>
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
      </Section>
      <Section title="Stack with gap">
        <Para>
          <Text>
            <Code>flex-gap</Code> is a{' '}
            <Link href="https://www.w3.org/TR/css-align-3/#gaps">proposal</Link>{' '}
            that might be a reality in the future.
          </Text>{' '}
          <Text>Until then our next best option is to polyfill it.</Text> React
          UI's implementation is inspired from the Stack component in{' '}
          <Link href="https://seek-oss.github.io/braid-design-system/">
            Braid Design System
          </Link>{' '}
          that accepts a space prop connected to their design tokens.
        </Para>
        <Example>
          <Example.Code>
            {`<Stack gap={2}>
            <Avatar size="medium" src="https://github.com/siddharthkp.png" />
            </Stack>`}
          </Example.Code>
          <Example.Preview>
            <Stack gap={4}>
              <Element css={{ size: 12, backgroundColor: '#38C172' }} />
              <Element css={{ size: 12, backgroundColor: '#38C172' }} />
            </Stack>
          </Example.Preview>
        </Example>
        <Text>
          The gap (margin) between the above components is 2 units on the space
          scale or <Code>tokens.space.2</Code>
        </Text>
      </Section>
      <Section title="Responsive syntax">
        <Para>
          <Text variant="subtle" css={{ fontStyle: 'italic' }}>
            The following is taken directly from the{' '}
            <Link href="https://styled-system.com">Styled System</Link>{' '}
            documentation:
          </Text>
        </Para>
        <Para>
          <Text>
            Styled System offers a convenient shorthand syntax for adding
            responsive styles with a mobile-first approach. While this syntax
            can seem odd at first, it can become a powerful way to manage
            responsive typography and layouts.
          </Text>
          <Text>
            This shortcut is an alternative to writing media queries out by
            hand. Given the following:
          </Text>
        </Para>
        <Example>
          <Example.Code>{`<Box width={[1, 1 / 2, 1 / 4]} />`}</Example.Code>
        </Example>
        <Para>
          <Text>
            Using Styled System with a CSS-in-JS library will generate something
            like the following CSS:
          </Text>
        </Para>
        <Example>
          <Example.Code lang="css">{`
              .Box-hash {
                width: 100%;
              }

              @media screen and (min-width: 40em) {
                .Box-hash {
                  width: 50%;
                }
              }

              @media screen and (min-width: 52em) {
                .Box-hash {
                  width: 25%;
                }
              }
              `}</Example.Code>
        </Example>
        <Para>
          <Text>
            React UI uses the same API for responsive styles and can be applied
            to any property inside the <Code>css</Code> prop.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">
            {`
                /* 
                  With a height array of
                  ['40px', '140px', '100vh'],
                  this component will be 40px on mobile, 
                  140px on tablet and 100vh on desktop 
                */
                <Column css={{ 
                  height: ['40px', '150px', '100vh']
                }}>
                  sidebar
                </Column>
              `}
          </Example.Code>
        </Example>
        <Para>
          <Text variant="subtle" size={3}>
            (Try resizing the browser window to see this in effect. If you're on
            mobile, try switching to landscape mode)
          </Text>
        </Para>
        <Example>
          <Example.Preview>
            <Grid css={{ width: '100%' }}>
              <Row css={{ height: '20px', background: '#EFA6A6' }}>header</Row>
              <Column
                span={[12, 12, 2]}
                css={{
                  height: ['40px', '40px', '140px'],
                  background: '#FAECC2'
                }}
              >
                sidebar
              </Column>
              <Column
                span={[12, 6, 5]}
                css={{ height: '140px', background: '#A8EEC1' }}
              >
                column
              </Column>
              <Column
                span={[12, 6, 5]}
                css={{ height: '140px', background: '#B7DBF7' }}
              >
                column
              </Column>
            </Grid>
          </Example.Preview>
          <Example.Code>{`
            <Grid>
              <Row css={{ height: '20px' }}>header</Row>

              <Column span={[12, 2, 2]} css={{ height: [40, 140, 140]}}>
                sidebar
              </Column>
              <Column
                span={[12, 5, 5]} css={{ height: '140px' }}>
                half &
              </Column>
              <Column span={[12, 5, 5]} css={{ height: '140px' }}>
                half
              </Column>
            </Grid>
          `}</Example.Code>
        </Example>
      </Section>

      <Section title="Components in themes">
        <Para>
          <Text>
            The strategy{' '}
            <Link href="https://mdxjs.com/getting-started#mdxprovider">
              MDX
            </Link>{' '}
            takes to style elements is really interesting. As you can't attach
            class names to # heading tags in markdown, MDX let's you wrap your
            application in a <Code>MDXProvider</Code> which accepts components.
          </Text>
        </Para>
        <Example>
          {' '}
          <Example.Code lang="js">{`
            import React from 'react'
            import { MDXProvider } from '@mdx-js/react'
            
            const Heading = props => (
              <h1 style={{ fontSize: 48, color: 'darkbluegrey' }} {...props} />
            )
            
            
            const components = {
              h1: Heading
            }
            
            export default props => (
              <MDXProvider components={components}>
                <main {...props} />
              </MDXProvider>
            )
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            This is a great example of to give customisation control to layers
            of the library that are hidden.
          </Text>
        </Para>
        <Para>
          <Text>
            React UI offers two strategies to customise components and their
            sub-elements. One of them is inspired by MDX.
          </Text>
          <Text>
            The <Code>ThemeProvider</Code>
            from React UI along with accepting design tokens, accepts a second{' '}
            <Code>components</Code> prop. As mentioned above, every React UI and
            it's sub-elements have a "component name".
          </Text>
          <Text>
            This strategy can be especially useful if you want to implement
            multiple themes or components that can adapt to multiple
            applications built with React UI.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">{`
          import { ThemeProvider } from 'react-ui'
          import App from './App'
          import tokens from './tokens'

          const components = {
            Breadcrumb: {
              background: 'lightblue',  // from tokens.colors.lightblue
                
              Link: { 
                // this will only target Link inside Breadcrumb,
                // not all Links
                color: 'link'           // from tokens.colors.link
              },
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
            <Link href="/core-concepts/customising-components#components-in-theme">
              read more about this strategy →
            </Link>
          </Text>
        </Para>
        <Para>
          <Text>
            If you're curious, the other customisation strategy is to re-export
            components after attaching custom styles.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">
            {`
              import React from 'react'
              import { Breadcrumb as BaseComponent } from 'react-ui'

              const customStyles = {
                Link: { 
                  // only targets Links inside Breadcrumb
                  color: 'greens.700'
                },
                BreadcrumbSeparator: {
                  color: 'greens.200'
                }
              }
            `}
          </Example.Code>
          <Example.Code lang="jsx">
            {`
              const Breadcrumb = props => {
                return <BaseComponent separator=">" css={customStyles} {...props} />
              }
            `}
          </Example.Code>
          <Example.Code lang="js">
            {`
              export { Breadcrumb }
            `}
          </Example.Code>
          <Example.Preview>
            <Breadcrumb
              separator=">"
              css={{
                Link: { color: 'greens.700' },
                BreadcrumbSeparator: { color: 'greens.200' }
              }}
            >
              <Link href="/home">Home</Link>
              <Link href="/home">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </Example.Preview>
        </Example>
      </Section>
      <Section title="Shout out to Theme UI">
        <Para>
          <Text>
            <Link href="https://theme-ui.com/">Theme UI</Link>, unsurprisingly,
            combines a bunch of the above ideas (same folks behind styled-system
            and the system-ui spec) which is why they feature all the way at the
            end.
          </Text>
          <Text>
            Under that API, React UI is a humble reconstruction of the ideas
            behind Theme UI with few of my favorite concepts baked into it.
          </Text>
        </Para>
      </Section>

      <Section title="Variants">
        <Para>
          <Text>
            Another concept inspired from Styled system, variants are a handy
            way of defining a group of styles that change together.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">{`
          import { tokens, components } from 'react-ui/themes/base'

          // overwrite Text variants
          components.Text.variants = {
            default: { color: 'grays.900' },
            subtle:  { color: 'grays.700' },
            error:   { color: 'reds.700'  },
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          <ThemeProvider tokens={tokens} components={components}> 
            <Text>Text might seem like a boring component</Text>
            <Text variant="subtle">but can we incredibly handy with variants</Text>
            <Text variant="error">to quickly express context</Text>
          </ThemeProvider>
        `}</Example.Code>
          <Example.Preview direction="vertical">
            <Text>Text might seem like a boring component</Text>
            <Text variant="subtle">
              but can we incredibly handy with variants
            </Text>
            <Text variant="danger">to quickly express context</Text>
          </Example.Preview>
        </Example>
      </Section>

      <Section title="Extending the library">
        <Para>
          <Text>
            No matter how well crafted an open source component library is, you
            would still have to build components that are specific to your
            application's use case.
          </Text>
          <Text>
            It is not only possible, but encouraged to extend the library.
          </Text>
          <Text>
            Using the same primitives as React UI, you can make your components{' '}
            <i>feel like</i> they are part of the same library and benefit from
            all the features.
          </Text>
        </Para>
        <Example>
          <Example.Code>{`
            const StockList = props => (
              <Stack
                as="ul"
                css={{ listStyle: 'none' }}
                component="StockList"
                direction="vertical"
                gap={6}
                {...props}
              >
                {props.children}
              </Stack>
            )

            const Stock = ({name, price, change, ...props}) => (
              <Stack 
                as="li"
                component="Stock"
                direction="vertical"
                gap={1}
                {...props}
              >
                <Stack justify="space-between">
                  <Text variant="subtle">{name}</Text>
                  <Text color={change > 0 ? "success": "danger"}>
                    {change}
                  </Text>
                </Stack>
                <Text size={6}>{price}</Text>
              </Stack>
            )
          `}</Example.Code>
          <Example.Preview>
            <Stack
              as="ul"
              css={{ listStyle: 'none' }}
              direction="vertical"
              gap={6}
            >
              <Stack as="li" direction="vertical" gap={1}>
                <Stack justify="space-between">
                  <Text variant="subtle">AAPL</Text>
                  <Text color="greens.700">+0.2%</Text>
                </Stack>
                <Text size={6}>$ 247.74</Text>
              </Stack>
              <Stack as="li" direction="vertical" gap={1}>
                <Stack justify="space-between">
                  <Text variant="subtle">MSFT</Text>
                  <Text color="reds.400">-0.6%</Text>
                </Stack>
                <Text size={6}>$ 149.61</Text>
              </Stack>
              <Stack as="li" direction="vertical" gap={1}>
                <Stack justify="space-between">
                  <Text variant="subtle">LULU</Text>
                  <Text color="greens.700">+2%</Text>
                </Stack>
                <Text size={6}>$ 188.84</Text>
              </Stack>
            </Stack>
          </Example.Preview>
        </Example>
        <Para>
          <Text>There are a few interesting things to notice above:</Text>
        </Para>
        <List as="ol" css={{ paddingLeft: 8 }} marginBottom={8}>
          <Text>
            Built completely with React UI building blocks and only writing one
            line of css to disable a browser default.
          </Text>
          <Text>
            We have used values from our tokens instead of hard coding them in
            the component.
          </Text>
          <Text>
            We identified the two components by giving them a "component name",
            which makes them themeable now.
          </Text>
        </List>
        <Para>
          <Link href="/core-concepts/creating-new-components">
            Learn more about building components with react-ui →
          </Link>
        </Para>
      </Section>
      <Section title="Next steps">
        <List>
          <Link href="https://github.com/siddharthkp/react-ui">
            View the source on GitHub →
          </Link>
          <Link href="/components">Explore the components →</Link>
          <Link href="https://codesandbox.io/s/react-ui-template-302iq">
            Try out React UI on CodeSandbox →
          </Link>
          <Link href="https://codesandbox.io/s/react-ui-podcast-2wrj6">
            View source for a podcast player built with React UI →
          </Link>
        </List>
      </Section>
      <Divider />
    </Page>
  )
}

export default Documentation
