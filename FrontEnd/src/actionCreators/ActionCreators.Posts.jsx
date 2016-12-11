import { ApiClient } from './../api/ApiClient';
import { push } from 'react-router-redux';

export const fetchPost = (id) => {
    return (dispatch) => {
        var apiClient = new ApiClient(window.__env.apiUrl);
        apiClient.endpoints.posts.getById(id)
        .then(post => {
            dispatch(fetchPostSucceded(post));
        }).catch((ex) => {
            dispatch(fetchPostFailed(ex));
        });
    }
}

export const fetchPostSucceded = (post) => {
    return (dispatch) => {

        dispatch({
            type: 'FETCH_POST_SUCCEDED',
            post: post
        });

        dispatch(push('/editor/' + post.id));
    }
}

export const fetchPostFailed = (ex) => {
    return {
        type: 'FETCH_POST_FAILED',
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
        type: 'ADD_NEW_POST_IN_PROGRESS'
    }
}

export const addNewPostSucceded = () => {
    return {
        type: 'ADD_NEW_POST_SUCCEDED'
    }
}

export const addNewPostFailed = () => {
    return {
        type: 'ADD_NEW_POST_FAILED'
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
        type: 'UPDATE_POST_IN_PROGRESS'
    }
}

export const updatePostSucceded = () => {
    return {
        type: 'UPDATE_POST_SUCCEDED'
    }
}

export const updatePostFailed = () => {
    return {
        type: 'UPDATE_POST_FAILED'
    }
}