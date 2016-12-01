import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './../containers/Application';
import Home from './../containers/Home';
import Planner from './../containers/Planner';

export const routeConfig = (
    <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
      <Route path="planner" component={Planner} />
    </Route>
)
