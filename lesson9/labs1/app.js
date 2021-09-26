'use strict'
const express = require('express')
const app = express()
const router = express.Router()
const { PORT = 3000 } = process.env

router.get('/', (req, res) => {
    const {un} = req.query;
    if (Array.isArray(un)) return res.send(400).end();
  setTimeout(() => {
    res.send((req.query.un || '').toUpperCase())
  }, 1000)
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})
