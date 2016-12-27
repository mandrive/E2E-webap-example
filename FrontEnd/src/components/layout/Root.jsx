import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routeConfig } from './../../router/routeConfig';

export class Root extends React.Component {
    render() {
        const { store, history } = this.props;
        if (!this.routeConfig) this.routeConfig = routeConfig;

        return(
            <Provider store={store}>
                <Router history={history} routes={routeConfig} />
            </Provider>
        );
    }
}
