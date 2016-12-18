import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as ACTION_CREATORS from './../../actionCreators/ActionCreators'
import {Editor, EditorState, RichUtils} from 'draft-js';

@connect(state => ({ initialValues: state.posts.currentPost }))
@reduxForm({form: 'newPost'})
export default class PostEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }
    submitForm(data) {
        if (data.id) {
            this.props.dispatch(ACTION_CREATORS.POSTS.updatePost(data));
        } else {
            this.props.dispatch(ACTION_CREATORS.POSTS.addNewPost(data));
        } 
    }
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    render() {
        {/*const { props: { handleSubmit }, submitForm } = this;*/}

        return (
            <div>
                <div>
                    <button onClick={this._onBoldClick.bind(this)}>BOLD</button>
                </div>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />
            </div>
            /*<div>
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
            </div>*/
        );
    }
}
