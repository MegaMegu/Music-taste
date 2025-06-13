export async function getTopArtists(range) {
  const params = new URLSearchParams({ range })
  const response = await fetch(`/api/spotify?${params.toString()}`, {
    credentials: "include"
  })
  return await response.json()
}
