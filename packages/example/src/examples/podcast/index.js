import React from 'react'

import {
  ThemeProvider,
  Stack,
  Text,
  Link,
  Avatar,
  Image,
  Button,
  Element
} from 'react-ui'
import { tokens, components } from 'react-ui/themes/dark'
import { formatDistance, differenceInDays } from 'date-fns'
import ms from 'pretty-ms'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useParams
} from 'react-router-dom'

import { podcastIds, getEpisodes, getEpisode } from './api'
import './style.css'

const App = () => {
  return (
    <ThemeProvider tokens={tokens} components={components}>
      <Router>
        <Header />
        <Switch>
          <Route path="/episode/:id" children={<Player />} />
        </Switch>
        <Feed />
      </Router>
    </ThemeProvider>
  )
}

const Player = () => {
  let { id } = useParams()
  const [podcastId, episodeId] = id.split('-')
  const episode = getEpisode(podcastId, episodeId) || {}

  if (!episode.id) return null

  return (
    <>
      <Element css={{ display: ['flex', 'none', 'none'] }}>
        <Link
          as={RouterLink}
          to="/"
          css={{
            position: 'fixed',
            zIndex: 2,
            backgroundColor: 'grays.900',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.95,
            animation: 'fade-in 150ms ease-out'
          }}
        />
        <MobilePlayer episode={episode} />
      </Element>
    </>
  )
}

const MobilePlayer = ({ episode, ...props }) => {
  const [playing, setPlaying] = React.useState(true)
  const [time, setTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)

  React.useEffect(() => {
    const audio = document.getElementById('audio')
    if (!audio) return
    audio.addEventListener('loadeddata', () => {
      setDuration(audio.duration)
    })
  }, [episode.id])

  const audio = document.getElementById('audio')

  const play = () => {
    setPlaying(true)
    audio.play()
  }
  const pause = () => {
    setPlaying(false)
    audio.pause()
  }

  React.useEffect(() => {
    setDuration(0)
  }, [episode.id])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (audio) setTime(audio.currentTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [playing, audio])

  return (
    <Stack
      direction="vertical"
      align="center"
      css={{
        position: 'fixed',
        zIndex: 3,
        bottom: 0,
        width: '100%',
        backgroundColor: '#222c39',
        boxShadow:
          '0 -10px 15px -3px rgba(0,0,0,0.1), 0 -4px 6px -2px rgba(0,0,0,0.05)',
        borderTopRadius: 3,
        paddingY: 10,
        paddingX: 5,
        overflow: 'hidden',
        animation: 'slide-up 150ms ease-out'
      }}
      {...props}
    >
      <Image
        src={episode.thumbnail}
        alt="thumbnail"
        css={{
          size: '200px',
          borderRadius: 2
        }}
        marginBottom={10}
      />
      <Button
        direction="vertical"
        justify="center"
        align="center"
        css={{
          position: 'absolute',
          top: 10,
          size: '200px',
          borderRadius: 2,
          '-webkit-tap-highlight-color': 'transparent'
        }}
        style={{
          border: 'none',
          backgroundColor: '#000000bf',
          color: playing ? 'greens.500' : 'grays.300'
        }}
        onClick={() => (playing ? pause() : play())}
      >
        {playing ? <PauseIcon size="48px" /> : <PlayIcon size="48px" />}
      </Button>
      <audio id="audio" key={episode.id} autoPlay>
        <source src={episode.audio} />
        Your browser does not support the audio tag.
      </audio>
      <Stack direction="vertical" align="center" gap={2}>
        <Text align="center">{episode.title}</Text>
        <Text variant="subtle" align="center">
          {episode.podcast.title}
        </Text>
        <Text variant="subtle">
          {duration
            ? ms(1000 * (duration - time), {
                colonNotation: true,
                secondsDecimalDigits: 0
              })
            : ':'}
        </Text>
      </Stack>
    </Stack>
  )
}

const Feed = () => {
  const [episodes, setEpisodes] = React.useState([])
  let { id } = useParams()

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
    <Stack
      direction="vertical"
      gap={12}
      marginX="auto"
      marginBottom={10}
      css={{
        paddingTop: 10,
        maxWidth: '768px',
        height: 'calc(100vh - 84px)',
        overflow: id ? 'hidden' : 'auto'
      }}
    >
      <Section title="This week">
        {episodes
          .filter(
            episode => differenceInDays(new Date(), episode.pub_date_ms) < 7
          )
          .map(episode => (
            <Episode key={episode.id} episode={episode} />
          ))}
      </Section>
      <Section title="This month">
        {episodes
          .filter(
            episode =>
              differenceInDays(new Date(), episode.pub_date_ms) >= 7 &&
              differenceInDays(new Date(), episode.pub_date_ms) < 30
          )
          .map(episode => (
            <Episode key={episode.id} episode={episode} />
          ))}
      </Section>
      <Section title="Older">
        {episodes
          .filter(
            episode => differenceInDays(new Date(), episode.pub_date_ms) >= 30
          )
          .map(episode => (
            <Episode key={episode.id} episode={episode} />
          ))}
      </Section>
    </Stack>
  )
}

const Header = props => (
  <Stack
    justify="center"
    align="center"
    css={{
      height: '44px',
      borderBottom: '1px solid',
      borderColor: 'grays.800',
      color: 'greens.400'
    }}
    {...props}
  >
    <HeadphonesIcon />
  </Stack>
)

const Section = ({ title, ...props }) => (
  <section>
    <Text
      size={2}
      variant="subtle"
      marginLeft={8}
      marginBottom={6}
      css={{ textTransform: 'uppercase', letterSpacing: 1 }}
    >
      {title}
    </Text>
    <Stack
      as="ul"
      direction="vertical"
      gap={8}
      css={{ listStyle: 'none', paddingLeft: 0 }}
      {...props}
    >
      {props.children}
    </Stack>
  </section>
)

const Episode = ({ episode }) => (
  <Stack
    as="li"
    direction="horizontal"
    gap={4}
    align="center"
    css={{ overflow: 'hidden', paddingX: 6 }}
  >
    <Avatar size="large" src={episode.thumbnail} />
    <Stack direction="vertical" gap={1} css={{ width: 'calc(100% - 80px)' }}>
      <Link
        as={RouterLink}
        to={'/episode/' + episode.podcast.id + '-' + episode.id}
        size={4}
        variant="body"
        css={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: 'calc(100% - 36px)'
        }}
      >
        {episode.title}
      </Link>

      <Stack align="center" gap={2}>
        <Text size={2} variant="subtle">
          {formatDistance(episode.pub_date_ms, new Date())} ago
        </Text>
        <Text size={3} variant="subtle">
          ·
        </Text>
        <Text size={2} variant="subtle">
          {ms(episode.audio_length_sec * 1000, { compact: true })}
        </Text>
      </Stack>
      <Text
        size={2}
        css={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        {episode.description.replace(/(<([^>]+)>)/gi, '')}
      </Text>
    </Stack>
  </Stack>
)

const HeadphonesIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
)

const PlayIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#00000091"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
)

const PauseIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#00000091"></circle>
    <line x1="10" y1="15" x2="10" y2="9"></line>
    <line x1="14" y1="15" x2="14" y2="9"></line>
  </svg>
)

export default App
