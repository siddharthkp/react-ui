import React from 'react'
import { Text, Grid, Column, Link } from 'react-ui'
import { Page, Example, Section, Paragraph as Para } from '../../components'
import { Link as RouterLink } from '@reach/router'

const Documentation = () => {
  return (
    <Page title="Components">
      <Para>
        React UI comes with a set of components that are{' '}
        <Text weight="medium">accessible</Text>,{' '}
        <Text weight="medium">responsive</Text> and{' '}
        <Text weight="medium">customisable</Text>.
      </Para>

      <Para>You can import them from the package like this:</Para>

      <Example>
        <Example.Code lang="js">
          {`
            import { Card, Avatar, Stack } from 'react-ui'
          `}
        </Example.Code>
      </Example>

      <NavSection
        category="Primitives"
        items={[
          { title: 'Element', path: 'Element', todo: true },
          { title: 'ThemeProvider', path: 'ThemeProvider', todo: true }
        ]}
      />

      <NavSection
        category="Building blocks"
        items={[
          { title: 'Avatar', path: 'Avatar' },
          { title: 'Button', path: 'Button' },
          { title: 'Heading', path: 'Heading' },
          { title: 'Image', path: 'Image' },
          { title: 'Input', path: 'Input' },
          { title: 'Link', path: 'Link' },
          { title: 'Select', path: 'Select' },
          { title: 'Spinner', path: 'Spinner' },
          { title: 'Switch', path: 'Switch' },
          { title: 'Text', path: 'Text' },
          { title: 'Textarea', path: 'Textarea' }
        ]}
      />

      <NavSection
        category="Layout"
        items={[
          { title: 'Stack', path: 'Stack' },
          { title: 'Grid', path: 'Grid' }
        ]}
      />

      <NavSection
        category="Molecules"
        items={[
          { title: 'Breadcrumb', path: 'Breadcrumb' },
          { title: 'Card', path: 'Card' },
          { title: 'Form', path: 'Form' },
          { title: 'Menu', path: 'Menu' },
          { title: 'Paragraph', path: 'Paragraph' }
        ]}
      />
    </Page>
  )
}

export default Documentation

const NavSection = ({ category, items }) => {
  return (
    <Section>
      <Text size={3} color="text.subtle" marginBottom={4}>
        {category}:
      </Text>
      <Grid gap="auto">
        {items.map(item => (
          <Column span={[6, 4, 4]} key={item.path}>
            {item.todo ? (
              <Text variant="subtle" css={{ fontStyle: 'italic' }}>
                todo: {item.title}
              </Text>
            ) : (
              <Link as={RouterLink} to={item.path}>
                {item.title}
              </Link>
            )}
          </Column>
        ))}
      </Grid>
    </Section>
  )
}
