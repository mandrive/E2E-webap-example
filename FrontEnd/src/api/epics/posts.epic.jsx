import * as Rx from 'rxjs';
import { ApiClient } from './../ApiClient';

const apiClient = new ApiClient('http://localhost:3001');

export const postsEpic = (action$, store) =>
                    action$.ofType('FETCH_POSTS')
                    .mergeMap(action =>
                      Rx.Observable.fromPromise(apiClient.endpoints.Posts.getAll())
                      .map(posts => ({type: 'FETCH_POSTS_SUCCEDED', posts: posts}))
                      .takeUntil(action$.ofType('FETCH_POSTS_CANCEL')));

export const addPostEpic = (action$, store) =>
                    action$.ofType('ADD_NEW_POST')
                    .mergeMap(action =>
                      Rx.Observable.fromPromise(apiClient.endpoints.Posts.create(action.post))
                      .map(id => ({
                        type: 'ADD_NEW_POST_SUCCEDED'
                      })).catch((ex) => Rx.Observable.of({
                        type: 'ADD_NEW_POST_FAILED'
                      })));