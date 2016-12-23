import React from 'react';
import StyleButton from './styleButton';

const INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

export default class InlineStyleControls extends React.Component {
    constructor(props) {
        super(props);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    }
    toggleInlineStyle(inlineStyle) {
        this.props.onToggle(inlineStyle);
    }
    render() {
        const currentStyle = this.props.editorState.getCurrentInlineStyle();
        return (<div className="inline-style-buttons-wrapper">
            {INLINE_STYLES.map((type) => {
                return (<StyleButton
                editorState={this.props.editorState}
                key={type.label}
                text={type.label}
                style={type.style}
                active={currentStyle.has(type.style)}
                onToggle={() => { this.toggleInlineStyle(type.style); }} />)
            })}
        </div>)
    }
}

InlineStyleControls.propTypes = {
    onToggle: React.PropTypes.func.isRequired,
    editorState: React.PropTypes.object.isRequired
}