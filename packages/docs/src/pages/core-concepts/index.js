import React from 'react'
import { Element, Text, Link } from 'react-ui'
import { Link as RouterLink } from '@reach/router'
import { Page, Paragraph as Para } from '../../components'

const items = [
  { title: 'Constraints based design', path: 'constraints-based-design' },
  { title: 'Customising components', path: 'customising-components' },
  { title: 'Customising design tokens', path: 'customising-tokens' },
  {
    title: 'Creating new components',
    path: 'creating-new-components'
  },
  { title: 'Layouts', path: 'layouts' },
  { title: 'Responsive', path: 'responsive', todo: true },
  { title: 'Utilities', path: 'utilities', todo: true },
  { title: 'Variants and Sizes', path: 'variants-and-sizes', todo: true }
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
            {item.todo ? (
              <Text variant="subtle" css={{ fontStyle: 'italic' }}>
                todo: {item.title}
              </Text>
            ) : (
              <Link as={RouterLink} to={item.path}>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </Element>
    </Page>
  )
}

Documentation.items = items

export default Documentation
