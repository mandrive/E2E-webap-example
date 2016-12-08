import React from 'react';
import { connect } from 'react-redux';

import * as ACTION_CREATORS from './../actionCreators/ActionCreators';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    fetchAllPosts() {
      this.props.dispatch({type:'FETCH_POSTS'});
    }
    render() {
        var fetchAllPosts = this.fetchAllPosts.bind(this);
        var postsList = this.props.posts.map(post => {
            return(
                <div key={post.id}>
                    <span>Id: {post.id}</span><br/>
                    <span>Title: {post.title}</span><br/>
                    <span>Content: {post.content}</span>
                </div>
            )
        });

        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={fetchAllPosts}>FETCH POSTS</button>
                <div>
                    {postsList}
                </div>
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
