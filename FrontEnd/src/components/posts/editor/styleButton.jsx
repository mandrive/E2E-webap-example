import React from 'react';

export default class StyleButton extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(e) {
        e.preventDefault();
        this.props.onToggle(this.props.style);
    }
    render() {
        let classes = "btn btn-secondary";
        if(this.props.active) {
            classes += " is-active"
        }

        return (
            <span className={classes} onMouseDown={this.onToggle}>
                {this.props.text}
            </span>
        )
    }
}

StyleButton.propTypes = {
    text: React.PropTypes.string.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    style: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool
}