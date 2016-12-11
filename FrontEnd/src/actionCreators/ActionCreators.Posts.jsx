import { ApiClient } from './../api/ApiClient';
import { push } from 'react-router-redux';
import * as ACTIONS from './Actions';

export const fetchAllPostsSucceded = (posts) => {
    return {
        type: ACTIONS.POSTS.FETCH_POSTS_SUCCEDED,
        posts: posts
    }
}

export const fetchAllPostsFailed = (ex) => {
    return {
        type: ACTIONS.POSTS.FETCH_POSTS_FAILED,
        error: ex
    }
}

export const loadSelectedPostSucceded = (post) => {
    return (dispatch) => {

        dispatch({
            type: ACTIONS.POSTS.LOAD_SELECTED_POST_SUCCEDED,
            post: post
        });

        dispatch(push('/editor/' + post.id));
    }
}

export const loadSelectedPostFailed = (ex) => {
    return {
        type: ACTIONS.POSTS.LOAD_SELECTED_POST_FAILED,
        error: ex
    }
}

export const addNewPost = (post) => {
    return (dispatch) => {
        dispatch(addNewPostInProgress());
    }
}

export const addNewPostInProgress = () => {
    return {
        type: ACTIONS.POSTS.ADD_NEW_POST_IN_PROGRESS
    }
}

export const addNewPostSucceded = (id) => {
    return (dispatch) => {
        dispatch({type: ACTIONS.POSTS.ADD_NEW_POST_SUCCEDED});
        dispatch(push('/'));
    }
}

export const addNewPostFailed = (ex) => {
    return {
        type: ACTIONS.POSTS.ADD_NEW_POST_FAILED,
        error: ex
    }
}

export const updatePost = (post) => {
    return (dispatch) => {
        dispatch(updatePostInProgress());
        var apiClient = new ApiClient(window.__env.apiUrl);
        apiClient.endpoints.posts.update(post)
        .then(() => {
            dispatch(updatePostSucceded());
            dispatch(push('/'));
        })
        .catch(() => {
            dispatch(updatePostFailed());
        })
    }
}

export const updatePostInProgress = () => {
    return {
        type: ACTIONS.POSTS.UPDATE_POST_IN_PROGRESS
    }
}

export const updatePostSucceded = () => {
    return {
        type: ACTIONS.POSTS.UPDATE_POST_SUCCEDED
    }
}

export const updatePostFailed = () => {
    return {
        type: ACTIONS.POSTS.UPDATE_POST_FAILED
    }
}