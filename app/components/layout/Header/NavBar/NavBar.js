import React from 'react';
import NavItem from '../NavItem/NavItem';
import { Link } from 'react-router-dom';

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderNavBar = () => {
    const data = this.props.data;
    let navItems = '';
    if (data) {
      let that = this;
      navItems = data.data.map((item) => {
        return (
          <NavItem key={item.title} title={item.title} data={item} login={that.props.login} authorized={that.props.authorized} config={this.props.config} />
        );
      });
    }
    return navItems;
  }

  render() {
    return (
      <div className="nav-bar">
        {this.renderNavBar()}
      </div>
    );
  }
}

export default NavBar;