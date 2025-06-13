import { fetchTopArtists } from '../services/fetch-top-artists.js'

export async function getTopArtists(req, res) {
  const range = req.query.range ?? 'long_term'
  let accessToken = req.cookies.musictasteaccesstoken

  const data = await fetchTopArtists(accessToken, range)
  if (data.error) return res.send(`ERROR: ${data.error.message}. Please report this on the devs.`)

  const topArtists = data.items.map((artist) => ({
    id: artist.id,
    name: artist.name,
    image: artist.images.at(0).url
  }))

  return res.json({ data: topArtists })
}
