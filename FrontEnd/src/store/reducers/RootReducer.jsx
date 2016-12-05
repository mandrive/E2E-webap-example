import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { PersonsReducers } from './PersonsReducer';
import { PostsReducer } from './PostsReducer';


export const RootReducer = combineReducers({
    routing: routerReducer,
    posts: PostsReducer
});
