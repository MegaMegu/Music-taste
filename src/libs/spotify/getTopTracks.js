export async function getTopTracks() {
  const token = window.localStorage.getItem('access_token');
  const url = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=0";
  const payload = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }

  const body = await fetch(url, payload);
  const response = await body.json();
  return response.items
}
