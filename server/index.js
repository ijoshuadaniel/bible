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

const getHtml = (auth, renderData, data) => {
  let html = data
  html = html.replace("<div id='auth'></div>", `<div id='auth'>${auth}</div>`)
  html = html.replace(
    "<div id='root'></div>",
    `<div id='root'>${renderData}</div>`
  )
  return html
}

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
        res.send(getHtml(auth, renderedData, data))
      }
    }
  )
})

app.listen(80)
