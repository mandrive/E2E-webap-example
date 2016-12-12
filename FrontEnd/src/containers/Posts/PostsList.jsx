import PostContainer from './PostContainer';
import React from 'react';
import { connect } from 'react-redux';

@connect()
export default class PostsList extends React.Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
    }
    
    editPostHandler(id) {
        this.props.dispatch({
                type: 'SELECT_POST_TO_EDIT',
                postId: id
            });  
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