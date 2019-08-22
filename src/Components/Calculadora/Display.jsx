import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../Styles.css'

class Display extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onChange && this.props.onChange()
    }

    render() {
        return( <input onChange={ this.handleChange } value={ this.props.value } className="calculadora-display"/>)
    }
}

Display.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

Display.defaultProps = {
    value: '',
    onChange: null,
}

export default Display;