import React from 'react';

export default class PostActionBar extends React.Component {
    render() {
        return(
            <div className="row col-lg-12 text-lg-right">
                <button className="btn btn-primary" onClick={() => {this.props.onEdit(this.props.postId)}} title="Edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button className="btn btn-primary" style={{marginLeft: 20}} onClick={() => {this.props.onDelete(this.props.postId)}} title="Delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
                <hr />
            </div>
        );
    }
}

PostActionBar.propTypes = {
    postId: React.PropTypes.number.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
}
