import React from 'react';
import { connect } from 'react-redux';
import * as ACTION_CREATORS from './../../actionCreators/ActionCreators'
import {Editor, EditorState, RichUtils} from 'draft-js';

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
    render() {
        return (
            <div>
                <div>
                    <BlockStyleControls onToggle={this.toggleBlockType} editorState={this.state.editorState} />
                    <InlineStyleControls onToggle={this.toggleInlineStyle} editorState={this.state.editorState} />
                </div>
                <div onClick={this.focus} className="post-editor-wrapper">
                    <Editor editorState={this.state.editorState} onChange={this.onChange} ref="editor"/>
                </div>
            </div>
        );
    }
}