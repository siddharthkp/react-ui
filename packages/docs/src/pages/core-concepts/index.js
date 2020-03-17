import React from 'react'
import { Text, Link } from 'react-ui'
import { Link as RouterLink } from '@reach/router'
import { Page, Paragraph as Para, List } from '../../components'

const items = [
  { title: 'Constraints based design', path: 'constraints-based-design' },
  { title: 'Design Tokens', path: 'tokens', todo: true },
  {
    title: 'Customising design tokens',
    path: 'customising-tokens',
    todo: true
  },
  { title: 'Element primitive', path: '/components/Element' },
  { title: 'Customising components', path: 'customising-components' },
  {
    title: 'Creating new components',
    path: 'creating-new-components'
  },
  { title: 'Layouts', path: 'layouts' },
  { title: 'Responsive syntax', path: 'responsive', todo: true },
  { title: 'Utilities', path: 'utilities', todo: true }
]

const Documentation = () => {
  return (
    <Page
      title="Core Concepts"
      tagline="These concepts will help you be more productive with React UI."
    >
      <List>
        <Text variant="subtle">Tokens:</Text>
        <Link as={RouterLink} to="constraints-based-design">
          Constraints based design
        </Link>
        <Link as={RouterLink} to="tokens">
          Design Tokens
        </Link>
        <Link as={RouterLink} to="customising-tokens">
          Customising design tokens
        </Link>
      </List>

      <List>
        <Text variant="subtle">Components:</Text>
        <Link as={RouterLink} to="/components/Element">
          Element primitive
        </Link>
        <Link as={RouterLink} to="customising-components">
          Customising components
        </Link>
        <Link as={RouterLink} to="creating-new-components">
          Creating new components
        </Link>
      </List>

      <List>
        <Text variant="subtle">Miscellaneous:</Text>
        <Link as={RouterLink} to="layouts">
          Layouts
        </Link>
        <Link as={RouterLink} to="responsive">
          Responsive syntax
        </Link>
        <Link as={RouterLink} to="utilities">
          Utilities
        </Link>
      </List>

      {/* <List>
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
      </List> */}
    </Page>
  )
}

Documentation.items = items

export default Documentation
