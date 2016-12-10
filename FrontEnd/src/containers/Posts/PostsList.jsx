import PostContainer from './PostContainer';
import React from 'react';

export default class PostsList extends React.Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
    }
    
    editPostHandler(id) {
        console.log('Edit post clicked');
        this.router.push('/editor/' + id);
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
            <div className="posts-list container">
                {posts}
            </div>
        );
    }
}

PostsList.contextTypes = {
	router: React.PropTypes.object.isRequired
};
