import React from 'react';
import { connect } from 'react-redux';

import * as ACTION_CREATORS from './../actionCreators/ActionCreators';
import PostsList from './Posts/PostsList';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    fetchAllPosts() {
      this.props.dispatch({type:'FETCH_POSTS'});
    }
    render() {
        var fetchAllPosts = this.fetchAllPosts.bind(this);
        var currentPostDetails = this.props.currentPost.id ? (<span>{this.props.currentPost.id}</span>) : (<span>No current post selected</span>);

        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={fetchAllPosts}>FETCH POSTS</button>
                <br/>
                {currentPostDetails}
                <br/>
                <div>
                    <PostsList posts={this.props.posts} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        currentPost: state.posts.currentPost
    };
};

export default connect(mapStateToProps)(Home);
