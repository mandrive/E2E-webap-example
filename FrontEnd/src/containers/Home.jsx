import React from 'react';
import { connect } from 'react-redux';

import * as ACTION_CREATORS from './../actionCreators/ActionCreators';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  fetchAllPersons() {
    console.log('fetch all persons btn click!');
    this.props.dispatch(ACTION_CREATORS.PERSONS.fetchAllPersons());
  }
  render() {
    var fetchAllPersons = this.fetchAllPersons.bind(this);
    return (
      <div>
        <div>Hello from home!</div>
        <button type="button" onClick={fetchAllPersons}>FETCH</button>
      </div>
    );
  }
}

export default connect()(Home);
