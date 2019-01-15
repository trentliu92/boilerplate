import React from 'react';
// import { Link } from 'react-router-dom';

import About from './About';
import Learn from './Learn';
import Markets from './Markets';
import Products from './Products';
import Search from './Search';
import SignIn from './SignIn';
import Support from './Support';
import SignInIcon from './images/SignIn.svg';
import AuthorizedIcon from './images/AuthUser.svg';

import './style.scss';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleMenu = (toggle) => {
    if (this.state.show !== toggle) {
      this.setState({ show: toggle });
    }
  }

  renderSignInIcon = () => {
    if (this.props.authorized) {
      return (
        <div className="navitem-signin-icon-container">
          <img src={AuthorizedIcon} className="navitem-signin-icon-temp" alt="" />
        </div>
      );
    }
    return (
      <div className="navitem-signin-icon-container">
        <img src={SignInIcon} className="navitem-signin-icon" alt="" />
      </div>
    );
  }

  renderMenu = () => {
    const parentTitle = this.props.title;
    const data = this.props.data;
    switch (parentTitle) {
      case 'About':
        return (<About data={data} config={this.props.config} />);
      case 'Learn':
        return (<Learn data={data} config={this.props.config} />);
      case 'Markets':
        return (<Markets data={data} config={this.props.config} />);
      case 'Products':
        return (<Products data={data} config={this.props.config} />);
      case 'Search':
        return (<Search data={data} config={this.props.config} />);
      case 'Sign In':
        return (<SignIn data={data} login={this.props.login} authorized={this.props.authorized} config={this.props.config} />);
      case 'Support':
        return (<Support data={data} config={this.props.config} />);
      default:
        return (null);
    }
  }

  render() {
    let hide = 'dropdown-hidden';
    if (this.state.show === true) {
      hide = 'dropdown-show';
    }
    return (
      <div className="navitem" onMouseLeave={() => this.toggleMenu(false)}>
        <div className="navitem-title" onMouseEnter={() => this.toggleMenu(true)} >
          {this.props.data.title}
          {(this.props.title === "Sign In") ?
            this.renderSignInIcon()
            :
            null
          }
        </div>
        <div className={"nav-dropdown-container " + hide}>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-arrow">
            </div>
            <ul>
              {this.renderMenu()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavItem;
