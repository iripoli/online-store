import {createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]
  if (process.env.NODE_ENV === 'development'){
    console.log(process.env.NODE_ENV)
    middlewares.push(logger)
  }


export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default {store, persistor}