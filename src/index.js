import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import { Store } from '@redux/store'
import './index.scss'

let renderMethod
if (root && root.innerHTML !== '') {
  renderMethod = hydrate
} else {
  renderMethod = render
}

renderMethod(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
