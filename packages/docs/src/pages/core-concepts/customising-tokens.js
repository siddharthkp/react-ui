import React from 'react'
import { Text, Link } from 'react-ui'

import { Page, Para, Example, Section } from '../../components'

const Documentation = () => {
  return (
    <Page title="Customising Design tokens">
      <Section>
        <Para>
          <Text>
            React UI uses the{' '}
            <Link href="https://system-ui.com/theme/">
              System UI theme specification
            </Link>{' '}
            with minor additions.
          </Text>
          <Text variant="subtle">
            Until I finshing documenting the theme specification and recommended
            best practices on this page, please refer to the above link.
          </Text>
        </Para>
      </Section>
      <Section>
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
            <Link
              href="https://github.com/siddharthkp/react-ui/tree/master/packages/react-ui/src/themes"
              target="_blank"
            >
              themes that ship with React UI
            </Link>{' '}
            and customise them to your liking.
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
        </Para>

        <Example title="Contrived Example:">
          <Example.Code lang="js">{`
            // theme.js
            const tokens = {
              space: ['0px', '4px', '8px', '12px', '16px', '20px', '24px', '28px', '32px', '36px', '40px'],
              fontSizes: ['0px', '12px', '14px', '16px', '20px', '24px', '32px'],
              breakpoints: ['576px', '768px', '992px'],
              colors: {
                primary: '#38C172',
                error: '#A20808',
                info: '#EFF8FF',
                text: {
                  body: '#222',
                  subtle: '#929FB1',
                  link: '#3793E0'
                }
              }
              // ...rest of the theme
            }

            export default theme
          `}</Example.Code>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
