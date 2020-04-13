import React from 'react'
import { Text, Link, Avatar, Stack } from 'react-ui'
import { Page, Section, List } from '../../components'

const Changelog = () => {
  return (
    <Page title="Changelog">
      <Section>
        <Link variant="body" href="#1.0.0-beta.24" marginBottom={4}>
          1.0.0-beta.24
        </Link>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Additions:
          </Text>
          <Change pr="4" description="Add Stats component" author="rubenmoya" />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Improvements:
          </Text>
          <Change
            pr="21"
            description="Add support for RTL layouts in Stack by using logical margin"
            author="Andarist"
          />
          <Change
            pr="25"
            description="Add contributing guide"
            author="siddharthkp"
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Fixes:
          </Text>
          <Change
            pr="19"
            description="Fix scrollbar bug in code examples for Chrome on Windows"
            author="abhinav-anshul"
          />
          <Change
            pr="32"
            description="Add missing overflow to Card, border to MenuList in themes"
            author="siddharthkp"
          />
        </Stack>
      </Section>
    </Page>
  )
}

export default Changelog

const Change = ({ pr, description, author }) => (
  <Stack direction="vertical" gap={1}>
    <Text>
      <Link
        href={`https://github.com/siddharthkp/react-ui/pull/${pr}`}
        target="_blank"
      >
        #{pr}
      </Link>{' '}
      {description}
    </Text>
    <Link
      href={`https://github.com/${author}`}
      target="_blank"
      variant="subtle"
    >
      <Stack align="center" gap={1}>
        <Avatar size="small" src={`https://github.com/${author}.png`} />
        <Text size={3}>{author}</Text>
      </Stack>
    </Link>
  </Stack>
)
