import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './../components/layout/application';
import Home from './../components/layout/home';
import PostEditor from './../components/posts/postEditor';

export const routeConfig = (
    <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
      <Route path="editor" component={PostEditor} />
      <Route path="editor/:id" component={PostEditor} />
    </Route>
)
