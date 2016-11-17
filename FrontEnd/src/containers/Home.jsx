import React from 'react';
import { connect } from 'react-redux';

import * as ACTION_CREATORS from './../actionCreators/ActionCreators';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    fetchAllPersons() {
        this.props.dispatch(ACTION_CREATORS.PERSONS.fetchAllPersons());
    }
    render() {
        var fetchAllPersons = this.fetchAllPersons.bind(this);
        var allFetchedPersons  = this.props.persons.map((person) => {
            return (<span key={person.id}>{person.forename}</span>);
        });

        return (
            <div>
                <div>Hello from home!</div>
                <button type="button" onClick={fetchAllPersons}>FETCH</button>
                <div>
                    <span>Fetched persons:</span>
                    {allFetchedPersons}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons.persons
    };
};

export default connect(mapStateToProps)(Home);
