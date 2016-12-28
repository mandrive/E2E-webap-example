import React from 'react';
import { connect } from 'react-redux';
import * as ACTION_CREATORS from './../../actionCreators/actionCreators'
import {Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import BlockStyleControls from './editor/blockStyleControls';
import InlineStyleControls from './editor/inlineStyleControls';
import isEmpty from 'lodash/isEmpty';

@connect((state, ownProps) => ({
        postIdFromRoute: ownProps.params.id,
        loadedPost: state.posts.currentPost
}))
export default class PostEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty(), title: ''};
        this.onChange = (editorState) => this.setState({editorState});
        this.focus = () => this.refs.editor.focus();
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
        this.savePost = this.savePost.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }
    toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }
    toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }
    savePost() {
        var htmlEditorContent = stateToHTML(this.state.editorState.getCurrentContent());
        var post = {content: htmlEditorContent, title: this.refs.title.value};
        if (this.props.postIdFromRoute) {
            this.props.dispatch(ACTION_CREATORS.POSTS.updatePost(Object.assign({id: this.props.postIdFromRoute}, post)));
        } else {
            this.props.dispatch(ACTION_CREATORS.POSTS.addNewPost(post));
        }
    }
    onTitleChange() {
        this.setState({
            title: this.refs.title.value
        })
    }
    componentWillMount() {
        if(this.props.loadedPost && !isEmpty(this.props.loadedPost) && this.props.postIdFromRoute) {
            this.setState({
                title: this.props.loadedPost.title,
                editorState: EditorState.createWithContent(stateFromHTML(this.props.loadedPost.content))
            })
        }
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref="title" onChange={this.onTitleChange} value={this.state.title} className="form-control"></input>
                </div>
                <div>
                    <BlockStyleControls onToggle={this.toggleBlockType} editorState={this.state.editorState} />
                    <InlineStyleControls onToggle={this.toggleInlineStyle} editorState={this.state.editorState} />
                </div>
                <div>
                    <button onClick={this.savePost} className="btn btn-primary btn-save-full">SAVE</button>
                </div>
                <div onClick={this.focus} className="post-editor-wrapper">
                    <Editor editorState={this.state.editorState} onChange={this.onChange} ref="editor"/>
                </div>
            </div>
        );
    }
}