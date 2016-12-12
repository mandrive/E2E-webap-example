import PostContainer from './PostContainer';
import React from 'react';
import { connect } from 'react-redux';
import * as ACTION_CREATORS from './../../actionCreators/ActionCreators';

@connect()
export default class PostsList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    editPostHandler(id) {
        this.props.dispatch(ACTION_CREATORS.POSTS.selectPostToEdit(id));  
    }

    deletePostHandler(id) {
        console.log('Delete post clicked');
    }

    render() {
        const { editPostHandler, deletePostHandler } = this;
        const posts = this.props.posts.map(post => {
            return(
                <PostContainer key={post.id} post={post} onEdit={editPostHandler.bind(this)} onDelete={deletePostHandler.bind(this)} />
            );
        });

        return (
            <div className="posts-list">
                {posts}
            </div>
        );
    }
}