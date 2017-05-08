import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import mainReducer from '../pages/Main/reducks/main.reducer';
import homeReducer from '../pages/Home/reducks/home.reducer';

export const rootReducer = combineReducers({
  app: mainReducer,
  home: homeReducer
})
