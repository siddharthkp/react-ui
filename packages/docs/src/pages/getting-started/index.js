import React from 'react'
import { Link, Text } from 'react-ui'
import { Page, Example, Paragraph as Para, List } from '../../components'

const Documentation = () => {
  return (
    <Page title="Getting started">
      <Para>You can install React UI from npm or yarn.</Para>
      <Example>
        <Example.Code lang="bash">
          {`
            npm install react-ui
            
            # or
            
            yarn add react-ui
          `}
        </Example.Code>
      </Example>

      <List>
        <Text>Next steps:</Text>
        <Link href="/core-concepts/">Core concepts →</Link>
        <Link href="/components">Components →</Link>
      </List>
    </Page>
  )
}

export default Documentation
