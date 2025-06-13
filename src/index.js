import 'dotenv/config'

import express from 'express'
import { spotifyAuthRouter } from './auth/spotify/route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { spotifyRouter } from './features/spotify/route.js'

import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 3000

app.use(cors({ credentials: true }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")))

app.use('/api/auth/spotify', spotifyAuthRouter)
app.use('/api/spotify', spotifyRouter)

app.all("/*splat", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"))
})

app.listen(port, () => {
  console.log(`Music Taste app listening on port ${port}`)
})
