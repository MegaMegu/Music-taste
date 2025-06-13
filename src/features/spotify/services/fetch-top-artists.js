export async function fetchTopArtists(accessToken, range) {
  const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=50&offset=0`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return await response.json()
}
