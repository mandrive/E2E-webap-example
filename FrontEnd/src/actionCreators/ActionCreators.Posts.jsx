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

    }
}

export const addNewPostInProgress = () => {
    return {
        type: 'ADD_NEW_POST_IN_PROGRESS'
    }
}

export const addNewPostSucceded = () => {
    
}