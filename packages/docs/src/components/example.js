import React from 'react'
import { Element, Stack, Button, Link } from 'react-ui'
import { ExampleHeading } from './typography'

import { highlight, languages } from 'prismjs/components/prism-core'
import dedent from 'dedent'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight'

const ExampleContext = React.createContext()

export const Example = props => {
  const [codeVisible, setCodeVisibility] = React.useState(
    props.hideCode ? false : true
  )

  return (
    <ExampleContext.Provider value={{ codeVisible, setCodeVisibility }}>
      <section>
        {props.title && (
          <Link variant="subtle" href={'#' + props.title} id={props.title}>
            <ExampleHeading>{props.title}</ExampleHeading>
          </Link>
        )}
        <Element
          css={{
            borderRadius: 2,
            overflow: 'hidden',
            '> :first-child': {
              borderTopRadius: 2,
              borderBottomRadius: codeVisible ? 0 : 2
            },
            '> :last-child': { borderBottomRadius: 2 }
          }}
          marginBottom={12}
          {...props}
        >
          {props.children}
        </Element>
      </section>
    </ExampleContext.Provider>
  )
}

const Preview = ({ css = {}, ...props }) => {
  return (
    <Element
      as={Stack}
      css={{
        paddingY: 10,
        paddingX: 6,
        border: '1px solid',
        borderColor: 'grays.200',
        ...css
      }}
      {...props}
    >
      {props.children}
    </Element>
  )
}

const Code = ({ children, lang = 'jsx', ...props }) => {
  const { codeVisible, setCodeVisibility } = React.useContext(ExampleContext)

  if (!codeVisible) {
    return (
      <Stack justify="flex-end">
        <Button variant="link" onClick={_ => setCodeVisibility(true)}>
          see code
        </Button>
      </Stack>
    )
  }

  const html = highlight(dedent(children), languages[lang])

  return (
    <Element
      as="pre"
      css={{
        margin: 0,
        backgroundColor: 'grays.900',
        color: 'grays.100',
        padding: 4,
        fontSize: 3,
        overflow: 'scroll'
      }}
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}

Example.Code = Code
Example.Preview = Preview
