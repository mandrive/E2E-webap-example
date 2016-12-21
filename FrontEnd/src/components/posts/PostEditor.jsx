import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as ACTION_CREATORS from './../../actionCreators/ActionCreators'
import {Editor, EditorState, RichUtils} from 'draft-js';


const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

class StyleButton extends React.Component {
    constructor(props) {
        super(props);
    }
    onToggle(e) {
        e.preventDefault();
        this.props.onToggle(this.props.style);
    }
    render() {
        let classes = "btn btn-secondary";
        if(this.props.active) {
            classes += " used-style"
        }

        return (
            <span className={classes} onMouseDown={this.onToggle.bind(this)}>
                {this.props.text}
            </span>
        )
    }
}

class BlockStyleControls extends React.Component {
    toggleBlockStyle(styleName) {
        this.props.onToggle(styleName);
    }
    render() {
        const selection = this.props.editorState.getSelection();
        const blockType = this.props.editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        const toggleBlockStyle = this.toggleBlockStyle.bind(this);
        return (
            <div>
                {BLOCK_TYPES.map((type) => {
                    return(
                        <StyleButton onToggle={() => { toggleBlockStyle(type.style); }} key={type.label} text={type.label} style={type.style} active={type.style === blockType} />
                    )   
                })}
            </div>
        )
    }
}

@connect(state => ({ initialValues: state.posts.currentPost }))
@reduxForm({form: 'newPost'})
export default class PostEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.focus = () => this.refs.editor.focus();
    }
    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
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
        return (
            <div>
                <div>
                    <BlockStyleControls onToggle={this._toggleBlockType.bind(this)} editorState={this.state.editorState} />
                </div>
                <div onClick={this.focus} style={{minHeight: 300, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', padding: 5}}>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} ref="editor"/>
                </div>
            </div>
        );
    }
}