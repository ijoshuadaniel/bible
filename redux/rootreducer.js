import { combineReducers } from 'redux'
import { testReducer } from './reducers/testReducer'

export const RootReducer = combineReducers({ test: testReducer })