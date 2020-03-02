import React from 'react'
import { Image } from 'react-ui'
import { Page, Example, Section, Para, Code } from '../../components'

const Documentation = () => {
  return (
    <Page title="Image">
      <Example>
        <Example.Preview>
          <Image
            alt="sky full of stars"
            src="https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
          />
        </Example.Preview>
        <Example.Code>
          {`
            <Image
              alt="sky full of stars"
              src="https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
            />
          `}
        </Example.Code>
      </Example>

      <Section title="Examples">
        <Para>
          Images take 100% of the space available to them. You can make them a
          specific width and height by using the <Code>css</Code> prop.
        </Para>

        <Example>
          <Example.Preview>
            <Image
              alt="sky full of stars"
              css={{ width: '200px' }}
              src="https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
            />
          </Example.Preview>
          <Example.Code>{`
            <Image
              alt="sky full of stars"
              css={{ width: '200px' }}
              src="https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
            />
          `}</Example.Code>
        </Example>
      </Section>
    </Page>
  )
}

export default Documentation
