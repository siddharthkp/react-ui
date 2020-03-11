import React from 'react'
import { ThemeProvider, Element, Link, Text, merge } from 'react-ui'
import * as light from 'react-ui/themes/light'

import { Page, List, Para, Code, Section, Example } from '../../components'

function Avatar1(props) {
  return <Element as="img" {...props} />
}

const styles = {
  width: 10,
  height: 10,
  border: '2px solid',
  borderColor: 'grays.200',
  borderRadius: '50%'
}
function Avatar2(props) {
  return (
    <ThemeProvider tokens={light.tokens}>
      <Element as="img" css={styles} {...props} />
    </ThemeProvider>
  )
}
function Avatar3({ css, ...props }) {
  return (
    <ThemeProvider tokens={light.tokens}>
      <Element as="img" css={merge(styles, css)} {...props} />
    </ThemeProvider>
  )
}
function Avatar4({ css, ...props }) {
  return (
    <ThemeProvider tokens={light.tokens}>
      <Element as="img" component="Avatar" css={styles} {...props} />
    </ThemeProvider>
  )
}

function Avatar5({ online, ...props }) {
  const stylesWithStatus = merge(styles, {
    borderColor: online ? 'greens.500' : 'grays.200'
  })

  return (
    <ThemeProvider tokens={light.tokens}>
      <Element as="img" css={stylesWithStatus} {...props} />
    </ThemeProvider>
  )
}

function Avatar6(props) {
  return (
    <ThemeProvider
      tokens={light.tokens}
      components={{
        Avatar: {
          variants: {
            default: { borderColor: 'grays.200' },
            online: { borderColor: 'greens.500' }
          }
        }
      }}
    >
      <Element as="img" component="Avatar" css={styles} {...props} />
    </ThemeProvider>
  )
}

const Documentation = () => {
  return (
    <>
      <Page title="Creating new components">
        On this page:
        <List>
          <Link href="#using-element">1. Using the base element</Link>
          <Link href="#css-prop">
            2. Accepting/Ignoring styles via the css prop
          </Link>
          <Link href="#accepting-props">3. Adapting styles based on props</Link>
        </List>
        <Section id="using-element" title="1. Using the base element">
          <Para>
            <Text>
              Every component in React UI uses a common base{' '}
              <Code>Element</Code>. This is what a component looks in it's
              simplest form.
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code lang="js">{`
            import React from 'react'

            function Avatar(props) {
              return <Element as="img" { ...props } />
            }

            render(<Avatar src="https://github.com/sameen-shi.png"/>)
          `}</Example.Code>
            <Example.Preview>
              <Avatar1 src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60" />
            </Example.Preview>
          </Example>
          <Para marginTop={-40}>
            <Text variant="subtle" size={3} css={{ fontStyle: 'italic' }}>
              Note: This page uses the React UI Light tokens in examples.
            </Text>
          </Para>
          <Para>
            <Text>
              By using <Code>Element as="img"</Code> instead of <Code>img</Code>
              , we enable some key features of React UI.
            </Text>
            <Text>
              One of these is the <Code>css</Code> prop that is connected to
              your theme — which means it resolves the values you provide to
              their matching value in the tokens.
            </Text>
            <Text>
              For example, <Code>width</Code> and <Code>height</Code> pick their
              values from <Code>tokens.sizes</Code> and <Code>borderColor</Code>{' '}
              picks its value from <Code>tokens.colors</Code>.
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code lang="js">{`
            import React from 'react'

            const styles = {
              width: 10, // tokens.sizes.10
              height: 10, // tokens.sizes.10
              border: '2px solid',
              borderColor: 'grays.200', // tokens.colors.grays.200
              borderRadius: '50%'
            }

            function Avatar(props) {
              return <Element as="img" css={styles} { ...props } />
            }

            render(<Avatar src="https://github.com/sameen-shi.png"/>)
          `}</Example.Code>
            <Example.Preview>
              <Avatar2 src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60" />
            </Example.Preview>
          </Example>
          <Para>
            <Text>
              We did not add any margin to the <Code>Avatar</Code> component
              intentionally. Building blocks should not have any margin in their
              definition. Margin should be added at the time of using these
              blocks based on the layout and elements around them.
            </Text>
          </Para>
          <Para>
            <Text>
              <Link href="/components/Element">
                Here is a reference for all the features that{' '}
                <Code>Element</Code> adds.
              </Link>
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code>{`
            <Avatar marginRight={4} src="https://github.com/sameen-shi.png"/>
            <Avatar src="https://github.com/sameen-shi.png"/>
          `}</Example.Code>
            <Example.Preview>
              <div>
                <Avatar2
                  marginRight={4}
                  src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60"
                />
                <Avatar2 src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60" />
              </div>
            </Example.Preview>
          </Example>
          <Para>
            <Text>
              While inline styles should be used sparingly, components built
              with <Code>Element</Code> connect the <Code>styles</Code> prop
              with tokens as well.
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code>{`
            <Avatar
              src="https://github.com/sameen-shi.png"
              style={{ borderColor: 'greens.500' }}
            />
          `}</Example.Code>
            <Example.Preview>
              <div>
                <Avatar2
                  style={{ borderColor: 'greens.500' }}
                  src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60"
                />
              </div>
            </Example.Preview>
          </Example>

          <Para>
            <Text>
              If you'd like your component to behave like it's part of the
              library and benefit from the customisation API mentioned in the{' '}
              <Link href="/core-concepts/customising-components">
                Customisation docs
              </Link>
              , you can pass a <Code>component</Code> prop to identify your
              component.
            </Text>
          </Para>
          <Example>
            <Example.Code>
              {`
                function Avatar(props) {
                  return <Element as="img" component="Avatar" css={styles} { ...props } />
                }
            `}
            </Example.Code>
          </Example>
        </Section>
        <Section
          id="css-prop"
          title="2. Accepting/Ignoring styles via the css prop"
        >
          <Para>
            <Text>
              Let's see what would happen if at the time of usage, we try to add
              additional styles via the <Code>css</Code> prop
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code>{`
            <Avatar
              css="https://github.com/sameen-shi.png"
              style={{ borderColor: 'greens.500' }}
            />
          `}</Example.Code>
            <Example.Preview>
              <div>
                <Avatar2
                  css={{ borderColor: 'greens.500' }}
                  src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60"
                />
              </div>
            </Example.Preview>
          </Example>
          <Para>
            <Text>
              You can see that the component's base styles are removed. This is
              because <Code>props.css</Code> overrides the <Code>css</Code> prop
              inside the component.
            </Text>
            <Text>
              If you want to allow the component to receive additional styles
              via the <Code>css</Code> prop, you can use <Code>merge</Code>{' '}
              utility from React UI to deeply merge them with the base styles.
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code lang="js">{`
            import React from 'react'
            import { merge } from 'react-ui'

            const styles = { ... }

            // destructure css out of props
            function Avatar({ css, ...props }) {
              // deep merge with base styles
              return <Element as="img" css={merge(styles, css)} {...props} />
            }

            render(
              <Avatar
                src="https://github.com/sameen-shi.png"
                css={{ borderColor: 'greens.500' }}
              />
            )  
          `}</Example.Code>
            <Example.Preview>
              <div>
                <Avatar3
                  src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60"
                  css={{ borderColor: 'greens.500' }}
                />
              </div>
            </Example.Preview>
          </Example>
          <Para>
            <Text>
              If you would like to do the opposite and disallow customisation
              outside the component, you can do the following:
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code lang="js">{`
            import React from 'react'

            const styles = { ... }

            // destructure css out of props
            function Avatar({css, ...props}) {
              // but don't pass it down.
              return <Element as="img" css={styles} {...props} />
            }

            render(
              <Avatar
                src="https://github.com/sameen-shi.png"                
                css={{ borderColor: 'greens.500' }} // the css prop will be ignored
              />
            )  
          `}</Example.Code>
            <Example.Preview>
              <div>
                <Avatar4
                  css={{ borderColor: 'greens.500' }}
                  src="https://avatars0.githubusercontent.com/u/43093040?v=4&s=60"
                />
              </div>
            </Example.Preview>
          </Example>
        </Section>
        <Section id="accepting-props" title="3. Adapting styles based on props">
          <Para>
            <Text>
              Let's say we want to indicate if a user is online or not with the
              help of the border color. We accept a boolean prop{' '}
              <Code>online</Code> from the developer using our component.
            </Text>
          </Para>

          <Example codeFirst>
            <Example.Code lang="js">{`
            import React from 'react'

            // common styles - static
            const styles = {
              width: 10,
              height: 10
              border: '2px solid',
              borderRadius: '50%'
            }

            function Avatar({ online, ...props }) {
              // dynamic styles - based on online prop
              const statusStyles = {
                borderColor: online ? 'greens.500' : 'grays.200'
              }

              // merge dynamic styles and static styles
              return <Element as="img" css={merge(styles, statusStyles)} {...props} />
            }

            render(
              <>
                <Avatar src="https://github.com/sameen-shi.png" />
                <Avatar online src="https://github.com/sameen-shi.png" />
              </>
            )  
          `}</Example.Code>
            <Example.Preview>
              <div>
                <Avatar5 Avatar src="https://github.com/sameen-shi.png" />
                <Avatar5 online src="https://github.com/sameen-shi.png" />
              </div>
            </Example.Preview>
          </Example>

          <Para>
            <Text>
              This kind of customisation is fairly common, so there is first
              class support for this in the theming layer.
            </Text>
          </Para>
          <Example codeFirst>
            <Example.Code lang="js">{`
            // index.js

            import React from 'react'
            import { tokens } from 'react-ui/themes/light'

            const components = {
              Avatar: {
                variants: {
                  default: { borderColor: 'grays.500' },
                  online: { borderColor: 'greens.500' }
                }
              }
            }

            const App = () => (
              <ThemeProvider tokens={tokens} components={components}>
                <App />
              </ThemeProvider>
            )

            export default App
          `}</Example.Code>
          </Example>

          <Example>
            <Example.Code>
              {`
              <Avatar src="https://github.com/sameen-shi.png" />
              <Avatar variant="online" src="https://github.com/sameen-shi.png" />
            `}
            </Example.Code>
            <Example.Preview gap={2}>
              <Avatar6 src="https://github.com/sameen-shi.png" />
              <Avatar6
                variant="online"
                src="https://github.com/sameen-shi.png"
              />
            </Example.Preview>
          </Example>
        </Section>
      </Page>
    </>
  )
}

export default Documentation
