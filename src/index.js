import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './app'
import './index.scss'

let renderMethod
if (root && root.innerHTML !== '') {
  renderMethod = hydrate
} else {
  renderMethod = render
}

renderMethod(<App />, document.getElementById('root'))
