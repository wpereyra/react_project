import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { PresentationCard } from '.';
import './Styles.css';

class ListadoCards extends Component {
    render() {
        return(
            <div className="list-card">
                { this.props.personas.map( (persona, index) => ( <PresentationCard key={ index } persona={ persona } /> )) }
            </div> )
    }
}

ListadoCards.propTypes = {
    personas: PropTypes.array,
} 

ListadoCards.defaultProps = {
    personas: [],
}

export default ListadoCards;