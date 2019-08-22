import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../Styles.css'

class ButtonMultiplicar extends Component {
    constructor(props) {
        super();

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick && this.props.handleClick('*');
    }

    render() {
        const { classname } = this.props;
        return( <button className={ classname } onClick={ this.handleClick }>X</button> )
    }
}

ButtonMultiplicar.propTypes = {
    handleClick: PropTypes.func,
    classname: PropTypes.string,
}

ButtonMultiplicar.defaultProps = {
    handleClick: null,
    classname: 'button',
}

export default ButtonMultiplicar;