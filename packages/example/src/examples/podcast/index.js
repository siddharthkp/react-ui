/** next steps:
 *
 * - [x] add play and pause buttons
 * - [x] show duration of podcast 12m / 45m or 27min left
 * - [x] smol player + big player
 * - [x] transition animation for switching between players
 * - [x] responsive design for desktop
 * - [ ] publish the docs (beta)
 * - [ ] show warning if value is not on the scale
 * - [ ] define new scale unit
 * - [ ] bug: borderTop doesn't take responsive syntax
 
 */

import React from 'react'
import ms from 'pretty-ms'
import { formatDistance } from 'date-fns'
import { tokens, components } from 'react-ui/themes/dark'
import {
  ThemeProvider,
  Stack,
  Avatar,
  Button,
  Text,
  Link,
  Element,
  Image,
  Grid,
  Column,
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
        <Grid>
          <Column span={[12, 12, 8]}>
            <Feed episodes={episodes} />
          </Column>
          <Column span={[12, 12, 4]}>
            <Switch>
              <Route
                path="/podcast/:podcastId/episode/:episodeId"
                children={<Player />}
              />
            </Switch>
          </Column>
        </Grid>
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
      css={{
        height: calc('100vh - 64px'),
        paddingY: 8,
        overflowY: 'auto',
        maxWidth: '768px',
        marginX: 'auto'
      }}
    >
      <EpisodeList label="This week" episodes={episodes.week} />
      <EpisodeList label="Earlier this month" episodes={episodes.month} />
    </Stack>
  )
}

const Player = () => {
  let { podcastId, episodeId } = useParams()
  const episode = getEpisode(podcastId, episodeId)

  const [playing, setPlaying] = React.useState(true)
  const [currentTime, setCurrentTime] = React.useState(0)
  const audioRef = React.useRef()

  React.useEffect(() => {
    if (playing) audioRef.current.play()
    else audioRef.current.pause()
  }, [playing])

  React.useEffect(() => {
    let timeout = window.setInterval(() => {
      if (audioRef.current) setCurrentTime(audioRef.current.currentTime)
    }, 1000)

    return () => window.clearInterval(timeout)
  }, [audioRef])

  const [size, setSize] = React.useState('big')

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
          opacity: 0.6,
          display: [
            size === 'small' ? 'none' : 'block',
            size === 'small' ? 'none' : 'block',
            'none'
          ]
        }}
        onClick={() => setSize('small')}
      />
      <Element
        key={episodeId}
        css={{
          position: ['fixed', 'fixed', 'relative'],
          bottom: 0,
          width: '100%',
          backgroundColor: 'grays.900',
          borderTop: '1px solid',
          borderColor: ['grays.800', 'grays.800', 'transparent'],
          height: size === 'small' ? 12 : '420px',
          transition: 'height ease-in-out',
          transitionDuration: 4
        }}
      >
        <audio ref={audioRef} autoPlay>
          <source src={episode.audio} />
        </audio>

        <BigPlayer
          css={{
            opacity: size === 'big' ? 1 : 0,
            transition: 'opacity ease-in-out',
            transitionDuration: 4
          }}
          {...{
            setSize,
            setPlaying,
            episode,
            playing,
            currentTime,
            audioRef
          }}
        />
        <SmallPlayer
          css={{
            opacity: size === 'small' ? 1 : 0,
            transition: 'opacity ease-in-out',
            transitionDuration: 4,
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
          {...{
            setSize,
            setPlaying,
            episode,
            playing,
            currentTime,
            audioRef
          }}
        />
      </Element>
    </>
  )
}

const SmallPlayer = ({
  setPlaying,
  setSize,
  episode,
  playing,
  currentTime,
  audioRef,
  ...props
}) => {
  return (
    <Stack
      gap={2}
      onClick={() => setSize('big')}
      css={{ cursor: 'pointer' }}
      {...props}
    >
      <Image
        src={episode.thumbnail}
        alt="Epsiode thumbnail"
        css={{ size: 12 }}
      />
      <Button
        variant="link"
        style={{
          position: 'absolute',
          top: 0,
          size: 12,
          backgroundColor: '#000000cc',
          color: playing ? 'white' : 'blues.400'
        }}
        css={{
          ':focus': {
            outline: 'none'
          },
          ':active > svg': {
            transform: 'scale(0.95)'
          }
        }}
        onClick={() => setPlaying(!playing)}
      >
        {playing ? (
          <PauseIcon width="32" height="32" />
        ) : (
          <PlayIcon width="32" height="32" />
        )}
      </Button>
      <Stack
        justify="space-between"
        align="center"
        css={{ width: '100%' }}
        marginRight={2}
      >
        <Text>{episode.title}</Text>
        <Text variant="subtle" size={3}>
          {audioRef.current && audioRef.current.readyState === 4
            ? ms((audioRef.current.duration - currentTime) * 1000, {
                colonNotation: true
              }).split('.')[0]
            : null}
        </Text>
      </Stack>
    </Stack>
  )
}

const BigPlayer = ({
  setSize,
  setPlaying,
  episode,
  playing,
  currentTime,
  audioRef,
  ...props
}) => (
  <Stack direction="vertical" align="center" marginY={10} gap={8} {...props}>
    <Image
      src={episode.thumbnail}
      alt="Epsiode thumbnail"
      css={{
        borderRadius: 3,
        size: '250px'
      }}
    />
    <Button
      variant="link"
      style={{
        position: 'absolute',
        top: 10,
        borderRadius: 3,
        size: '250px',
        backgroundColor: '#000000cc',
        color: playing ? 'white' : 'blues.400'
      }}
      css={{
        ':focus': {
          outline: 'none'
        },
        ':active > svg': {
          transform: 'scale(0.95)'
        }
      }}
      onClick={() => setPlaying(!playing)}
    >
      {playing ? (
        <PauseIcon width="80" height="80" />
      ) : (
        <PlayIcon width="80" height="80" />
      )}
    </Button>

    <Stack direction="vertical" align="center" gap={1} marginX={10}>
      <Text align="center">{episode.title}</Text>
      <Text variant="subtle" size={3}>
        {episode.podcast.title}
      </Text>
      <Text variant="subtle" size={3}>
        {audioRef.current && audioRef.current.readyState === 4
          ? ms((audioRef.current.duration - currentTime) * 1000, {
              colonNotation: true
            }).split('.')[0]
          : ':'}
      </Text>
    </Stack>
  </Stack>
)

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

const PlayIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
)

const PauseIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="10" y1="15" x2="10" y2="9"></line>
    <line x1="14" y1="15" x2="14" y2="9"></line>
  </svg>
)
