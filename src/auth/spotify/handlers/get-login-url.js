import { generateState } from '../services/generate-state.js'
import { generateUrl } from '../services/generate-url.js'

export function getLoginUrl(_req, res) {
  const state = generateState()

  res.cookie('musictastespotifystate', state, {
    httpOnly: true,
    maxAge: 300 * 1000, // 5 mins
    secure: process.env.ENVIRONMENT_MODE === 'prod' ? true : false,
    sameSite: 'lax'
  })

  const url = generateUrl(state)
  return res.json({ data: url });
}
