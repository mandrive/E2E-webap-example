import React from 'react';
import { connect } from 'react-redux';

class Planner extends React.Component {
  render() {
    return(
      <div>
        <h2>#Planner</h2>
      </div>
    );
  }
}

export default connect()(Planner);
