import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './store'
import rootSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  // compose(
  // applyMiddleware(middleware),
  // )
);

// Run the sagas
sagaMiddleware.run(rootSagas)

export default store;