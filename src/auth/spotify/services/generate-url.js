import QueryString from 'qs'

export function generateUrl(state) {
  const clientId = process.env.CLIENT_ID
  const redirectUri = process.env.REDIRECT_URI
  const scope = 'user-read-email user-top-read'

  return 'https://accounts.spotify.com/authorize?' +
    QueryString.stringify({
      response_type: 'code',
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
      state,
    })
}
