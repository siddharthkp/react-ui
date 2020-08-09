import React from 'react'
import { Link, Text, ThemeProvider } from 'react-ui'
import dark from 'react-ui/themes/dark'
import { Page, Para, Example, List, Section, Code } from '../../components'

const Documentation = () => {
  return (
    <Page
      title="ThemeProvider"
      tagline="Set tokens and components for React UI components"
    >
      <Para>
        <Text>
          React UI uses the{' '}
          <Link href="https://system-ui.com/theme/">
            System UI theme specification
          </Link>{' '}
          with minor additions. The theme lets you control the overall design of
          your project with colors, fonts, sizes, spacing, etc.
        </Text>
      </Para>

      <Para>
        <Text>
          You can use any of the{' '}
          <Link
            href="https://github.com/siddharthkp/react-ui/tree/master/packages/react-ui/src/themes"
            target="_blank"
          >
            themes that ship with React UI
          </Link>{' '}
          and customise them to your liking.
        </Text>
      </Para>
      <Example>
        <Example.Code lang="js">{`
            import React from 'react'
            import ReactDOM from 'react-dom'
            import { ThemeProvider } from 'react-ui'
            import { tokens, components } from 'react-ui/themes/light'
            import App from './App'
        `}</Example.Code>
        <Example.Code lang="jsx">{`
          ReactDOM.render(
            <ThemeProvider tokens={tokens} components={components}>
              <App />
            </ThemeProvider>,
            document.getElementById('root')
          )
        `}</Example.Code>
      </Example>

      <Para>
        <Text>
          If you already have your colors, font sizes in mind, you can use the{' '}
          <Link
            href="https://github.com/siddharthkp/react-ui/blob/master/packages/react-ui/src/themes/base.js"
            target="_blank"
          >
            unopinionated base theme
          </Link>{' '}
          as the starting point.
        </Text>
      </Para>
      <Example title="Contrived Example:">
        <Example.Code lang="js">
          {`
            // theme.js

            const tokens = {
              fontSizes: {
                1: '10px',
                2: '12px',
                3: '14px',
                4: '16px',
                5: '20px',
              },
              breakpoints: {
                0: '576px',
                1: '768px',
                2: '992px'
              },
              colors: {
                primary: '#38C172',
                error: '#A20808',
                info: '#EFF8FF',
                text: {
                  body: '#222',
                  subtle: '#929FB1',
                  link: '#3793E0'
                }
              },
              // ...rest of the tokens
            }

            export { tokens }
        `}
        </Example.Code>

        <Example.Code
          style={{ borderTop: '1px solid', borderColor: 'grays.900' }}
          lang="js"
        >{`
          // index.js

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
          To start adopting React UI in parts of your application, it's
          recommended to use the <Code>scoped</Code> prop on{' '}
          <Code>ThemeProvider</Code>.
        </Text>

        <Example>
          <Example.Code>{`
            <Text>
              Outside theme provider
            </Text>

            <ThemeProvider scoped tokens={dark.tokens} components={dark.components}>
              <Text>
                Inside theme provider
              </Text>
            </ThemeProvider>
          `}</Example.Code>
          <Example.Preview direction="vertical">
            <Text block margin={4}>
              Outside theme provider
            </Text>

            <ThemeProvider
              scoped
              tokens={dark.tokens}
              components={dark.components}
            >
              <Text block margin={4}>
                Inside theme provider
              </Text>
            </ThemeProvider>
          </Example.Preview>
        </Example>
      </Para>

      <Section>
        Learn more about
        <List as="ol">
          <Link href="/core-concepts/customising-tokens">
            Customising tokens
          </Link>
          <Link href="/core-concepts/customising-components">
            Customising components
          </Link>
        </List>
      </Section>
    </Page>
  )
}

export default Documentation
