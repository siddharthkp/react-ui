import React from 'react'
import { ThemeProvider, Element, Breadcrumb, Text, Link } from 'react-ui'

import { Page, Example, Section, Para, Code } from '../../components'

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
          <Link href="#global-theme">1. Global: At the application level</Link>
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
            import theme from './theme'
            
          `}</Example.Code>
          <Example.Code lang="jsx">{`
            ReactDOM.render(
              <ThemeProvider theme={theme}>
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
              href="https://github.com/siddharthkp/react-ui/blob/master/packages/react-ui/themes/light.js"
              target="_blank"
            >
              unopinionated minimal theme
            </Link>{' '}
            as the starting point.
          </Text>
          <Text>
            Check out the{' '}
            <Link href="/core-concepts/theme-specification">
              (TODO) theme format.
            </Link>
          </Text>
        </Para>

        <Example title="Contrived Example:">
          <Example.Code lang="js">{`
            // theme.js
            const theme = {
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
      <Section>
        <Para>
          <Text>
            The <Code>ThemeProvider</Code> also supports a second prop:{' '}
            <Code>components</Code>
          </Text>
          <Text>
            You can use this prop to modify all instances of a component from
            the library. For example, this is how the <Code>Breacrumb</Code>{' '}
            component from the light theme looks like:
          </Text>
        </Para>
        <Example>
          <Example.Preview>
            <Breadcrumb separator=">">
              <Link href="/home">Home</Link>
              <Link href="/settings">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </Example.Preview>
          <Example.Code>
            {`
              <Breadcrumb separator=">">
                <Link href="/home">Home</Link>
                <Link href="/settings">Settings</Link>
                <span>Notifications</span>
              </Breadcrumb>
            `}
          </Example.Code>
        </Example>

        <Para>
          We can customise all instances of this component in the application by
          passing a <Code>components</Code> object:
        </Para>

        <Example>
          <Example.Code lang="js">{`
          import React from 'react'
          import ReactDOM from 'react-dom'
          import { ThemeProvider } from 'react-ui'
          import App from './App'
          import theme from './theme'

          const components = {
            Breadcrumb: {
              backgroundColor: 'info', // reads from theme.colors.info
              paddingX: 4, // reads from theme.space.4 = 16px
              
              Link: {
                // only targets Links inside of Breadcrumbs
                textDecoration: 'underline' // underline is just underline :)
              }
            },
            BreadcrumbSeparator: {
              color: 'text.subtle' // reads from theme.colors.text.subtle
            }
          }
        `}</Example.Code>
          <Example.Code lang="jsx">{`
          ReactDOM.render(
            <ThemeProvider
              theme={theme}
              components={components}
            >
              <App />
            </ThemeProvider>,
            document.getElementById('root')
          )
        `}</Example.Code>
          <Example.Preview
            css={{
              borderTopRadius: 0,
              borderBottomRadius: 2,
              borderBottom: '1px solid'
            }}
          >
            <ThemeProvider
              theme={{
                space: ['0px', '4px', '8px', '12px', '16px'],
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
              }}
              components={{
                Breadcrumb: {
                  backgroundColor: 'info',
                  paddingX: 4,
                  Link: {
                    // only targets Links inside of Breadcrumbs
                    textDecoration: 'underline'
                  }
                },
                BreadcrumbSeparator: {
                  color: 'text.subtle'
                }
              }}
            >
              <Breadcrumb separator=">">
                <Link href="/home">Home</Link>
                <Link href="/settings">Settings</Link>
                <span>Notifications</span>
              </Breadcrumb>
            </ThemeProvider>
          </Example.Preview>
        </Example>

        <Para>
          <Text>
            The keys you see in the object above (<Code>Breadcrumb</Code>,{' '}
            <Code>Link</Code>, <Code>BreadcrumbSeparator</Code>) are identifiers
            for the component. All React UI components (and their sub-elements)
            have one.
          </Text>
          <Text>
            You can find these keys either by looking up the documentation page
            for the component like this one:{' '}
            <Link href="/components/Breadcrumb#Customisation">
              Breadcrumb — Customisation
            </Link>
          </Text>
          <Text>
            {' '}
            or by inspecting the component in developer tools and reading the{' '}
            <Code>data-component</Code> attribute on it. Here's the generated
            HTML of the above component for reference:
          </Text>
        </Para>
        <Example>
          <Example.Code>
            {`
                <nav data-component="Breadcrumb" aria-label="breadcrumb">
                  <ol>
                    <li data-component="BreadcrumbItem">
                      <a data-component="Link" href="/home">Home</a>
                      <span data-component="BreadcrumbSeparator" aria-hidden="true">&gt;</span>
                    </li>
                    <li data-component="BreadcrumbItem">
                      <a data-component="Link" href="/settings">Settings</a>
                      <span data-component="BreadcrumbSeparator" aria-hidden="true">&gt;</span>
                    </li>
                    <li aria-current="page" data-component="BreadcrumbItem">
                      <span>Notifications</span>
                    </li>
                  </ol>
                </nav>
            `}
          </Example.Code>
        </Example>
        <Para>
          <Text>
            The above appoach works great if you have to support themes in your
            product. If not, the following might be a better fit:
          </Text>
        </Para>
      </Section>
      <Section id="local" title="2. Local: At the site of usage">
        <Para>
          <Text>
            You can also customise the component at the place it is used. This
            approach is useful to customise a component for one-off use cases.
          </Text>
        </Para>
        <Example>
          <Example.Code>{`
          <Breadcrumb
            separator=">"
            css={{
              backgroundColor: 'blues.100', // reads from colors.blues.100
              paddingX: 4,

              BreadcrumbSeparator: {
                color: 'text.subtle'
              },
              Link: {
                textDecoration: 'underline'
              }
            }}>
            <Link href="/home">Home</Link>
            <Link href="/settings">Settings</Link>
            <span>Notifications</span>
          </Breadcrumb>
        `}</Example.Code>
          <Example.Preview
            css={{
              borderTopRadius: 0,
              borderBottomRadius: 2
            }}
          >
            <Breadcrumb
              separator=">"
              css={{
                backgroundColor: 'blues.100', // reads from theme.colors.info
                paddingX: 4, // reads from theme.space.4 = 16px

                Link: {
                  // only targets Links inside of Breadcrumbs
                  textDecoration: 'underline'
                },
                BreadcrumbSeparator: {
                  color: 'text.subtle' // reads from theme.colors.text.subtle
                }
              }}
            >
              <Link href="/home">Home</Link>
              <Link href="/settings">Settings</Link>
              <span>Notifications</span>
            </Breadcrumb>
          </Example.Preview>
        </Example>

        <Para>
          <Text>
            This approach can also be used to create your own set of components
            that customise and re-export components from React UI.
          </Text>
        </Para>

        <Example>
          <Example.Code lang="js">
            {`
              import React from 'react'
              import { Breadcrumb as BaseComponent } from 'react-ui'

              const customStyles = {
                BreadcrumbSeparator: {
                  color: 'text.subtle'
                },
                Link: {
                  textDecoration: 'underline'
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
    </Page>
  )
}

export default Documentation
