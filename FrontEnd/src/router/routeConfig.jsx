import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './../components/layout/Application';
import Home from './../components/layout/Home';
import PostEditor from './../components/posts/PostEditor';
import { reset } from 'redux-form';

const resetForm = (store, dispatch) => {
  return (nextState, replace) => {
      dispatch(resetForm('newPost'));
  }
}

export const routeConfig = (
    <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
      <Route path="editor" component={PostEditor} onEnter={resetForm} />
      <Route path="editor/:id" component={PostEditor} />
    </Route>
)
