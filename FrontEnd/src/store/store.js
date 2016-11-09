import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import { browserHistory } from 'react-router';

import { PersonsReducers } from './reducers/PersonsReducer';

const reducers = {
	routing: routerReducer,
	persons: PersonsReducers
}

const reducer = combineReducers(reducers);

function configureStore(initialState = {}) {
	debugger;
  const store = createStore(reducer, initialState, compose(
  	applyMiddleware(ReduxThunk)
  ));

  return store;
}

export const store = configureStore();
