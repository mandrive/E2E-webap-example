import React from 'react';
import PostActionBar from './PostActionBar';

export default class PostContainer extends React.Component {
    render() {
        const { title, content } = this.props.post;
        return(
            <div className="post-container row col-lg-12">
                <PostActionBar onEdit={this.props.onEdit} onDelete={this.props.onDelete} />
                <div className="row">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        );
    }
}