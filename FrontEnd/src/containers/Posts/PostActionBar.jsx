import React from 'react';

export default class PostActionBar extends React.Component {
    render() {
        return(
            <div className="row col-lg-12 text-lg-right">
                <button className="btn btn-primary" onClick={this.props.onEdit} title="Edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button className="btn btn-primary" style={{marginLeft: 20}} onClick={this.props.onDelete} title="Delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
                <hr />
            </div>
        );
    }
}
