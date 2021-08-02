import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { RootReducer } from './rootreducer'
const middleware = [logger]
export const Store = createStore(RootReducer, applyMiddleware(...middleware))
