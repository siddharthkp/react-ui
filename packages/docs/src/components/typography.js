import React from 'react'
import { Text, Heading as BaseHeading } from 'react-ui'

export const Paragraph = props => {
  return <Text css={{ display: 'block' }} marginBottom={8} {...props} />
}

export const Heading = props => {
  return (
    <BaseHeading
      as="h1"
      marginBottom={5}
      css={{ fontWeight: 'normal' }}
      {...props}
    />
  )
}

export const Tagline = props => {
  return (
    <Text size={4} color="text.subtle" css={{ display: 'block' }} {...props} />
  )
}

export const SectionHeading = props => {
  return (
    <BaseHeading
      as="h2"
      marginBottom={10}
      css={{ fontSize: 5, fontWeight: 'normal', color: 'text.body' }}
      {...props}
    />
  )
}

export const ExampleHeading = props => {
  return (
    <BaseHeading
      as="h3"
      marginBottom={6}
      css={{ fontSize: 4, fontWeight: 'normal' }}
      {...props}
    />
  )
}
