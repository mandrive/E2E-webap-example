import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './../containers/Application';
import Home from './../containers/Home';

export const routeConfig = (
    <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
    </Route>
)
