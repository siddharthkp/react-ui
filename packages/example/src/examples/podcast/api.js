const credentials = { 'X-ListenAPI-Key': '9755022de91d48f59b2c9558d2150aec' }

export const podcastIds = [
  'a41d5912951d4238a4bf8fa138e068e4',
  '01d2655db97c43fb99c626f5f415780b',
  'ca8dc6dc760b441495e21f450db3691c',
  '1abda1c7c0e245dcabe7badbf12dd371',
  '8c64ce9c1afa49358ca5fb931a5edf22'
]

const cache = {
  init: () => {
    if (!localStorage.cache) localStorage.cache = JSON.stringify({})
    cache.data = JSON.parse(localStorage.cache)
  },
  get: id => {
    return cache.data[id]
  },
  set: (id, data) => {
    cache.data[id] = data
    localStorage.cache = JSON.stringify(cache.data)
  }
}

cache.init()

export const getEpisodes = async id => {
  if (cache.get(id)) return cache.get(id)
  else {
    const response = await fetch(
      `https://listen-api.listennotes.com/api/v2/podcasts/${id}?sort=recent_first`,
      { headers: credentials }
    )
    const data = await response.json()

    cache.set(id, data)
    return data
  }
}

export const getEpisode = (podcastId, episodeId) => {
  const podcast = cache.get(podcastId)
  const episode = podcast.episodes.find(episode => episode.id === episodeId)
  if (!episode) return null

  episode.podcast = podcast
  return episode
}
