import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/catch';
import { ApiClient } from './apiClient';
import * as ACTION_CREATORS from './../actionCreators/actionCreators';
import * as ACTIONS from './../actionCreators/actions';

debugger;

const apiClient = new ApiClient(window.__env.apiUrl);

export const fetchAllPostsEpic = (action$, store) =>
                    action$.ofType(ACTIONS.POSTS.FETCH_POSTS)
                    .mergeMap(action =>
                      Observable.fromPromise(apiClient.endpoints.posts.getAll())
                      .map(ACTION_CREATORS.POSTS.fetchAllPostsSucceded)
                      .takeUntil(action$.ofType(ACTIONS.POSTS.FETCH_POSTS_CANCEL)));

export const addNewPostEpic = (action$, store) =>
                    action$.ofType(ACTIONS.POSTS.ADD_NEW_POST_EPIC_MESSAGE)
                    .mergeMap(action =>
                      Observable.fromPromise(apiClient.endpoints.posts.create(action.post))
                      .map(ACTION_CREATORS.POSTS.addNewPostSucceded)
                      .catch(ACTION_CREATORS.POSTS.addNewPostFailed));

export const selectPostToEditEpic = (action$, store) =>
                    action$.ofType(ACTIONS.POSTS.SELECT_POST_TO_EDIT_EPIC_MESSAGE)
                    .mergeMap(action => 
                      Observable.fromPromise(apiClient.endpoints.posts.getById(action.id))
                      .map(ACTION_CREATORS.POSTS.loadSelectedPostSucceded)
                      .catch(ACTION_CREATORS.POSTS.loadSelectedPostFailed));
                      
export const updatePostEpic = (action$, store) => 
                    action$.ofType(ACTIONS.POSTS.UPDATE_POST_EPIC_MESSAGE)
                    .mergeMap(action => 
                      Observable.fromPromise(apiClient.endpoints.posts.update(action.post))
                      .map(ACTION_CREATORS.POSTS.updatePostSucceded)
                      .catch(ACTION_CREATORS.POSTS.updatePostFailed));

export const deletePostEpic = (action$, store) => 
                    action$.ofType(ACTIONS.POSTS.DELETE_POST_EPIC_MESSAGE)
                    .mergeMap(action => 
                      Observable.fromPromise(apiClient.endpoints.posts.delete(action.id))
                      .map(ACTION_CREATORS.POSTS.deletePostSucceded)
                      .catch(ACTION_CREATORS.POSTS.deletePostFailed));