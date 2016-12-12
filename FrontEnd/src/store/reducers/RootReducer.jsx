import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { PostsReducer } from './PostsReducer';
import { reducer as formReducer } from 'redux-form';
import * as ACTIONS from './../../actionCreators/Actions';

export const RootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer.plugin({
        currentPost: (state, action) => {
            switch(action.type) {
                case ACTIONS.POSTS.ADD_NEW_POST_SUCCEDED:
                case ACTIONS.POSTS.UPDATE_POST_SUCCEDED:
                    return undefined;
                default:
                    return state;
            }
        }
    }),
    posts: PostsReducer
});
