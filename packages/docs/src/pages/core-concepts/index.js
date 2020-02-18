import React from 'react'
import { Element, Text, Link } from 'react-ui'
import { Link as RouterLink } from '@reach/router'
import { Page, Paragraph as Para } from '../../components'

const items = [
  { title: 'todo: Constraints based design', path: '1' },
  { title: 'todo: Theme specification', path: 'theme-specification' },
  { title: 'Customisation', path: 'customisation' },
  {
    title: 'Creating new components',
    path: 'creating-new-components'
  },
  { title: 'todo: Layouts', path: 'layouts' },
  { title: 'todo: Responsive', path: '6' },
  { title: 'todo: Utilities', path: '7' },
  { title: 'todo: Variants', path: '8' }
]

const Documentation = () => {
  return (
    <Page title="Core Concepts">
      <Para>
        <Text>
          These are the concepts that will help you be more productive with
          React UI.
        </Text>
      </Para>

      <Element
        as="ul"
        css={{
          paddingLeft: 0,
          listStyle: 'none',
          li: { paddingY: 2, color: 'text.subtle' }
        }}
      >
        {items.map(item => (
          <li key={item.path}>
            <Link as={RouterLink} to={item.path || ''}>
              {item.title}
            </Link>
          </li>
        ))}
      </Element>
    </Page>
  )
}

Documentation.items = items

export default Documentation
