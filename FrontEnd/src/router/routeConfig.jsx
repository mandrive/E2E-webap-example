import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './../containers/Application';
import Home from './../containers/Home';
import Editor from './../containers/Editor';
import { reset } from 'redux-form';

const resetForm = (store, dispatch) => {
  return (nextState, replace) => {
      dispatch(resetForm('newPost'));
  }
}

export const routeConfig = (
    <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
      <Route path="editor" component={Editor} onEnter={resetForm} />
      <Route path="editor/:id" component={Editor} />
    </Route>
)
