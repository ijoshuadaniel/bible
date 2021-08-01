import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactServerDOM from 'react-dom/server'
import App from './../src/app.js'

const app = express()
app.use(express.static('./public'))

app.use('/', (req, res) => {
  const response = ReactServerDOM.renderToString(<App />)

  const HTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bible</title>
    <script defer src="vendors.js"></script><script defer src="main.js"></script></head>
    <body>
      <div id="root">${response}</div>
    </body>
  </html>`

  res.send(HTML)
})

app.listen(80)
