import React from 'react'
import { Route } from 'react-router-dom'
import Body from '@components/body'

const Routes = () => {
  return (
    <>
      <Route path='/' exact>
        <Body />
      </Route>
    </>
  )
}

export default Routes
