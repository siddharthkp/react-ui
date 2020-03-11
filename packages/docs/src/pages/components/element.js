import React from 'react'
import { ThemeProvider, Element, Text, Link, Paragraph, Button } from 'react-ui'
import * as light from 'react-ui/themes/light'
import {
  Page,
  List,
  Para,
  Code,
  Section,
  Example,
  Table
} from '../../components'

const Documentation = () => {
  return (
    <Page
      title="Element Primitive"
      tagline="Building block for React UI components"
    >
      <Para>
        <Text>
          Every React UI element is built on top of a base <Code>Element</Code>{' '}
          which gives them access to common props.
        </Text>

        <Text>
          To create custom components that <i>feel like part of the system</i>,
          you can use the base <Code>Element</Code> as well.{' '}
          <Link href="/core-concepts/creating-new-components">
            Read the guide here.
          </Link>
        </Text>
      </Para>
      <section>
        <Text>On this page: </Text>
        <List>
          <Link href="#as">as</Link>
          <Link href="#css">css</Link>
          <Link href="#style">style</Link>
          <Link href="#margin">margin</Link>
          <Link href="#component">component</Link>
          <Link href="#variant">variant</Link>
        </List>
      </section>
      <Section title="as">
        <Para>
          <Text>
            To create components with the right semantic elements, you can pass
            the <Code>as</Code> prop with a valid html element (default: div) or
            another React UI component.
          </Text>
          <Text>
            It is recommended to always use the <Code>as</Code> prop to avoid
            using <Code>div</Code> when semantic options are available.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">
            {`
              import React from 'react'
              
              function Paragraph(props) {
                return <Element as="p" { ...props } />
              }
             `}
          </Example.Code>
          <Example.Code lang="html">
            {`
              <!-- result: -->
              <p>
                this is the content
              </p>
            `}
          </Example.Code>
        </Example>
      </Section>

      <Section title="css">
        <Para>
          <Text>
            The <Code>css</Code> prop is the way to style your components.
          </Text>
          <Text>
            It will create a css class that is inserted into the page. React UI
            relies on <Link href="https://emotion.sh">emotion</Link> to create
            classnames.
          </Text>
          <Text>
            The css prop is hooked up to{' '}
            <Link href="/components/ThemeProvider">
              tokens defined in your theme.
            </Link>{' '}
            This means you can use references to your tokens and the{' '}
            <Code>css</Code> utility will insert the right values here.
          </Text>
          <Text>
            Example: <Code>color: 'text.body'</Code> will be read from{' '}
            <Code>tokens.colors.text.body</Code>. For the full table, refer to{' '}
            <Link href="/core-concepts/tokens">the tokens reference.</Link>
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">
            {`
              function Paragraph(props) {
                return (
                  <Element
                    as="p"
                    css={{
                      color: 'text.body', // tokens.colors.text.body
                      fontSize: 3         // tokens.fontSizes.3
                    }}
                    {...props}
                  />
                )
              }
            `}
          </Example.Code>
          <Example.Code lang="html">
            {`
              <!-- result: -->
              <p className="css-e1h4b8-p">
                this is the content
              </p>
            `}
          </Example.Code>
        </Example>
      </Section>

      <Section title="style">
        <Para>
          <Text>
            Unlike the <Code>css</Code> prop, <Code>style</Code> will create
            inline styles, like it does in HTML.
          </Text>
          <Text>
            What's different is that, unlike HTML, this prop is wired to your
            tokens as well (similar to css prop)
          </Text>
          <Text>
            This is useful in the (hopefully rare) scenario that you want to
            break away from the styles of your component for a specific use
            case.
          </Text>
        </Para>
        <Example>
          <Example.Code>
            {`
              <Paragraph style={{ color: 'text.error' }}>
                this is custom content
              </Paragraph>
            `}
          </Example.Code>
          <Example.Code lang="html">
            {`
              <!-- result: -->
              <!--
                Has the same classname from the example above,
                but with custom inline styles
              -->
              <p
                className="css-e1h4b8-p"
                style="color: red"
              >
                this is the content
              </p>
            `}
          </Example.Code>
        </Example>
      </Section>

      <Section title="margin">
        <Para>
          <Text>
            Margins are a necessary part of composing layouts, React UI ships
            with margin utilities that can be applied to any component built
            with <Code>Element</Code> base.
          </Text>
          <Text>
            Margin props expect either a key from <Code>tokens.space</Code> or
            an explicit value with unit.
          </Text>
          <Example>
            <Example.Code>
              {`
              // Recommended: 4 = tokens.space.4
              <Paragraph marginBottom={4}>...</Paragraph>
                
              // Also allowed:
              <Paragraph marginBottom="10px">...</Paragraph>
            `}
            </Example.Code>
          </Example>
        </Para>
        <Example>
          <Example.Code>
            {`
              <Paragraph marginBottom={4}>
                this is custom content
              </Paragraph>
              <Paragraph>
                this is another paragraph content
              </Paragraph>
              <Paragraph>
                this is another paragraph content
              </Paragraph>
            `}
          </Example.Code>
          <Example.Preview>
            <div>
              <Paragraph marginBottom={4}>paragraph with margin</Paragraph>
              <Paragraph>paragraph without margin</Paragraph>
              <Paragraph>third paragragh</Paragraph>
            </div>
          </Example.Preview>
        </Example>
        <Para>
          <Text>The list of margin utilities is: </Text>
        </Para>
        <Table>
          <Table.Row>
            <Table.Column span={12}>marginTop</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={12}>marginBottom</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={12}>marginLeft</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={12}>marginRight</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={2}>marginY</Table.Column>
            <Table.Column span={1}></Table.Column>
            <Table.Column span={9}>
              shorthand for marginTop + marginBottom
            </Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={2}>marginX</Table.Column>
            <Table.Column span={1}></Table.Column>
            <Table.Column span={9}>
              shorthand for marginLeft + marginRight
            </Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column span={2}>margin</Table.Column>
            <Table.Column span={1}></Table.Column>
            <Table.Column span={9}>shorthand for all 4 directions</Table.Column>
          </Table.Row>
        </Table>
      </Section>

      <Section title="component">
        <Para>
          <Text>
            React UI has two customisation strategies, one of them is to{' '}
            <Link href="/core-concepts/customising-components#components-in-theme">
              define components as part of theme.
            </Link>
          </Text>
          <Text>
            To identify components, add the <Code>component</Code> prop.
          </Text>
        </Para>
        <Example>
          <Example.Code lang="js">
            {`
              import React from 'react'
              
              function Paragraph(props) {
                return <Element as="p" component="Para" { ...props } />
              }
             `}
          </Example.Code>
          <Example.Code lang="html">
            {`
              <!-- result: -->
              <p data-component="Para">
                this is the content
              </p>
            `}
          </Example.Code>
        </Example>
      </Section>

      <Section title="variant">
        <Para>
          <Text>
            It's fairly common to have multiple variations of the same
            components.
          </Text>
          <Text>
            One such example is the <Code>Button</Code> component:
          </Text>
        </Para>
        <Example>
          <Example.Preview gap={4}>
            <Button>Log in</Button>
            <Button variant="secondary" debug>
              Cancel
            </Button>
            <Button variant="link">Reset</Button>
          </Example.Preview>
          <Example.Code>{`
            <Button variant="primary">Log in</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="link">Reset form</Button>
          `}</Example.Code>
        </Example>
        <Para>
          <Text>
            React UI has first class support for variants in the theming layer.
            Note: To use variants, you have to identify the component by using
            the <Code>component</Code> prop as explained above.
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
            <Avatar6 variant="online" src="https://github.com/sameen-shi.png" />
          </Example.Preview>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation

function Avatar6(props) {
  return (
    <ThemeProvider
      tokens={light.tokens}
      components={{
        Avatar: {
          variants: {
            default: { borderColor: 'grays.500' },
            online: { borderColor: 'greens.500' }
          }
        }
      }}
    >
      <Element
        as="img"
        component="Avatar"
        css={{
          width: 10,
          height: 10,
          border: '2px solid',
          borderRadius: '50%'
        }}
        {...props}
      />
    </ThemeProvider>
  )
}
