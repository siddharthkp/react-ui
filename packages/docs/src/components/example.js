import React from 'react'
import { Element, Stack, Button, Link } from 'react-ui'
import { ExampleHeading } from './typography'
import { useId } from '@reach/auto-id'
import VisuallyHidden from '@reach/visually-hidden'

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
            position: 'relative',
            '> *:first-child': {
              borderTopRadius: 2,
              borderBottomRadius: codeVisible ? 0 : 2
            },
            '> *:last-child': { borderBottomRadius: 2 }
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
        borderColor: 'App.borderColor',
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
  const uniqueId = useId()
  const [copied, setCopied] = React.useState(false)

  const copyCode = () => {
    const copyText = document.querySelector('#s' + uniqueId)
    copyText.select()
    document.execCommand('copy')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

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
    <>
      <Button
        variant="link"
        css={{
          position: 'absolute',
          right: 0,
          top: '10px',
          svg: { color: copied ? '#38C172' : '#929FB1' },
          ':hover, :focus': { svg: { color: copied ? '#38C172' : '#c6cbd1' } }
        }}
        onClick={copyCode}
      >
        {icon}
      </Button>
      <VisuallyHidden>
        <input
          id={'s' + uniqueId}
          value={dedent(children)}
          onChange={() => {}}
        />
      </VisuallyHidden>
      <Element
        as="pre"
        css={{
          margin: 0,
          backgroundColor: 'black',
          color: '#f5faff',
          padding: 4,
          fontSize: 3,
          overflow: 'scroll'
        }}
        dangerouslySetInnerHTML={{
          __html: html
        }}
        {...props}
      />
    </>
  )
}

Example.Code = Code
Example.Preview = Preview

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
)
