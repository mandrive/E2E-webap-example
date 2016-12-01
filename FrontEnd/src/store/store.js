import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { PersonsReducers } from './reducers/PersonsReducer';

const logger = createLogger();
const reducers = {
    routing: routerReducer,
    persons: PersonsReducers
};

const reducer = combineReducers(reducers);

function configureStore(initialState = {}) {
    const store = createStore(reducer, initialState, compose(
		applyMiddleware(ReduxThunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
	));

    return store;
}

export const store = configureStore();
