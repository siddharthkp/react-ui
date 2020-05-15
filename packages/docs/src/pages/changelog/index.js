import React from 'react'
import { Text, Link, Avatar, Stack } from 'react-ui'
import VisuallyHidden from '@reach/visually-hidden'
import { Page, Section, List } from '../../components'

const Changelog = () => {
  return (
    <Page title="Changelog">
      <Section>
        <Stack align="center" justify="space-between" marginBottom={4}>
          <Link variant="body" href="#1.0.0-beta.26">
            1.0.0-beta.26{' '}
          </Link>
          <Contributors
            authors={[
              'loweisz',
              'NateRadebaugh',
              'nurul3101',
              'sreetamdas',
              'iamdarshshah',
              'hazem3500',
              'sumdook',
              'shubh0107',
              'Sagarpreet',
              'JalDEV',
              'siddharthkp'
            ]}
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Additions:
          </Text>
          <Change
            pr="39"
            description="Adding Dialog component"
            author="loweisz"
          />
          <Change
            pr="48"
            description="Add docs for integrating 3rd party libraries like reach-ui"
            author="NateRadebaugh"
          />
          <Change
            pr="60"
            description="New component: Tooltip"
            author="siddharthkp"
          />
          <Change
            pr="71"
            description="New component: Alert"
            author="siddharthkp"
          />
          <Change
            pr="76"
            description="New component: Tabs"
            author="siddharthkp"
          />
          <Change
            pr="78"
            description="New component: Skeleton"
            author="siddharthkp"
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Improvements:
          </Text>
          <Change
            pr="47"
            description="Docs: Change favicon based on theme"
            author="siddharthkp"
          />
          <Change
            pr="61"
            description="Upgraded @reach/menu-button"
            author="nurul3101"
          />
          <Change
            pr="63"
            description="Update version badge in README"
            author="sreetamdas"
          />
          <Change
            pr="80"
            description="Add visual tests with chromatic"
            author="siddharthkp"
          />
        </Stack>
        <Stack as={List} direction="vertical" gap={1} marginBottom={4}>
          <Text size={3} color="text.subtle">
            Fixes:
          </Text>
          <Change
            pr="67"
            description="Fix tooltip image on components page."
            author="iamdarshshah"
          />
          <Change
            pr="68"
            description="Remove duplicate paragraph in ideas docs page"
            author="hazem3500"
          />
          <Change
            pr="79"
            description="Handle 0 for margin values"
            author="siddharthkp"
          />
          <Change
            pr="84"
            description="Fix specificity issues"
            author="siddharthkp"
          />
        </Stack>

        <Stack as="span" align="center" gap={1} marginBottom={4}>
          <LinkedAvatar author="sumdook" />
          <LinkedAvatar author="shubh0107" />
          <LinkedAvatar author="Sagarpreet" />
          <LinkedAvatar author="JalDEV" />
          <Text size={3} color="text.subtle">
            Thanks to{' '}
            <Link
              href={`https://github.com/sumdook`}
              target="_blank"
              variant="subtle"
            >
              sumdook
            </Link>
            ,{' '}
            <Link
              href={`https://github.com/shubh0107`}
              target="_blank"
              variant="subtle"
            >
              shubh0107
            </Link>
            ,{' '}
            <Link
              href={`https://github.com/Sagarpreet`}
              target="_blank"
              variant="subtle"
            >
              Sagarpreet
            </Link>{' '}
            and{' '}
            <Link
              href={`https://github.com/JalDEV`}
              target="_blank"
              variant="subtle"
            >
              JalDEV
            </Link>{' '}
            for their feedback
          </Text>
        </Stack>
        <Stack as="span" align="center" gap={1} marginBottom={4}>
          <LinkedAvatar author="rubenmoya" />
          <Text size={3} color="text.subtle">
            Massive shout out to{' '}
            <Link
              href={`https://github.com/rubenmoya`}
              target="_blank"
              variant="subtle"
            >
              rubenmoya
            </Link>{' '}
            for reviewing so many pull requests!
          </Text>
        </Stack>
      </Section>

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
            for their feedback
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
    <Stack gap={-8}>
      {authors.map((author, index) => (
        <LinkedAvatar
          key={author}
          author={author}
          css={{ zIndex: authors.length - index }}
        />
      ))}
    </Stack>
  </Stack>
)

const LinkedAvatar = ({ author, showName, ...props }) => (
  <Link
    href={`https://github.com/${author}`}
    target="_blank"
    variant="subtle"
    {...props}
  >
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
