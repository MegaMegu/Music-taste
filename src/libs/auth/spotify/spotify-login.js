import Cookies from "js-cookie"
import { getCodeVerifier } from "./get-code-verifier"
import { getCodeChallenge } from "./get-code-challenge"

export async function spotifyLogin() {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

  const codeVerifier = getCodeVerifier()
  const in5Minutes = new Date(new Date().getTime() + 5 * 60 * 1000);

  Cookies.set('music_taste_spotify_code_verifier', codeVerifier, {
    expires: in5Minutes,
    secure: false,
    sameSite: "lax",
  })

  const codeChallenge = await getCodeChallenge(codeVerifier)

  const scope = 'user-read-email user-top-read';
  const authUrl = new URL("https://accounts.spotify.com/authorize")

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
