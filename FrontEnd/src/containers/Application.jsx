import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Application extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar />
              <div className="row">
                <h1>#HELLO</h1>
              </div>
                {this.props.children}
            </div>
        );
    }
}

export default connect()(Application);
