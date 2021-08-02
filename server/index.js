import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactServerDOM from 'react-dom/server'
import App from '@src/app.js'
import { Provider } from 'react-redux'
import { Store } from '@redux/store.js'

const app = express()
app.use(express.static('./public'))

app.use('/', (req, res) => {
  const response = fs.readFile(
    path.join(__dirname, 'public', 'index.html'),
    'utf8',
    (error, data) => {
      if (error) {
        console.log(error)
      } else {
        const renderedData = ReactServerDOM.renderToString(
          <Provider store={Store}>
            <App />
          </Provider>
        )
        const auth = {
          auth: 'sucess',
          token: 'testToken',
          data: 'hello',
        }
        res.send(
          data.replace(
            "<div id='root'></div>",
            `<div id='root'>${renderedData}</div><script>auth= ${auth}</script>`
          )
        )
      }
    }
  )
})

app.listen(80)
