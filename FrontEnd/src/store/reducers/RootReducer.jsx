import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { PostsReducer } from './PostsReducer';
import { reducer as formReducer } from 'redux-form';


export const RootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer.plugin({
        currentPost: (state, action) => {
            switch(action.type) {
                case 'ADD_NEW_POST_SUCCEDED':
                return undefined;
                default:
                return state;
            }
        }
    }),
    posts: PostsReducer
});
