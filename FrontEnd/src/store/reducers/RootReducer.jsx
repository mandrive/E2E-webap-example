import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { PersonsReducers } from './PersonsReducer';
import { PostsReducer } from './PostsReducer';
import { reducer as formReducer } from 'redux-form';


export const RootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    posts: PostsReducer
});
