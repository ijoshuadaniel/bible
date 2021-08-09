import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import { Store } from '@redux/store'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'

let renderMethod
if (root && root.innerHTML !== '') {
  renderMethod = hydrate
} else {
  renderMethod = render
}

render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
