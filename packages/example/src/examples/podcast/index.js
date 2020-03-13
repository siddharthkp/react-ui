/** next steps:
 *
 * - [ ] add play and pause buttons
 * - [ ] show duration of podcast 12m / 45m or 27min left
 * - [ ] smol player + big player (animations are for loader)
 * - [ ] responsive design for desktop
 */

import React from 'react'
import ms from 'pretty-ms'
import { formatDistance } from 'date-fns'
import { tokens, components } from 'react-ui/themes/dark'
import {
  ThemeProvider,
  Stack,
  Avatar,
  Text,
  Link,
  Element,
  Image,
  calc
} from 'react-ui'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useParams
} from 'react-router-dom'

import './style.css'
import { podcastIds, getEpisodes, getEpisode } from './api'

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
      <Router>
        <Header />
        <Feed episodes={episodes} />
        <Switch>
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            children={<Player />}
          />
        </Switch>
      </Router>
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

const day = 24 * 60 * 60 * 1000

const Feed = ({ episodes: allEpisodes }) => {
  console.log(allEpisodes)

  const episodes = {
    week: allEpisodes.filter(episode => {
      return new Date() - episode.pub_date_ms < 8 * day
    }),
    month: allEpisodes.filter(episode => {
      return (
        new Date() - episode.pub_date_ms < 30 * day &&
        new Date() - episode.pub_date_ms > 8 * day
      )
    })
  }

  return (
    <Stack
      direction="vertical"
      gap={8}
      css={{ height: calc('100vh - 64px'), paddingY: 8, overflowY: 'auto' }}
    >
      <EpisodeList label="This week" episodes={episodes.week} />
      <EpisodeList label="Earlier this month" episodes={episodes.month} />
    </Stack>
  )
}

const Player = () => {
  let { podcastId, episodeId } = useParams()
  const episode = getEpisode(podcastId, episodeId)

  return (
    <>
      <Element
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'black',
          opacity: 0.6
        }}
      />
      <Element
        key={episodeId}
        css={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: 'grays.900',
          borderTop: '1px solid',
          borderColor: 'grays.800'
        }}
      >
        <Stack direction="vertical" align="center" marginY={10} gap={5}>
          <Image
            src={episode.thumbnail}
            alt="Epsiode thumbnail"
            css={{
              borderRadius: 3,
              size: '250px'
            }}
          />
          <audio controls>
            <source src={episode.audio} />
          </audio>
          <Stack direction="vertical" align="center" gap={1}>
            <Text>{episode.title}</Text>
            <Text variant="subtle" size={3}>
              {episode.podcast.title}
            </Text>
          </Stack>
        </Stack>
      </Element>
    </>
  )
}

const EpisodeList = ({ label, episodes }) => (
  <Stack as="ul" direction="vertical" gap={6} css={{ paddingLeft: 0 }}>
    <Text variant="subtle" size={3} marginLeft={6}>
      {label}
    </Text>
    {episodes.map(episode => (
      <Episode key={episode.id} episode={episode} />
    ))}
  </Stack>
)

const Episode = ({ episode }) => (
  <Stack as="li" align="center" gap={4} css={{ paddingX: 6 }}>
    <Avatar size="large" src={episode.thumbnail} alt="podcast thumbnail" />
    <Stack direction="vertical" gap={1} css={{ width: calc('100% - 88px') }}>
      <Link
        as={RouterLink}
        to={'/podcast/' + episode.podcast.id + '/episode/' + episode.id}
        variant="body"
        size={4}
        maxWidth="100%"
      >
        {episode.title}
      </Link>

      <Stack gap={2}>
        <Text size={3} variant="subtle">
          {formatDistance(episode.pub_date_ms, new Date())} ago
        </Text>
        <Text size={3} variant="subtle">
          ·
        </Text>
        <Text size={3} variant="subtle">
          {ms(episode.audio_length_sec * 1000, { compact: true })}
        </Text>
      </Stack>
      <Text variant="subtle" size={3} maxWidth="100%">
        {episode.description.replace(/<\/?[^>]+(>|$)/g, '')}
      </Text>
    </Stack>
  </Stack>
)

export default App
