export async function handleSpotifyButtonClick() {
  const response = await fetch('/api/auth/spotify', { credentials: 'include' })
  const body = await response.json()
  window.location.href = body.data
}

