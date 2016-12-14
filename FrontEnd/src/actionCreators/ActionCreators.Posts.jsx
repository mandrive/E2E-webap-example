import { ApiClient } from './../api/ApiClient';
import { push } from 'react-router-redux';
import * as ACTIONS from './Actions';


/* actions handled by epics */

const addNewPostEpicMessage = (post) => {
    return {
        type: ACTIONS.POSTS.ADD_NEW_POST_EPIC_MESSAGE,
        post: post
    }
}

const selectPostToEditEpicMessage = (id) => {
    return {
        type: ACTIONS.POSTS.SELECT_POST_TO_EDIT_EPIC_MESSAGE,
        id: id
    }
}

const updatePostEpicMessage = (post) => {
    return {
        type: ACTIONS.POSTS.UPDATE_POST_EPIC_MESSAGE,
        post: post
    }
} 

const deletePostEpicMessage = (id) => {
    return {
        type: ACTIONS.POSTS.DELETE_POST_EPIC_MESSAGE,
        id: id
    }
}

/* normal action creators */

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
        dispatch(addNewPostEpicMessage(post));
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
        dispatch(updatePostEpicMessage(post));
    }
}

export const updatePostInProgress = () => {
    return {
        type: ACTIONS.POSTS.UPDATE_POST_IN_PROGRESS
    }
}

export const updatePostSucceded = () => {
    return (dispatch) => {
        dispatch({type: ACTIONS.POSTS.UPDATE_POST_SUCCEDED})
        dispatch(push('/'));
    }
}

export const updatePostFailed = () => {
    return {
        type: ACTIONS.POSTS.UPDATE_POST_FAILED
    }
}

export const selectPostToEdit = (id) => {
    return (dispatch) => {
        dispatch(loadSelectedPostToEditInProgress());
        dispatch(selectPostToEditEpicMessage(id));
    }
}

export const loadSelectedPostToEditInProgress = () => {
    return {
        type: ACTIONS.POSTS.LOAD_SELECTED_POST_IN_PROGRESS
    }
}

export const deletePostFailed = () => {
    return {
        type: ACTIONS.POSTS.DELETE_POST_FAILED
    }
}

export const deletePostSucceded = (id) => {
    return {
        type: ACTIONS.POSTS.DELETE_POST_SUCCEDED,
        id: id
    }
}

export const deletePostInProgress = () => {
    return {
        type: ACTIONS.POSTS.DELETE_POST_IN_PROGRESS
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        dispatch(deletePostInProgress());
        dispatch(deletePostEpicMessage(id));
    }
}