import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { PostsReducer } from './post.reducer';

export const RootReducer = combineReducers({
    routing: routerReducer,
    posts: PostsReducer
});
