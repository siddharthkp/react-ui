import React from 'react'
import { ThemeProvider, Element, Breadcrumb, Text, Link } from 'react-ui'

import { Page, Example, Section, Para, Code } from '../../components'

const Documentation = () => {
  return (
    <Page title="Theme Specification">
      <Para>
        <Text>
          React UI uses the{' '}
          <Link href="https://system-ui.com/theme/">
            System UI theme specification
          </Link>{' '}
          with minor additions.
        </Text>
        <Text variant="subtle">
          Until I document the theme specification and recommended best
          practices, please refer to the above link.
        </Text>
      </Para>
    </Page>
  )
}

export default Documentation
