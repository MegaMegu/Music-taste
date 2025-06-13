import { getTokensUsingCode } from '../services/get-tokens-using-code.js'

export async function handleCallback(req, res) {
  const browserState = req.cookies.musictastespotifystate
  const { code, state: loginState, error } = req.query

  if (!browserState) return res.send('Error: Missing state cookie. Please login again.')
  if (browserState !== loginState) return res.send('Error: State mismatch. Please login again.')
  if (error) return res.send(`Error: ${error}. Please login again.`)
  if (!code) return res.send('Error: Missing code. Please login again.')

  const data = await getTokensUsingCode(code)
  if (data.error) return res.send(`Error: ${data.error_description}. Please login again.`)

  return res
    .cookie('musictasteaccesstoken', data.access_token, {
      httpOnly: true,
      maxAge: 3000 * 1000, // 50 mins
      secure: process.env.ENVIRONMENT_MODE === 'prod' ? true : false,
      sameSite: 'lax'
    })
    .cookie('musictasterefreshtoken', data.refresh_token, {
      httpOnly: true,
      maxAge: 2592000 * 1000, // 30 days
      secure: process.env.ENVIRONMENT_MODE === 'prod' ? true : false,
      sameSite: 'lax'
    })
    .redirect('/spotify')
}
