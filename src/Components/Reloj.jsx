import React, { Component} from 'react';

import moment from 'moment';

class Reloj extends Component {
    interval;
    constructor(props) {
        super();
        this.state = {
            hora: moment(),
            pausado: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            pausado: !this.state.pausado,
        })
    }

    componentDidMount() {
        this.interval = setInterval(
          () => this.avanzar(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval); 
    }

    avanzar() {
        if (!this.state.pausado) {
            this.setState({
                hora: this.state.hora.add(1, 'seconds')
            })
        }
    }

    render() {
        return(
            <React.Fragment>
                <h3>{ `Son las ${ this.state.hora.format('HH:mm:ss') } hs.` }</h3>
                <button onClick={ this.handleClick }>{ this.state.pausado ? 'Reanudar' : 'Pausar' }</button>
        </React.Fragment> );
    }
}

export default Reloj;