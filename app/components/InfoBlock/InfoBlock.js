import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import './style.scss';

class InfoBlock extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderButtons = () => {
    const data = this.props.buttons;
    let buttons = '';
    if (data) {
      buttons = this.props.buttons.map((item) => {
        return (
          <Button key={item.label} image={item.image} src={item.src} label={item.label} />
        );
      });
    }
    return buttons;
  }

  render() {
    return (
      <div className="infoblock">
        <div className="infoblock-header heading">
          {this.props.header}
        </div>
        <div className="infoblock-content body">
          {this.props.content}
        </div>
        <div className="button-container">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default InfoBlock;
