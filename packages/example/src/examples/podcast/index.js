import React from 'react'
import { formatDistance } from 'date-fns'
import { ThemeProvider, Stack, Avatar, Text, Link, calc } from 'react-ui'
import { tokens, components } from 'react-ui/themes/dark'
import './style.css'
import { podcastIds, getEpisodes } from './api'

const App = () => {
  const [episodes, setEpisodes] = React.useState([])

  React.useEffect(() => {
    const promises = podcastIds.map(id => getEpisodes(id))

    Promise.all(promises).then(_podcasts => {
      const _episodes = _podcasts
        .map(podcast => {
          return podcast.episodes.map(_episode => {
            return {
              ..._episode,
              podcast
            }
          })
        })
        .flat()
        .sort((e1, e2) => e2.pub_date_ms - e1.pub_date_ms)
      setEpisodes(_episodes)
    })
  }, [])

  return (
    <ThemeProvider tokens={tokens} components={components}>
      <Header />
      <Feed episodes={episodes} />
    </ThemeProvider>
  )
}
const Header = () => {
  return (
    <Stack
      justify="center"
      align="center"
      css={{
        height: 12,
        borderBottom: '1px solid',
        borderColor: 'grays.800',
        color: 'blues.600'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    </Stack>
  )
}

const Feed = ({ episodes }) => {
  console.log(episodes)
  return (
    <Stack
      as="ul"
      direction="vertical"
      gap={6}
      css={{
        paddingY: 6,
        paddingX: 0,
        height: calc('100vh - 12'),
        overflowY: 'auto'
      }}
    >
      {episodes.map(episode => (
        <Stack
          as="li"
          key={episode.id}
          align="center"
          gap={4}
          css={{ paddingX: 6 }}
        >
          <Avatar
            size="large"
            src={episode.thumbnail}
            alt="podcast thumbnail"
          />
          <Stack direction="vertical" css={{ width: calc('100% - 88px') }}>
            <Link
              href={'/episode/' + episode.id}
              variant="body"
              size={4}
              maxWidth="100%"
            >
              {episode.title}
            </Link>
            <Text variant="subtle" size={3} maxWidth="100%">
              {episode.description.replace(/<\/?[^>]+(>|$)/g, '')}
            </Text>
            <Text size={3} variant="subtle">
              {formatDistance(episode.pub_date_ms, new Date())} ago
            </Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

export default App
