import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  login = () => {
    this.props.login();
  }

  accessLink = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.click();
  }

  renderLoggedIn = () => {
    let section = '';
    let that = this;
    return (
      <div>
        <div className="signin-section">
          <div className="signin-label">
            Access Community
          </div>
          <button className="signin-button" onClick={() => that.accessLink("https://community.zigbee.org/home")}>
            Access
          </button>
        </div>
        <div className="signin-section">
          <div className="signin-label">
            Access Cert Tool
          </div>
          <button className="signin-button" onClick={() => that.accessLink("https://zigbeecertifiedproducts.knack.com/zigbee-certified")}>
            Access
          </button>
        </div>
      </div>
    );
  }

  renderSignIn = () => {
    let section = '';
    let that = this;
    section = this.props.data.menu.map((item) => {
      if (item.button === 'Log in') {
        return (
          <div key={item.button} className="signin-section">
            <div className="signin-label">
              {item.label}
            </div>
            <button className="signin-button" onClick={() => that.login()}>
              {item.button}
            </button>
          </div>
        );
      }
      return (
        <div key={item.button} className="signin-section">
          <div className="signin-label">
            {item.label}
          </div>
          <button className="signin-button">
            {item.button}
          </button>
        </div>
      );
    });
    return section;
  }

  render() {
    return (
      <div className="signin">
        {
          (this.props.authorized) ?
            this.renderLoggedIn()
            :
            this.renderSignIn()
        }
      </div>
    );
  }
}

export default SignIn;
