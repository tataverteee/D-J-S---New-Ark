import express from 'express'

const app = express()

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!', time: new Date().toISOString() })
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})