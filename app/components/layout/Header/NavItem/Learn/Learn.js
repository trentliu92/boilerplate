import React from 'react';
import { Link } from 'react-router-dom';

// logos
import DotDot from './images/DotDot.svg';
import JupiterMesh from './images/JupiterMesh.svg';
import rf4ce from './images/rf4ce.svg';
import SmartEnergy from './images/SmartEnergy.svg';
import Zigbee from './images/Zigbee.svg';


import './style.scss';

class Learn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderTechnologies = () => {
    const logoData = [
      {
        name: "zigbee",
        src: "/learn/standards-and-technologies/zigbee",
        hostname: "developer",
        img: Zigbee
      },
      {
        name: "dotdot",
        src: "/learn/standards-and-technologies/dotdot",
        hostname: "developer",
        img: DotDot
      },
      {
        name: "green power",
        src: "/learn/standards-and-technologies/greenpower",
        hostname: "developer"
      },
      {
        name: "smartenergy",
        src: "/learn/standards-and-technologies/smart-energy",
        hostname: "developer",
        img: SmartEnergy
      },
      {
        name: "jupitermesh",
        src: "/learn/standards-and-technologies/jupitermesh",
        hostname: "developer",
        img: JupiterMesh
      },
      {
        name: "rf4ce",
        src: "/learn/standards-and-technologies/rf4ce",
        hostname: "developer",
        img: rf4ce
      },
      {
        name: "zigbee pro",
        src: "/learn/standards-and-technologies/zigbee-pro",
        hostname: "developer"
      }
    ];
    let technologies = '';
    let hostname = 'localhost:3000';
    technologies = logoData.map((item) => {
      if (this.props.config.status === 'production') {
        hostname = this.props.config[item.hostname];
      }
      if (item.img) {
        return (
          <a key={item.name} className="nav-learn-technology-image-container" href={`http://${hostname}${item.src}`}>
            <img src={item.img} className="nav-learn-technology-image" alt="standard and tech" />
          </a>
        );
      }
      return (
        <a key={item.name} className="nav-learn-technology-image-container" href={item.src}>
          {item.name}
        </a>
      );
    });
    if (this.props.config.status === 'production') {
      hostname = this.props.config.developer;
    }
    return (
      <div className="nav-learn-container">
        <a className="nav-learn-header" href={`http://${hostname}/learn/standards-and-technologies`}>
          Standards and Technologies
        </a>
        <div className="nav-learn-technology-container">
          {technologies}
        </div>
      </div>
    );
  }

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
          case 'technologies':
            return (
              this.renderTechnologies()
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
      <div className="learn">
        {this.renderMenu()}
      </div>
    );
  }
}

export default Learn;
