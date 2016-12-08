import { compose, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware  } from 'redux-observable';
import createLogger from 'redux-logger';

import { postsEpic, addPostEpic } from './../api/epics/posts.epic';
import { RootReducer } from './reducers/RootReducer';

const logger = createLogger();

export const rootEpic = combineEpics(
  postsEpic,
  addPostEpic
);
const epicMiddleware = createEpicMiddleware(rootEpic);

function configureStore(initialState = {}) {
    const store = createStore(
                    RootReducer,
                    initialState,
                    compose(
		                    applyMiddleware(epicMiddleware, logger),
                        window.devToolsExtension ? window.devToolsExtension() : f => f
	                ));

    return store;
}

export const store = configureStore();
