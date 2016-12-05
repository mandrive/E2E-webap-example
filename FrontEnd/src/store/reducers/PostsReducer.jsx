let initialState = {
  fetchingPosts: false,
  posts: []
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
        }
    }

    return state;
};
