import * as Rx from 'rxjs';
import { ApiClient } from './../ApiClient';

const apiClient = new ApiClient('http://localhost:3001');

export const postsEpic = (action$, store) =>
                    action$.ofType('FETCH_POSTS')
                    .mergeMap(action =>
                      Rx.Observable.fromPromise(apiClient.fetchPosts())
                      .map(posts => ({type: 'FETCH_POSTS_SUCCEDED', posts: posts}))
                      .takeUntil(action$.ofType('FETCH_POSTS_CANCEL')));
