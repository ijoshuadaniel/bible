import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactServerDOM from 'react-dom/server'
import App from '@src/app.js'
import { Provider } from 'react-redux'
import { Store } from '@redux/store.js'
import { StaticRouter } from 'react-router-dom'

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
  fs.readFile(
    path.join(__dirname, 'public', 'index.html'),
    'utf8',
    (error, data) => {
      if (error) {
        console.log(error)
      } else {
        const auth = {
          auth: 'sucess',
          token: 'testToken',
          data: 'hello',
        }
        const renderedData = ReactServerDOM.renderToString(
          <Provider store={Store}>
            <StaticRouter context={{}} location={req.url}>
              {App({ auth: auth })}
            </StaticRouter>
          </Provider>
        )

        res.send(getHtml(auth, renderedData, data))
      }
    }
  )
})

app.listen(80)
