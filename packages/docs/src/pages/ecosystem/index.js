import React from 'react'
import { Text, Grid, Column, Link } from 'react-ui'
import { Page, Section } from '../../components'
import { Link as RouterLink } from '@reach/router'

const Documentation = () => {
  return (
    <Page title="Ecosystem">
      <NavSection
        category="Components"
        items={[{ title: 'Stats', path: 'Stats' }]}
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
        {items.map((item) => (
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
