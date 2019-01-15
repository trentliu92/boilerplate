import React from 'react';
import Cookies from 'js-cookie';

import config from 'config.json';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import navData from './data/navData.json';
import footerData from './data/footerData.json';


import './style.scss';

class Page extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      navData,
      footerData,
      authorized: false
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.checkLogin();
  }

  checkLogin = () => {
    if (Cookies.get('zb-alliance-login')) {
      const login = Cookies.getJSON('zb-alliance-login');
      const now = new Date(Date.now()).toISOString();
      if (now > login.notBefore && now < login.notOnOrAfter) {
        this.setState({
          authorized: true
        });
      }
    }
    return false;
  }

  login = () => {
    if (this.checkLogin() !== true) {
      const url = `https://login.zigbeealliance.org/sso-login-redirect?relaystate=${encodeURI(window.location.href)}!${encodeURI(window.location.host)}`;
      const login = document.createElement('a');
      login.setAttribute('href', url);
      login.click();
    }
  }

  render() {
    return (
      <div className="page">
        <div className="page-header">
          <Header
            site={'members'}
            header={this.props.header}
            data={this.state.navData}
            authorized={this.state.authorized}
            login={() => this.login()}
            config={config}
            logo={'inverted'}
          />
        </div>

        {this.props.component}
        
        <div className="page-footer">
          <Footer
            data={this.state.footerData}
            config={config}
          />
        </div>
      </div>
    );
  }
}

export default Page;
