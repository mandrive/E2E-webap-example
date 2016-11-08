import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import { browserHistory } from 'react-router'

const reducers = {
	routing: routerReducer
}

const reducer = combineReducers(reducers);

function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(
  	applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}

export const store = configureStore();
