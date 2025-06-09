import { generateCodeVerifier } from './generateCodeVerifier.js'
import { getCodeChallenge } from './getCodeChallenge.js'

export async function handleButtonClick() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUri = 'http://127.0.0.1:5173/Spotify';
  const scope = 'user-top-read';
  const authUrl = new URL("https://accounts.spotify.com/authorize")

  const codeVerifier = generateCodeVerifier()
  console.log(codeVerifier)
  window.localStorage.setItem('code_verifier', codeVerifier);

  const codeChallenge = await getCodeChallenge(codeVerifier)

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

