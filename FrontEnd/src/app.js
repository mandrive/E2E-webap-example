/* Core imports */
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

/* App core redux imports */
import { store } from './store/store.js';

/* Containers and components imports */
import { Root } from './components/layout/Root';

/*scss loader*/
require('./styles/main.scss');

const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
  	     <Root store={ store } history={ history } />
    </AppContainer>,
  document.getElementById('content')
);

if (module.hot) module.hot.accept()
