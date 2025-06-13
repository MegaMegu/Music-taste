import { refreshAccessToken } from '../../../auth/spotify/services/refresh-access-token.js'

export async function tokenRefresh(req, res, next) {
  let accessToken = req.cookies.musictasteaccesstoken
  let refreshToken = req.cookies.musictasterefreshtoken

  if (!accessToken && !refreshToken) return res.send('ERROR: Missing tokens. Please login first.')
  if (!accessToken) {
    const data = await refreshAccessToken(refreshToken)

    res.cookie('musictasteaccesstoken', data.access_token, {
      httpOnly: true,
      maxAge: 3000 * 1000, // 50 mins
      secure: process.env.ENVIRONMENT_MODE === 'prod' ? true : false,
      sameSite: 'lax'
    })

    if (data.refresh_token)
      res.cookie('musictasterefreshtoken', data.refresh_token, {
        httpOnly: true,
        maxAge: 2592000 * 1000, // 30 days
        secure: process.env.ENVIRONMENT_MODE === 'prod' ? true : false,
        sameSite: 'lax'
      })
  }
  return next()
}
