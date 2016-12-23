import React from 'react';
import StyleButton from './styleButton';

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

export default class BlockStyleControls extends React.Component {
    constructor(props) {
        super(props);
        this.toggleBlockStyle = this.toggleBlockStyle.bind(this);
    }
    toggleBlockStyle(styleName) {
        this.props.onToggle(styleName);
    }
    render() {
        const selection = this.props.editorState.getSelection();
        const blockType = this.props.editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        return (
            <div className="block-style-buttons-wrapper">
                {BLOCK_TYPES.map((type) => {
                    return(
                        <StyleButton
                        onToggle={() => { this.toggleBlockStyle(type.style); }}
                        key={type.label}
                        text={type.label}
                        style={type.style}
                        active={type.style === blockType} />
                    )   
                })}
            </div>
        )
    }
}

BlockStyleControls.propTypes = {
    onToggle: React.PropTypes.func.isRequired,
    editorState: React.PropTypes.object.isRequired
}