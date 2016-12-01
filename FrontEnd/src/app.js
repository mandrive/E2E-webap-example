/* Core imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

/* App core redux imports */
import { store } from './store/store.js';

/* Containers and components imports */
import Application from './containers/Application';
import Home from './containers/Home';
import { Root } from './containers/Root';

const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
  	     <Root store={ store } history={ history } />
    </AppContainer>,
  document.getElementById('content')
);

if (module.hot) module.hot.accept()
