const fs = require('fs')
const express = require('express')
const app = express()

app.get('/api/data', (_, res) => {
  fs.readFile('./static/file.json', 'utf8', (err, data) => {
    if (err) {
      console.log('File read failed:', err)
      res.status(500).send('Error reading file')
      return
    }
    try {
      const obj = JSON.parse(data)
      res.json(obj)
    } catch (err) {
      console.log('Error parsing JSON string:', err)
      res.status(500).send('Error parsing JSON')
    }
  })
})

module.exports = app
