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
    fetchAllPosts() {
      this.props.dispatch({type:'FETCH_POSTS'});
    }
    render() {
        var fetchAllPosts = this.fetchAllPosts.bind(this);

        return (
            <div className="magictime swashIn">
                <div>#Home component</div>
                <button type="button" onClick={fetchAllPosts}>FETCH POSTS</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    };
};

export default connect(mapStateToProps)(Home);
