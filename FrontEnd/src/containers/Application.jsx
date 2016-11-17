import React from 'react';
import { connect } from 'react-redux';

class Application extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>Hello!</div>
                {this.props.children}
            </div>
        );
    }
}

export default connect()(Application);
