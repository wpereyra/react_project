import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../Styles.css'

class Button extends Component {
    constructor(props) {
        super();

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick && this.props.handleClick(this.props.label == 'X' ? '*' : this.props.label);
    }

    render() {
        const { label, classname } = this.props;
        return( <button className={ classname } onClick={ this.handleClick }>{ label }</button> )
    }
}

Button.propTypes = {
    handleClick: PropTypes.func,
    label: PropTypes.string,
    classname: PropTypes.string,
}

Button.defaultProps = {
    handleClick: null,
    label: '',
    classname: 'button',
}

export default Button;