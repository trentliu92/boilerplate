import React from 'react';
import { Link } from 'react-router-dom';

import Button from './images/Button.svg';
import SearchIcon from './images/Search Icon.svg';
import ExitButton from './images/ExitButton.svg';

import './style.scss';

class Mobile extends React.Component { // eslint-disable-line react/prefer-stateless-function

  close = () => {
    this.props.handleHamburger(false);
  }

  render() {
    const data = this.props.data;
    let mobile = '';
    if (data) {
      mobile = data.map((item) => {
        switch (item.type) {
          case 'link':
            return (
              <div className="header-mobile-item-container">
                <Link className="header-mobile-link" to={item.src}>
                  {item.title}
                </Link>
              </div>
            );
          case 'button':
            return (
              <div className="header-mobile-item-container">
                <div className="header-mobile-button-container">
                  <Link className="header-mobile-button" to={item.src}>
                    {item.title}
                  </Link>
                </div>
              </div>
            );
          case 'span':
            return (
              <div className="header-mobile-span-container">
                <div className="header-mobile-span">
                </div>
              </div>
            );
          default:
            return (null);
        }
      });
    }
    return (
      (this.props.open) ?
        <div className="header-mobile">
          <div>
            {mobile}
            <div className="header-mobile-search">
              <div className="header-mobile-item-container">
                <div className="mobile-search-bar-container">
                  <div className="mobile-search-bar-icon-container">
                    <img src={SearchIcon} className="mobile-search-bar-icon" alt="search.svg" />
                  </div>
                  <input
                    className="mobile-search-input"
                    name={'search'}
                    type={'text'}
                    placeholder={'Search'}
                  />
                </div>
              </div>
            </div>
            <div className="header-mobile-item-container">
              <div className="header-mobile-button-container">
                <a className="header-mobile-button" to="">
                  Log In
                </a>
              </div>
            </div>
            <div className="header-mobile-item-container">
              <Link className="header-mobile-link header-mobile-subscribe" to="">
                <img className="header-mobile-subscribe-image" alt="" src={Button} /><div className="header-mobile-subscribe-label">Subscribe to Newsletter</div>
              </Link>
            </div>
          </div>
          <div className="header-mobile-exit-button-container">
            <img src={ExitButton} className="header-mobile-exit-button" onClick={() => this.close()}/>
          </div>
        </div>
        :
        null
    );
  }
}

export default Mobile;
