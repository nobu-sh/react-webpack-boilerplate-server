import express from 'express'
import http from 'http'
import cors from 'cors'
import path from 'path'

const app = express()
const server = http.createServer(app)

const PORT = Number(process.env.PORT) || 6970

app.use(cors())
app.use(express.json())


import API from './routes'
app.use('/api', API)

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.resolve(process.cwd(), "client", "dist")))
  app.all('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "client", "dist", 'index.html'))
  })
}

server.listen(PORT, () => console.log("Server Listening On Port", PORT))
