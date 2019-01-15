import React from 'react';
import { Link } from 'react-router-dom';

import ButtonImage from './images/Group 8.svg';

import './style.scss';

class Button extends React.Component {
  accessLink = () => {
    // access this.props.src
  }

  render() {
    return (
      <div className="button">
        <div className="button-image-container">
          <img alt='button' className="button-image" src={ ButtonImage } onClick={ () => this.accessLink() }/>
        </div>
        <div className="button-label" onClick={ () => this.accessLink() }>
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default Button;
