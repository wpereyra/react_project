import React, { Component } from 'react';
import './../Styles.css'

import { Display, Button, ButtonMultiplicar } from './';

class Calculadura extends Component {
    constructor(props) {
        super();

        this.state = {
            displayString: ''
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick( char ) {
        if (char === '=') {
            this.setState({
                displayString: `${ eval(this.state.displayString) }`,
            })
        }
        else if(char === 'C') {
            this.setState({
                displayString: '',
            })
        }
        else if(char === 'CE') {
            this.setState({
                displayString: this.state.displayString.slice(0, -1),
            })
        }
        else {
            this.setState({
                displayString: this.state.displayString.concat(char),
            })
        }
    }

    render() {
        return(
            <table className="calculadora">
                <tbody>
                    <tr>
                        <td>
                            <Display value={ this.state.displayString }/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button label='C' classname="button-rojo" handleClick={ () => (this.onClick('C')) }/>
                            <Button label='(' handleClick={ this.onClick }/>
                            <Button label=')' handleClick={ this.onClick }/>
                            <Button label='/' handleClick={ this.onClick }/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button label='7' handleClick={ this.onClick }/>
                            <Button label='8' handleClick={ this.onClick }/>
                            <Button label='9' handleClick={ this.onClick }/>
                            <ButtonMultiplicar handleClick={ this.onClick }/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button label='4' handleClick={ this.onClick }/>
                            <Button label='5' handleClick={ this.onClick }/>
                            <Button label='6' handleClick={ this.onClick }/>
                            <Button label='-' handleClick={ this.onClick }/> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button label='1' handleClick={ this.onClick }/>
                            <Button label='2' handleClick={ this.onClick }/>
                            <Button label='3' handleClick={ this.onClick }/>
                            <Button label='+' handleClick={ this.onClick }/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button label='.'  handleClick={ this.onClick }/>
                            <Button label='0'  handleClick={ this.onClick }/>
                            <Button label='CE' handleClick={ this.onClick }/>
                            <Button label='=' classname="button-azul" handleClick={ this.onClick }/>
                        </td>
                    </tr>
                </tbody>
            </table>)
    }
}

export default Calculadura;