import React from 'react'
import { connect } from 'react-redux'
import { TestAction } from '../../../redux/actions/testAction'
import './index.scss'

const header = ({ testReducer, test }) => {
  return (
    <div className='header'>
      <span>BIBLE</span>
      <div
        className='header__menu'
        onClick={() => testReducer(Math.random() * 100)}
      >
        <span className='header__menu-startreading'>Start Reading </span>
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
