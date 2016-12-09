import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class Editor extends React.Component{
    constructor(props) {
        super(props);
    }
    submitForm(data) {
        this.props.dispatch({
            type: 'ADD_NEW_POST',
            post: {
                title: data.title,
                content: data.content
            }
        });
    }
    render() {
        const { props: { handleSubmit }, submitForm } = this;

        return (
            <div>
                <form onSubmit={handleSubmit(submitForm.bind(this))}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <Field name="title" component="input" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <Field name="content" component="textarea" type="textarea" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(state => ({
    initialValues: state.posts.currentPost
}))(reduxForm({
    form: 'newPost'
})(Editor));
