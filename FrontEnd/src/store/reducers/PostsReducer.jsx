let initialState = {
  fetchingPosts: false,
  posts: [],
  newPost: {},
  addingNewPostInProgress: false
};

export const PostsReducer = (state = initialState, action) => {
    if (action && action.type) {
        switch(action.type) {
            case 'FETCH_POSTS':
                return {
                    ...state,
                    fetchingPosts: true
                };
            case 'FETCH_POSTS_SUCCEDED':
                return {
                    ...state,
                    posts: action.posts,
                    fetchingPosts: false
                };
            case 'FETCH_POSTS_FAILED':
                return {
                    ...state,
                    fetchingPosts: false,
                    exception: 'exception!'
                };
            case 'ADD_NEW_POST':
                return {
                    newPost: {
                        title: action.post.title,
                        content: action.post.content
                    },
                    addingNewPostInProgress: true,
                    ...state
                };
            case 'ADD_NEW_POST_SUCCEDED':
                return {
                    newPost: {},
                    addingNewPostInProgress: false,
                    ...state
                };
            case 'ADD_NEW_POST_FAILED':
                return {
                    ...state,
                    addingNewPostInProgress: false
                }
        }
    }

    return state;
};
