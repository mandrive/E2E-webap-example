import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './containers/Application';
import { Home } from './containers/Home';
import { createStore } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Application}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('content')
);

//module.hot.accept();
