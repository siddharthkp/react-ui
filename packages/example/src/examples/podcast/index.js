import React from "react";
import ms from "pretty-ms";
import { formatDistance } from "date-fns";
import { tokens, components } from "react-ui/themes/dark";
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
} from "react-ui";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useParams
} from "react-router-dom";
import Draggable from "react-draggable";
import { Spring, config } from "react-spring/renderprops";

import "./style.css";
import { podcastIds, getEpisodes, getEpisode } from "./api";

const App = () => {
  const [episodes, setEpisodes] = React.useState([]);

  React.useEffect(() => {
    const promises = podcastIds.map(id => getEpisodes(id));

    Promise.all(promises).then(_podcasts => {
      const _episodes = _podcasts
        .map(podcast => {
          return podcast.episodes.map(_episode => {
            return {
              ..._episode,
              podcast
            };
          });
        })
        .flat()
        .sort((e1, e2) => e2.pub_date_ms - e1.pub_date_ms);
      setEpisodes(_episodes);
    });
  }, []);

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
  );
};
const Header = () => {
  return (
    <Stack
      justify="center"
      align="center"
      css={{
        height: 12,
        borderBottom: "1px solid",
        borderColor: "grays.800",
        color: "blues.600"
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
  );
};

const day = 24 * 60 * 60 * 1000;

const Feed = ({ episodes }) => {
  return (
    <Stack
      direction="vertical"
      gap={8}
      css={{
        height: calc("100vh - 64px"),
        paddingY: 8,
        overflowY: "auto",
        maxWidth: "768px",
        marginX: "auto"
      }}
    >
      <EpisodeList episodes={episodes} />
    </Stack>
  );
};

const Player = () => {
  let { podcastId, episodeId } = useParams();
  const episode = getEpisode(podcastId, episodeId);

  const [playing, setPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const audioRef = React.useRef();

  React.useEffect(() => {
    if (playing) audioRef.current.play();
    else audioRef.current.pause();
  }, [playing]);

  React.useEffect(() => {
    let timeout = window.setInterval(() => {
      if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
    }, 1000);

    return () => window.clearInterval(timeout);
  }, [audioRef]);

  const [dragging, setDragging] = React.useState(false);

  const onDrag = (event, ui) => {
    setDragging(true);
    setY(ui.y);
  };

  const [y, setY] = React.useState(0);

  const onDragStop = (event, ui) => {
    setDragging(false);

    if (y > 300) setY(360);
    else setY(0);
  };

  return (
    <Spring
      to={{ y: y }}
      config={dragging ? { tension: 0, friction: 0 } : config.default}
    >
      {spring => (
        <>
          <Element
            id="backdrop"
            css={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "black",
              opacity: (1 - spring.y / 360) * 0.6,
              display: [
                spring.y === 360 ? "none" : "block",
                spring.y === 360 ? "none" : "block",
                "none"
              ]
            }}
            onClick={() => setY(360)}
          ></Element>
          <Draggable
            axis="y"
            bounds={{ top: 0, bottom: 360 }}
            position={{ x: 0, y: dragging ? y : spring.y }}
            onDrag={onDrag}
            onStop={onDragStop}
          >
            <Element
              key={episodeId}
              css={{
                position: ["fixed", "fixed", "relative"],
                bottom: 0,
                width: "100%",
                backgroundColor: "grays.900",
                borderTop: "1px solid",
                borderColor: ["grays.800", "grays.800", "transparent"],
                height: "420px"
              }}
            >
              <audio ref={audioRef} autoPlay>
                <source src={episode.audio} />
              </audio>

              <BigPlayer
                style={{
                  opacity: (360 - spring.y) / 360
                }}
                {...{
                  setPlaying,
                  episode,
                  playing,
                  currentTime,
                  audioRef
                }}
              />
              <SmallPlayer
                css={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  cursor: "pointer",
                  opacity: (spring.y - 320) / 40
                }}
                onClick={() => setY(0)}
                {...{
                  setPlaying,
                  episode,
                  playing,
                  currentTime,
                  audioRef
                }}
              />
            </Element>
          </Draggable>
        </>
      )}
    </Spring>
  );
};

const SmallPlayer = ({
  setPlaying,
  episode,
  playing,
  currentTime,
  audioRef,
  ...props
}) => {
  return (
    <Stack gap={2} {...props}>
      <Image
        src={episode.thumbnail}
        alt="Epsiode thumbnail"
        css={{ size: 15 }}
      />
      <Button
        variant="link"
        style={{
          position: "absolute",
          top: 0,
          size: 15,
          backgroundColor: "#000000cc",
          color: playing ? "white" : "blues.400"
        }}
        css={{
          ":focus": {
            outline: "none"
          },
          ":active > svg": {
            transform: "scale(0.95)"
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
        css={{ width: "100%" }}
        marginRight={2}
      >
        <Text>{episode.title}</Text>
        <Text variant="subtle" size={3}>
          {audioRef.current && audioRef.current.readyState === 4
            ? ms((audioRef.current.duration - currentTime) * 1000, {
                colonNotation: true
              }).split(".")[0]
            : null}
        </Text>
      </Stack>
    </Stack>
  );
};

const BigPlayer = ({
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
        size: "250px"
      }}
    />
    <Button
      variant="link"
      style={{
        position: "absolute",
        top: 10,
        borderRadius: 3,
        size: "250px",
        backgroundColor: "#000000cc",
        color: playing ? "white" : "blues.400"
      }}
      css={{
        ":focus": {
          outline: "none"
        },
        ":active > svg": {
          transform: "scale(0.95)"
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
            }).split(".")[0]
          : ":"}
      </Text>
    </Stack>
  </Stack>
);

const EpisodeList = ({ episodes }) => (
  <Stack as="ul" direction="vertical" gap={6} css={{ paddingLeft: 0 }}>
    {episodes.map(episode => (
      <Episode key={episode.id} episode={episode} />
    ))}
  </Stack>
);

const Episode = ({ episode }) => (
  <Stack as="li" align="center" gap={4} css={{ paddingX: 6 }}>
    <Avatar size="large" src={episode.thumbnail} alt="podcast thumbnail" />
    <Stack direction="vertical" gap={1} css={{ width: calc("100% - 88px") }}>
      <Link
        as={RouterLink}
        to={"/podcast/" + episode.podcast.id + "/episode/" + episode.id}
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
        {episode.description.replace(/<\/?[^>]+(>|$)/g, "")}
      </Text>
    </Stack>
  </Stack>
);

export default App;

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
);

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
);
