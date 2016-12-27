import React from 'react';
import { connect } from 'react-redux';
import PostContainer from './postContainer';
import * as ACTION_CREATORS from './../../actionCreators/actionCreators';

@connect()
export default class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.editPostHandler = this.editPostHandler.bind(this);
        this.deletePostHandler = this.deletePostHandler.bind(this);
    }
    
    editPostHandler(id) {
        this.props.dispatch(ACTION_CREATORS.POSTS.selectPostToEdit(id));  
    }

    deletePostHandler(id) {
        this.props.dispatch(ACTION_CREATORS.POSTS.deletePost(id));
    }

    render() {
        const posts = this.props.posts.map(post => {
            return(
                <PostContainer key={post.id} post={post} onEdit={this.editPostHandler} onDelete={this.deletePostHandler} />
            );
        });

        return (
            <div className="posts-list">
                {posts}
            </div>
        );
    }
}