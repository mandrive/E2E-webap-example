import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';

import { PersonsReducers } from './reducers/PersonsReducer';

const logger = createLogger();
const rootEpic = action$ =>
  action$.filter(action => action.type === 'PING')
    .mapTo({ type: 'PONG' });

const epicMiddleware = createEpicMiddleware(rootEpic);

const reducers = {
    routing: routerReducer,
    persons: PersonsReducers
};

const reducer = combineReducers(reducers);

function configureStore(initialState = {}) {
    const store = createStore(reducer, initialState, compose(
		applyMiddleware(ReduxThunk, epicMiddleware, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
	));

    return store;
}

export const store = configureStore();

if (module.hot) {
  module.hot.accept([], () => {
    const rootEpic = rootEpic;
    epicMiddleware.replaceEpic(rootEpic);
  });
}
