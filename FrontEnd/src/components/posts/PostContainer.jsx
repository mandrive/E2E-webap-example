import React from 'react';
import PostActionBar from './postActionBar';

export default class PostContainer extends React.Component {
    render() {
        console.log(this.props.post);
        const { title, content, id } = this.props.post;
        return(
            <div className="post-container">
                <PostActionBar postId={id} onEdit={this.props.onEdit} onDelete={this.props.onDelete} />
                <div>
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{__html: content}}></p>
                </div>
            </div>
        );
    }
}

PostContainer.propTypes = { 
    post: React.PropTypes.object.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
}