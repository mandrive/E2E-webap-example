import * as Rx from 'rxjs';
import { ApiClient } from './../ApiClient';
import * as ACTION_CREATORS from './../../actionCreators/ActionCreators'

const apiClient = new ApiClient('http://localhost:3001');

export const postsEpic = (action$, store) =>
                    action$.ofType('FETCH_POSTS')
                    .mergeMap(action =>
                      Rx.Observable.fromPromise(apiClient.endpoints.posts.getAll())
                      .map(posts => ({type: 'FETCH_POSTS_SUCCEDED', posts: posts}))
                      .takeUntil(action$.ofType('FETCH_POSTS_CANCEL')));

export const addPostEpic = (action$, store) =>
                    action$.ofType('ADD_NEW_POST')
                    .mergeMap(action =>
                      Rx.Observable.fromPromise(apiClient.endpoints.posts.create(action.post))
                      .map(id => ({
                        type: 'ADD_NEW_POST_SUCCEDED'
                      })).catch((ex) => Rx.Observable.of({
                        type: 'ADD_NEW_POST_FAILED'
                      })));

export const selectPost = (action$, store) =>
                    action$.ofType('SELECT_POST_TO_EDIT')
                    .mergeMap(action => 
                      Rx.Observable.fromPromise(apiClient.endpoints.posts.getById(action.postId))
                      .map(ACTION_CREATORS.POSTS.fetchPostSucceded)
                      .catch((ex) => Rx.Observable.of({
                        type: 'SELECT_POST_TO_EDIT_FAILED'
                      })));