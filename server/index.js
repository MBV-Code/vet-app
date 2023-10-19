import express from 'express'
import cors from 'cors'
import { getAllItems } from './db/index.js'

const app = express()
const PORT = 5555

// middlewares
app.use(express.json())
app.use(cors())

// Endpoint to get all clients
app.get('/api/clients', (req, res) => {
  const clients = getAllItems()

  res.status(200).json(clients)
})

// Endpoint to get all professionals
app.get('/api/professionals', (req, res) => {
  const professionals = getAllItems('professionals')

  res.status(200).json(professionals)
})

app.listen(PORT, () => {
  console.log(`API server is running at http://localhost:${PORT}`)
})
