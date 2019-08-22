import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

class PresentationCard extends Component {
    constructor(props) {
        super();
    }
    renderImg() {
        const { persona } = this.props;
        return(<img src={ persona.img_url } className="card-img" alt="img" mode='fit'/>);
    }

    renderInfo() {
        const { persona } = this.props;
        return(
            <React.Fragment>
                <h2 className="card-label">{ persona.nombre || '' }</h2>
                <label className="card-label">{ persona.edad ? `${ persona.edad } años` : '' }</label>
                <label className="card-label">{ persona.empresa || '' }</label>
            </React.Fragment> )
    }
    render() {
        return(
            <div className="card">
                { this.renderImg()  }  
                { this.renderInfo() }
            </div> )
    }
}

PresentationCard.propTypes = {
    persona: PropTypes.object,
}

PresentationCard.defaultProps = {
    persona: null,
}

export default PresentationCard;