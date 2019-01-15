import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class Markets extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderMenu = () => {
    const data = this.props.data.menu;
    let menu = '';
    let hostname = 'localhost:3000';
    if (data) {
      menu = data.map((item) => {
        switch (item.type) {
          case 'link':
            if (this.props.config.status === 'production') {
              hostname = this.props.config[item.hostname];
            }
            return (
              <li>
                <div className="list-wrapper">
                  <a className="navitem-menu-title submenu-item" key={item.title} href={`http://${hostname}${item.src}`}>
                    {item.title}
                  </a>
                </div>
              </li>
            );
          case 'span':
            return (
              <li>
                <div className="navitem-span-container">
                  <div className="navitem-span">
                  </div>
                </div>
              </li>
            );
          default:
            return (null);
        }
      });
    }
    return menu;
  }
  render() {
    return (
      <div className="markets">
        {this.renderMenu()}
      </div>
    );
  }
}

export default Markets;
