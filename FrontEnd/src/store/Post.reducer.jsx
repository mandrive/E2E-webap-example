import * as ACTIONS from './../actionCreators/actions'

let initialState = {
  fetchingPostsInProgress: false,
  posts: [],
  currentPost: {},
  addingNewPostInProgress: false,
  updatingPostInProgress: false
};

export const PostsReducer = (state = initialState, action) => {
    if (action && action.type) {
        switch(action.type) {
            case ACTIONS.POSTS.FETCH_POSTS:
                return {
                    ...state,
                    fetchingPostsInProgress: true
                }
            case ACTIONS.POSTS.FETCH_POSTS_SUCCEDED:
                return {
                    ...state,
                    posts: [...action.posts],
                    fetchingPostsInProgress: false
                }
            case ACTIONS.POSTS.FETCH_POSTS_FAILED:
                return {
                    ...state,
                    fetchingPosts: false,
                    exception: Object.assign({}, action.error)
                }
            case ACTIONS.POSTS.ADD_NEW_POST_SUCCEDED:
                return {
                    currentPost: {},
                    addingNewPostInProgress: false,
                    ...state
                }
            case ACTIONS.POSTS.ADD_NEW_POST_FAILED:
                return {
                    ...state,
                    currentPost: {},
                    addingNewPostInProgress: false
                }
            case ACTIONS.POSTS.LOAD_SELECTED_POST_SUCCEDED:
                return {
                    ...state,
                    currentPost: Object.assign({}, action.post)
                }
            case ACTIONS.POSTS.UPDATE_POST_IN_PROGRESS:
                return {
                    ...state,
                    updatingPostInProgress: true
                }
            case ACTIONS.POSTS.UPDATE_POST_FAILED:
                return {
                    ...state,
                    currentPost: {},
                    updatingPostInProgress: false,
                    error: Object.assign({}, action.error)
                }
            case ACTIONS.POSTS.UPDATE_POST_SUCCEDED:
                return {
                    ...state,
                    currentPost: {},
                    updatingPostInProgress: false
                }
            case ACTIONS.POSTS.DELETE_POST_SUCCEDED:
                var removedIndex = state.posts.findIndex(p => { return p.id == action.id});
                return {
                    ...state,
                    posts: [
                        ...state.posts.slice(0, removedIndex),
                        ...state.posts.slice(removedIndex+1)
                        ]
                }
            
        }
    }

    return state;
};
