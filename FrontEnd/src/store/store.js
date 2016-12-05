import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { PersonsReducers } from './reducers/PersonsReducer';
import { PostsReducer } from './reducers/PostsReducer';

import { postsEpic } from './../api/epics/posts.epic';
import { combineEpics, createEpicMiddleware  } from 'redux-observable';

const logger = createLogger();

export const rootEpic = combineEpics(
  postsEpic
);
const epicMiddleware = createEpicMiddleware(rootEpic);

const reducers = {
    routing: routerReducer,
    persons: PersonsReducers,
    posts: PostsReducer
};
const reducer = combineReducers(reducers);

function configureStore(initialState = {}) {
    const store = createStore(reducer, initialState, compose(
		applyMiddleware(epicMiddleware, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
	));

    return store;
}

export const store = configureStore();
