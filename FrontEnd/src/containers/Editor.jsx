import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
const  { DOM: { input, select, textarea } } = React

class Editor extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <Field name="title" component="input" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postContent">Content</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-default">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(reduxForm({
    form: 'newPost'
})(Editor));
