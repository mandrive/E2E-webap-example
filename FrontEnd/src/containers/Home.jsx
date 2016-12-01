import React from 'react';
import { connect } from 'react-redux';

import * as ACTION_CREATORS from './../actionCreators/ActionCreators';

class PersonsList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.children}
            </ul>
        )
    }
}

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
            return (<li key={person.id}>{person.forename}</li>);
        });

        return (
            <div className="magictime swashIn">
                <div>#Home component</div>
                <button type="button" onClick={fetchAllPersons}>FETCH</button>
                <div>
                    <span>Fetched persons:</span>
                    <PersonsList>
                        {allFetchedPersons}
                    </PersonsList>
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
