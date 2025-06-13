import express from 'express'
import { getLoginUrl } from './handlers/get-login-url.js'
import { handleCallback } from './handlers/handle-callback.js'

export const spotifyAuthRouter = express.Router()

spotifyAuthRouter.get('/', getLoginUrl)
spotifyAuthRouter.get('/callback', handleCallback)
