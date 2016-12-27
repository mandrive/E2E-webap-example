import React from 'react';
import { connect } from 'react-redux';
import Navbar from './../navigation/navbar';

@connect()
export default class Application extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
