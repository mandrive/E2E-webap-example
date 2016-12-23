import React from 'react';
import { connect } from 'react-redux';
import * as ACTION_CREATORS from './../../actionCreators/ActionCreators'
import {Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

import BlockStyleControls from './editor/blockStyleControls';
import InlineStyleControls from './editor/inlineStyleControls';

@connect()
export default class PostEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.focus = () => this.refs.editor.focus();
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
        this.savePost = this.savePost.bind(this);
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
        this.props.dispatch(ACTION_CREATORS.POSTS.addNewPost({content: htmlEditorContent}));
    }
    render() {
        return (
            <div>
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