import express from 'express'
import { tokenRefresh } from './middlewares/token-refresh.js'
import { getTopArtists } from './handlers/get-top-artists.js'

export const spotifyRouter = express.Router()

spotifyRouter.get('/', tokenRefresh, getTopArtists)
