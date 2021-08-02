import React from 'react'
import { connect } from 'react-redux'
import { TestAction } from '@redux/actions/testAction'
import { startReading, bible } from '@content'
import Button from '@u-comp/button'

import './index.scss'

const header = ({ testReducer, test }) => {
  return (
    <div className='header'>
      <span className='header_logo'>{bible}</span>
      <div
        className='header__menu'
        onClick={() => testReducer(Math.random() * 100)}
      >
        <Button title={startReading} />
      </div>
    </div>
  )
}

const mapStateToDispatch = (dispatch) => ({
  testReducer: (data) => dispatch(TestAction(data)),
})

const mapStateToProps = (state) => ({
  test: state.test.message,
})

export default connect(mapStateToProps, mapStateToDispatch)(header)
