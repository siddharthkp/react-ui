import cachedData from './cache'

export const podcastIds = Object.keys(cachedData)

const cache = {
  init: () => (cache.data = cachedData),
  get: id => cache.data[id],
  set: (id, data) => {
    cache.data[id] = data
    localStorage.cache = JSON.stringify(cache.data)
  }
}

cache.init()

export const getEpisodes = async id => {
  if (cache.get(id)) return cache.get(id)
  return {}
}

export const getEpisode = (podcastId, episodeId) => {
  const podcast = cache.get(podcastId)
  const episode = podcast.episodes.find(episode => episode.id === episodeId)
  if (!episode) return null

  episode.podcast = podcast
  return episode
}
