import React from 'react'
import Body from '@components/body'
import Header from '@components/header'
import Routes from './routes'
import { Switch } from 'react-router-dom'

const App = ({ auth }) => {
  console.log(auth)
  return (
    <div>
      <Header />
      <Routes />
    </div>
  )
}

export default App
