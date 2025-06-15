import Cookies from "js-cookie"

export async function getAccessToken(code) {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

  const codeVerifier = Cookies.get("music_taste_spotify_code_verifier")
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  }

  try {
    const body = await fetch(url, payload);
    const response = await body.json();

    if (!response.access_token)
      return { success: false, message: "Error getting tokens." }

    // 1 hour expiry ng token, dagdag langs 10 mins allowance
    const in50Minutes = new Date(new Date().getTime() + 50 * 60 * 1000);
    Cookies.set('music_taste_spotify_access_token', response.access_token, {
      expires: in50Minutes,
      secure: false,
      sameSite: "lax",
    })

    return { success: true }
  } catch (e) {
    console.log(e)
    return { success: false, message: "Error getting tokens." }
  }
}
