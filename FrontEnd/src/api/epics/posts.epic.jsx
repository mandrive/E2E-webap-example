import * as Rx from 'rxjs';
import { ApiClient } from './../ApiClient';
import * as ACTION_CREATORS from './../../actionCreators/ActionCreators';
import * as ACTIONS from './../../actionCreators/Actions';

const apiClient = new ApiClient(window.__env.apiUrl);

export const fetchAllPostsEpic = (action$, store) =>
                    action$.ofType(ACTIONS.POSTS.FETCH_POSTS)
                    .mergeMap(action =>
                      Rx.Observable.fromPromise(apiClient.endpoints.posts.getAll())
                      .map(ACTION_CREATORS.POSTS.fetchAllPostsSucceded)
                      .takeUntil(action$.ofType(ACTIONS.POSTS.FETCH_POSTS_CANCEL)));

export const addNewPostEpic = (action$, store) =>
                    action$.ofType(ACTIONS.POSTS.ADD_NEW_POST)
                    .mergeMap(action =>
                      Rx.Observable.fromPromise(apiClient.endpoints.posts.create(action.post))
                      .map(ACTION_CREATORS.POSTS.addNewPostSucceded)
                      .catch(ACTION_CREATORS.POSTS.addNewPostFailed));

export const selectPostToEditEpic = (action$, store) =>
                    action$.ofType(ACTIONS.POSTS.SELECT_POST_TO_EDIT)
                    .mergeMap(action => 
                      Rx.Observable.fromPromise(apiClient.endpoints.posts.getById(action.postId))
                      .map(ACTION_CREATORS.POSTS.loadSelectedPostSucceded)
                      .catch(ACTION_CREATORS.POSTS.loadSelectedPostFailed));