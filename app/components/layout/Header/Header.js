import React from 'react';
import { Link } from 'react-router-dom';

import Mobile from './Mobile/Mobile';
import NavBar from './NavBar/NavBar';

// images
import HomeLogo from './images/HomeLogo.svg';
import Hamburger from './images/Hamburger.svg';
import Banner from './images/Banner.svg';
import Consumer from './images/Consumer.svg';
import Member from './images/Member.svg';
import Developer from './images/Developer.svg';

import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      open: false // toggles mobile menu
    };
  }

  handleHamburger = (state) => {
    this.setState({ open: state });
  }

  render() {
    let headerSRC = Consumer;
    if (this.props.site === 'developer') {
      headerSRC = Developer;
    } else if (this.props.site === 'members') {
      headerSRC = Member;
    }
    return (
      <div className="header">
        <div className="header-top">
          <Link className="header-logo-link" to="/">
            {(this.props.logo === 'inverted') ?
              <img alt="logo" src={HomeLogo} className="header-logo" />
              :
              <img alt="logo" src={Banner} className="header-logo" />
            }
          </Link>
          <NavBar
            data={this.props.data}
            login={this.props.login}
            authorized={this.props.authorized}
            config={this.props.config}
          />
          {
            (this.state.open) ?
              null
              :
              <div className="header-hamburger" onClick={() => this.handleHamburger(true)}>
                <img src={Hamburger} className="header-hamburger-image"/>
              </div>
          }
          <div className="header-hamburger">
            <Mobile
              data={this.props.data.mobile}
              open={this.state.open}
              handleHamburger={() => this.handleHamburger()}
              login={this.props.login}
              config={this.props.config}
            />
          </div>
        </div>
        {
          (this.props.header) ?
            <div className="header-bottom">
              <img src={headerSRC} className="header-banner" alt="header-banner" />
              <div className="header-bottom-header-container">
                <div className="header-bottom-header">
                  {this.props.header}
                </div>
              </div>
            </div>
            :
            null
        }
      </div>
    );
  }
}

export default Header;
