import React from 'react'
import { Text, Link, Avatar, Stack } from 'react-ui'
import VisuallyHidden from '@reach/visually-hidden'
import { Page, Section, List } from '../../components'

const Changelog = () => {
  return (
    <Page title="Changelog">
      <Section>
        <Stack align="center" justify="space-between" marginBottom={4}>
          <Link variant="body" href="#1.0.0-beta.25">
            1.0.0-beta.25{' '}
          </Link>
          <Contributors
            authors={[
              'tarang9211',
              'rubenmoya',
              'ankibalyan',
              'sumdook',
              'neves',
              'SaraVieira',
              'siddharthkp'
            ]}
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Additions:
          </Text>
          <Change
            pr="46"
            description="Checkbox - first draft"
            author="tarang9211"
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Improvements:
          </Text>
          <Change
            pr="33"
            description="Add forwardRef to all components"
            author="rubenmoya"
          />
          <Change
            pr="36"
            description="Added fullwidth to the button prop"
            author="ankibalyan"
          />
          <Change
            pr="52"
            description="Use bundlesize2 preview"
            author="siddharthkp"
          />
          <Change
            pr="53"
            description="Docs: Add size docs for Text #53"
            author="siddharthkp"
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Fixes:
          </Text>
          <Change
            pr="43"
            description="Docs: Fixed links to theme files"
            author="sumdook"
          />
          <Change
            pr="56"
            description="Respect required of an Input inside Form.Field"
            author="siddharthkp"
          />
        </Stack>

        <Stack as="span" align="center" gap={1} marginBottom={4}>
          <LinkedAvatar author="neves" />
          <LinkedAvatar author="SaraVieira" />
          <Text size={3} color="text.subtle">
            Thanks to{' '}
            <Link
              href={`https://github.com/neves`}
              target="_blank"
              variant="subtle"
            >
              neves
            </Link>{' '}
            and{' '}
            <Link
              href={`https://github.com/SaraVieira`}
              target="_blank"
              variant="subtle"
            >
              SaraVieira
            </Link>{' '}
            for their feedback.
          </Text>
        </Stack>
      </Section>

      <Section>
        <Stack align="center" justify="space-between" marginBottom={4}>
          <Link variant="body" href="#1.0.0-beta.24">
            1.0.0-beta.24
          </Link>
          <Contributors
            authors={['rubenmoya', 'Andarist', 'abhinav-anshul', 'siddharthkp']}
          />
        </Stack>
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

      <Section>
        <Stack justify="space-between" align="center" marginBottom={4}>
          <Link variant="body" href="#earlier-versions">
            Earlier versions
          </Link>
          <Contributors
            authors={[
              'arpitbatra123',
              'ggoodman',
              'tatchi',
              'mbj36',
              'rudeayelo'
            ]}
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Fixes:
          </Text>
          <Change
            pr="5"
            description="Fix token name in docs"
            author="arpitbatra123"
          />
          <Change
            pr="6"
            description="Fix walk for case where obj is null in Element"
            author="ggoodman"
          />
          <Change
            pr="7"
            description="Remove duplicate word in docs"
            author="tatchi"
          />
          <Change
            pr="8"
            description="Align example preview with code for Grid"
            author="tatchi"
          />
          <Change
            pr="10"
            description="Add spacing between words"
            author="mbj36"
          />
          <Change
            pr="15"
            description="Small fixes to the docs"
            author="rudeayelo"
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
    <LinkedAvatar author={author} showName />
  </Stack>
)

const Contributors = ({ authors }) => (
  <Stack gap={2} align="center">
    <Text size={3} color="text.subtle">
      {authors.length} contributors
    </Text>
    <Stack gap={1}>
      {authors.map(author => (
        <LinkedAvatar key={author} author={author} />
      ))}
    </Stack>
  </Stack>
)

const LinkedAvatar = ({ author, showName }) => (
  <Link href={`https://github.com/${author}`} target="_blank" variant="subtle">
    <Stack as="span" align="center" gap={showName ? 1 : 0}>
      <Avatar
        size="small"
        title={author}
        src={`https://github.com/${author}.png`}
      />
      {showName ? (
        <Text size={3}>{author}</Text>
      ) : (
        <VisuallyHidden>{author}</VisuallyHidden>
      )}
    </Stack>
  </Link>
)
