import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './../containers/Application';
import Home from './../containers/Home';
import Editor from './../containers/Editor';

export const routeConfig = (
    <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
      <Route path="editor" component={Editor} />
    </Route>
)
