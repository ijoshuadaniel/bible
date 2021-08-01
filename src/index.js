import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './app'

let renderMethod
if (root && root.innerHTML !== '') {
  renderMethod = hydrate
} else {
  renderMethod = render
}

renderMethod(<App />, document.getElementById('root'))
